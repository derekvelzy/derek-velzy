"use client";

import { useEffect, useRef, useState, useCallback, forwardRef, useImperativeHandle } from "react";
import Player from "@vimeo/player";
import styles from "./AutoPlayVideo.module.scss";
import cx from "classnames";

interface AutoPlayVideoProps {
  vimeoId: string;
  triggerOnView?: boolean;
  threshold?: number; // Intersection threshold (0-1)
  rootMargin?: string; // Intersection root margin
  loop?: boolean;
  muted?: boolean;
  className?: string;
  aspectRatio?: "16x9" | "4x3" | "1x1" | "none";
  objectFit?: "fill" | "cover"; // New prop for object-fit behavior
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

export interface AutoPlayVideoRef {
  play: () => Promise<void>;
  pause: () => Promise<void>;
  stop: () => Promise<void>;
  setCurrentTime: (time: number) => Promise<void>;
  getDuration: () => Promise<number>;
  getCurrentTime: () => Promise<number>;
  getPlayer: () => Player | null;
}

const AutoPlayVideo = forwardRef<AutoPlayVideoRef, AutoPlayVideoProps>(({
  vimeoId,
  triggerOnView = true,
  threshold = 0.5,
  rootMargin = "0px 0px -100px 0px",
  loop = true,
  muted = true,
  className = "",
  objectFit = "fill", // Default to normal fill behavior
//   aspectRatio = "16x9",
  onPlay,
  onPause,
  onEnded
}, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const playVideo = useCallback(async () => {
    if (playerRef.current && !isPlaying) {
      try {
        await playerRef.current.play();
        onPlay?.();
      } catch (error) {
        console.warn("Autoplay failed:", error);
      }
    }
  }, [isPlaying, onPlay]);

  const pauseVideo = useCallback(async () => {
    if (playerRef.current && isPlaying) {
      await playerRef.current.pause();
      onPause?.();
    }
  }, [isPlaying, onPause]);
 
  const stopVideo = useCallback(async () => {
    if (playerRef.current) {
      await playerRef.current.pause();
      await playerRef.current.setCurrentTime(0);
      onPause?.();
    }
  }, [onPause]);

  const setCurrentTime = useCallback(async (time: number) => {
    if (playerRef.current) {
      await playerRef.current.setCurrentTime(time);
    }
  }, []);

  const getDuration = useCallback(async () => {
    if (playerRef.current) {
      return await playerRef.current.getDuration();
    }
    return 0;
  }, []);

  const getCurrentTime = useCallback(async () => {
    if (playerRef.current) {
      return await playerRef.current.getCurrentTime();
    }
    return 0;
  }, []);

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    play: playVideo,
    pause: pauseVideo,
    stop: stopVideo,
    setCurrentTime,
    getDuration,
    getCurrentTime,
    getPlayer: () => playerRef.current
  }), [playVideo, pauseVideo, stopVideo, setCurrentTime, getDuration, getCurrentTime]);

  // Initialize Vimeo Player
  useEffect(() => {
    if (containerRef.current && !playerRef.current) {
      const iframe = containerRef.current.querySelector("iframe");
      if (iframe) {
        playerRef.current = new Player(iframe);

        // Configure player settings
        if (muted) {
          playerRef.current.setVolume(0);
        }
        
        // Listen to player events
        playerRef.current.on('play', () => {
          setIsPlaying(true);
          setIsLoaded(true);
        });
        
        playerRef.current.on('pause', () => {
          setIsPlaying(false);
        });
        
        playerRef.current.on('ended', () => {
          setIsPlaying(false);
          onEnded?.();
        });

        playerRef.current.on('loaded', () => {
          setIsLoaded(true);
        });
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [muted, onEnded]);

  // Intersection Observer for scroll trigger
  useEffect(() => {
    if (!triggerOnView || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            playVideo();
          } else if (!entry.isIntersecting && isInView) {
            setIsInView(false);
            pauseVideo();
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnView, isInView, playVideo, pauseVideo, threshold, rootMargin]);

  const containerClasses = cx(
    objectFit === "cover" ? styles.containerCover : styles.container,
    // {
    //   [styles.aspectRatio16x9]: aspectRatio === "16x9",
    //   [styles.aspectRatio4x3]: aspectRatio === "4x3",
    //   [styles.aspectRatio1x1]: aspectRatio === "1x1",
    // },
    className
  );

  const vimeoUrl = `https://player.vimeo.com/video/${vimeoId}?` + 
    `background=1&` +
    `autoplay=0&` +
    `muted=${muted ? 1 : 0}&` +
    `controls=0&` +
    `loop=${loop ? 1 : 0}&` +
    `autopause=0&` +
    `dnt=1`; // Do not track

  return (
    <div ref={containerRef} className={containerClasses}>
      {!isLoaded && (
        <div className={styles.loading}>
          Loading video...
        </div>
      )}
      <iframe
        src={vimeoUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Auto-playing video"
        loading="lazy"
      />
    </div>
  );
});

AutoPlayVideo.displayName = "AutoPlayVideo";

export default AutoPlayVideo;
