// Example usage of AutoPlayVideo components

import { useRef } from "react";
import AutoPlayVideo from "./AutoPlayVideo";
import AutoPlayVideoEnhanced, { AutoPlayVideoRef } from "./AutoPlayVideoEnhanced";

// Basic Usage - Auto-play on scroll
export const BasicAutoPlayExample = () => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <AutoPlayVideo 
        vimeoId="1085347461" // Your Vimeo video ID
        triggerOnView={true}
        className="my-video-class"
      />
    </div>
  );
};

// Enhanced Usage with manual controls
export const EnhancedAutoPlayExample = () => {
  const videoRef = useRef<AutoPlayVideoRef>(null);

  const handleManualPlay = async () => {
    if (videoRef.current) {
      await videoRef.current.play();
    }
  };

  const handleManualPause = async () => {
    if (videoRef.current) {
      await videoRef.current.pause();
    }
  };

  const handleSkipToMiddle = async () => {
    if (videoRef.current) {
      const duration = await videoRef.current.getDuration();
      await videoRef.current.setCurrentTime(duration / 2);
    }
  };

  return (
    <div>
      <div style={{ height: "400px", width: "100%" }}>
        <AutoPlayVideoEnhanced
          ref={videoRef}
          vimeoId="1085347461"
          triggerOnView={true}
          threshold={0.3} // Trigger when 30% visible
          aspectRatio="16x9"
          loop={true}
          muted={true}
          onPlay={() => console.log("Video started playing")}
          onPause={() => console.log("Video paused")}
          onEnded={() => console.log("Video ended")}
        />
      </div>
      
      {/* Manual controls */}
      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <button onClick={handleManualPlay}>Play</button>
        <button onClick={handleManualPause}>Pause</button>
        <button onClick={handleSkipToMiddle}>Skip to Middle</button>
      </div>
    </div>
  );
};

// No auto-play, manual trigger only
export const ManualTriggerExample = () => {
  const videoRef = useRef<AutoPlayVideoRef>(null);

  const handleTriggerPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div>
      <div style={{ height: "400px", width: "100%" }}>
        <AutoPlayVideoEnhanced
          ref={videoRef}
          vimeoId="1085347461"
          triggerOnView={false} // Disable auto-play on scroll
          aspectRatio="16x9"
        />
      </div>
      
      <button 
        onClick={handleTriggerPlay}
        style={{ marginTop: "1rem" }}
      >
        Click to Play Video
      </button>
    </div>
  );
};

// Multiple videos with different triggers
export const MultipleVideosExample = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Video 1: Auto-play when 50% visible */}
      <div style={{ height: "300px" }}>
        <AutoPlayVideoEnhanced
          vimeoId="1085347461"
          triggerOnView={true}
          threshold={0.5}
          aspectRatio="16x9"
        />
      </div>

      {/* Video 2: Auto-play when fully visible */}
      <div style={{ height: "300px" }}>
        <AutoPlayVideoEnhanced
          vimeoId="1085347461"
          triggerOnView={true}
          threshold={1.0}
          aspectRatio="16x9"
        />
      </div>

      {/* Video 3: Square aspect ratio */}
      <div style={{ height: "300px", width: "300px" }}>
        <AutoPlayVideoEnhanced
          vimeoId="1085347461"
          triggerOnView={true}
          aspectRatio="1x1"
        />
      </div>
    </div>
  );
};
