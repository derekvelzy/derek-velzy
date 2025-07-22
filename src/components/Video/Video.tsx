"use client";

// Package imports
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Player from "@vimeo/player";
import cx from "classnames";

// Custom imports
import videoCover from "@public/img/video-cover-1.jpg";
import styles from "./Video.module.scss";
import { handleFocusChange } from "~/helpers/handleFocusChange";

const Video = ({}) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [curtain, setCurtain] = useState(false);
  const [progress, setProgress] = useState(0); // Track video progress

  const playerRef = useRef<Player | null>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const iframe = videoRef.current.querySelector("iframe");
      if (iframe) {
        playerRef.current = new Player(iframe); // Initialize the Vimeo Player

        playerRef.current.on("timeupdate", (data) => {
          if (playerRef.current) {
            playerRef.current.getDuration().then((duration) => {
              setProgress((data.seconds / duration) * 100); // Calculate progress percentage
            });
          }
        });
      }
    }
  }, []);

  const handleVideoClick = () => {
    if (playerRef.current) {
      if (videoPlaying) {
        playerRef.current.pause(); // Pause the video
      } else {
        playerRef.current.play(); // Play the video
      }
      setVideoPlaying(!videoPlaying); // Toggle the state
    }
    setCurtain(true); // Toggle the curtain state
  };

  const handleScrubberClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (playerRef.current) {
      const scrubberWidth = e.currentTarget.offsetWidth;
      const clickPosition = e.nativeEvent.offsetX;
      const newTime = (clickPosition / scrubberWidth) * 100;

      playerRef.current.getDuration().then((duration) => {
        playerRef?.current?.setCurrentTime((newTime / 100) * duration); // Seek to the new time
      });
    }
  };

  const handleScrubberKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (playerRef.current) {
      const scrubberWidth = e.currentTarget.offsetWidth;
      const currentTime = (progress / 100) * scrubberWidth;

      if (e.key === "ArrowRight") {
        const newTime = Math.min(
          currentTime + scrubberWidth * 0.05,
          scrubberWidth
        );
        playerRef.current.getDuration().then((duration) => {
          playerRef?.current?.setCurrentTime(
            (newTime / scrubberWidth) * duration
          );
        });
      } else if (e.key === "ArrowLeft") {
        const newTime = Math.max(currentTime - scrubberWidth * 0.05, 0);
        playerRef.current.getDuration().then((duration) => {
          playerRef?.current?.setCurrentTime(
            (newTime / scrubberWidth) * duration
          );
        });
      }
    }
  };

  const cancelVideoAndRestart = () => {
    if (playerRef.current) {
      playerRef.current.pause();
      setVideoPlaying(false);
      setCurtain(false);

      setTimeout(() => {
        playerRef?.current?.setCurrentTime(0);
        setProgress(0);
        handleFocusChange("video-cover");
      }, 650);
    }
  };

  return (
    <div id="video--work" ref={videoRef} className={styles["video"]}>
      <div className="flex flex-col">
        <iframe
          src={`https://player.vimeo.com/video/1085347461?h=d1b0762162&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&controls=0`}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          title="Untitled"
          tabIndex={-1}
        ></iframe>
        <button
          onClick={cancelVideoAndRestart}
          className={styles["video__close"]}
          tabIndex={curtain ? 0 : -1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            viewBox="0 0 100 100"
          >
            <line x1="10" y1="10" x2="90" y2="90" strokeWidth="10" />
            <line x1="10" y1="90" x2="90" y2="10" strokeWidth="10" />
          </svg>
        </button>
        <div className={styles["video__controls__container"]}>
          <div className={styles["video__controls"]}>
            <button
              id="play-pause-button"
              onClick={handleVideoClick}
              tabIndex={curtain ? 0 : -1}
            >
              {videoPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 100 100"
                >
                  <rect x="20" y="20" width="15" height="70" />
                  <rect x="55" y="20" width="15" height="70" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 100 100"
                >
                  <polygon points="10,10 90,50 10,90" />
                </svg>
              )}
            </button>
            <div
              className={styles["video__controls__scrubber"]}
              onClick={handleScrubberClick}
              onKeyDown={handleScrubberKeyDown}
              tabIndex={curtain ? 0 : -1}
            >
              <div
                className={styles["video__controls__scrubber__progress"]}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={cx(styles["video__blur"], {
          [styles["video__blur-active"]]: !curtain,
        })}
      />

      <div
        id="video-cover"
        className={cx(styles["video__cover"], {
          [styles["video__cover-active"]]: !curtain,
        })}
        onClick={() => {
          if (!curtain) handleVideoClick();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!curtain) handleVideoClick();
            handleFocusChange("play-pause-button");
          }
        }}
        role="button"
        aria-label="Play video"
        tabIndex={curtain ? -1 : 0}
      >
        <Image
          src={videoCover}
          alt={"video cover"}
          fill={true}
          sizes="(max-width: 479px) 50vw, (max-width: 1279px) 440px"
        />
        <div className={styles["video__cover__play"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4rem"
            height="4rem"
            viewBox="0 0 100 100"
          >
            <polygon points="10,10 90,50 10,90" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Video;
