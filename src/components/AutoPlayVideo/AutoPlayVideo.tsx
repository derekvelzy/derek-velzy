"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Player from "@vimeo/player";

interface AutoPlayVideoProps {
  vimeoId: string;
  triggerOnView?: boolean; // Whether to trigger on scroll into view
  className?: string;
}

const AutoPlayVideo = ({ 
  vimeoId, 
  triggerOnView = true, 
  className = "" 
}: AutoPlayVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const playVideo = useCallback(async () => {
    if (playerRef.current && !isPlaying) {
      try {
        await playerRef.current.play();
      } catch (error) {
        console.warn("Autoplay failed:", error);
      }
    }
  }, [isPlaying]);

  const pauseVideo = useCallback(async () => {
    if (playerRef.current && isPlaying) {
      await playerRef.current.pause();
    }
  }, [isPlaying]);

  // Initialize Vimeo Player
  useEffect(() => {
    if (containerRef.current) {
      const iframe = containerRef.current.querySelector("iframe");
      if (iframe) {
        playerRef.current = new Player(iframe);

        // Configure player settings
        playerRef.current.setVolume(0); // Mute the video
        
        // Optional: Listen to player events
        playerRef.current.on('play', () => setIsPlaying(true));
        playerRef.current.on('pause', () => setIsPlaying(false));
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

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
        threshold: 0.5, // Trigger when 50% of the video is visible
        rootMargin: "0px 0px -100px 0px" // Trigger slightly before fully in view
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnView, isInView, playVideo, pauseVideo]);

  // Expose trigger functions via imperative handle
  const triggerPlay = useCallback(() => {
    playVideo();
  }, [playVideo]);

  const triggerPause = useCallback(() => {
    pauseVideo();
  }, [pauseVideo]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      data-trigger-play={triggerPlay}
      data-trigger-pause={triggerPause}
    >
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=0&muted=1&controls=0&loop=1`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Auto-playing video"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};

export default AutoPlayVideo;
