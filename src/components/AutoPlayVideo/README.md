# AutoPlayVideo Component

A React component for embedding Vimeo videos that auto-play when triggered by JavaScript, with no controls and no audio by default.

## Features

- ✅ Auto-play on scroll into view
- ✅ No controls, no audio by default
- ✅ Manual trigger support
- ✅ Intersection Observer API for performance
- ✅ TypeScript support
- ✅ Responsive design
- ✅ Event callbacks
- ✅ Imperative API via refs

## Installation

Make sure you have the Vimeo Player SDK installed:

```bash
npm install @vimeo/player
```

## Basic Usage

### Simple Auto-Play on Scroll

```tsx
import AutoPlayVideo from "./components/AutoPlayVideo/AutoPlayVideo";

function MyComponent() {
  return (
    <div style={{ height: "400px" }}>
      <AutoPlayVideo 
        vimeoId="YOUR_VIMEO_ID"
        triggerOnView={true}
      />
    </div>
  );
}
```

### Enhanced Version with Manual Controls

```tsx
import { useRef } from "react";
import AutoPlayVideoEnhanced, { AutoPlayVideoRef } from "./components/AutoPlayVideo/AutoPlayVideoEnhanced";

function MyComponent() {
  const videoRef = useRef<AutoPlayVideoRef>(null);

  const handlePlay = async () => {
    await videoRef.current?.play();
  };

  return (
    <div>
      <div style={{ height: "400px" }}>
        <AutoPlayVideoEnhanced
          ref={videoRef}
          vimeoId="YOUR_VIMEO_ID"
          triggerOnView={true}
          onPlay={() => console.log("Started playing")}
          onPause={() => console.log("Paused")}
        />
      </div>
      <button onClick={handlePlay}>Manual Play</button>
    </div>
  );
}
```

## Component Props

### AutoPlayVideo Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `vimeoId` | `string` | **required** | The Vimeo video ID |
| `triggerOnView` | `boolean` | `true` | Whether to auto-play when scrolled into view |
| `className` | `string` | `""` | Additional CSS classes |

### AutoPlayVideoEnhanced Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `vimeoId` | `string` | **required** | The Vimeo video ID |
| `triggerOnView` | `boolean` | `true` | Whether to auto-play when scrolled into view |
| `threshold` | `number` | `0.5` | Intersection Observer threshold (0-1) |
| `rootMargin` | `string` | `"0px 0px -100px 0px"` | Intersection Observer root margin |
| `loop` | `boolean` | `true` | Whether to loop the video |
| `muted` | `boolean` | `true` | Whether to mute the video |
| `className` | `string` | `""` | Additional CSS classes |
| `aspectRatio` | `"16x9" \| "4x3" \| "1x1" \| "none"` | `"16x9"` | Video aspect ratio |
| `onPlay` | `() => void` | `undefined` | Callback when video starts playing |
| `onPause` | `() => void` | `undefined` | Callback when video pauses |
| `onEnded` | `() => void` | `undefined` | Callback when video ends |

## Imperative API (AutoPlayVideoEnhanced only)

```tsx
const videoRef = useRef<AutoPlayVideoRef>(null);

// Available methods:
await videoRef.current?.play();
await videoRef.current?.pause();
await videoRef.current?.stop(); // Pause and reset to beginning
await videoRef.current?.setCurrentTime(30); // Seek to 30 seconds
const duration = await videoRef.current?.getDuration();
const currentTime = await videoRef.current?.getCurrentTime();
const player = videoRef.current?.getPlayer(); // Get raw Vimeo Player instance
```

## Common Use Cases

### 1. Hero Section Background Video

```tsx
<div className="hero-section">
  <AutoPlayVideoEnhanced
    vimeoId="YOUR_VIDEO_ID"
    triggerOnView={true}
    threshold={0.1} // Start playing when 10% visible
    aspectRatio="16x9"
    loop={true}
    muted={true}
    className="hero-video"
  />
  <div className="hero-content">
    <h1>Your Hero Title</h1>
  </div>
</div>
```

### 2. Portfolio Showcase

```tsx
<div className="portfolio-item">
  <AutoPlayVideoEnhanced
    vimeoId="YOUR_DEMO_VIDEO"
    triggerOnView={true}
    threshold={0.5}
    loop={false}
    onEnded={() => showCallToAction()}
  />
</div>
```

### 3. Manual Trigger with Intersection

```tsx
function VideoSection() {
  const videoRef = useRef<AutoPlayVideoRef>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleCustomTrigger = () => {
    if (!hasPlayed) {
      videoRef.current?.play();
      setHasPlayed(true);
    }
  };

  return (
    <div onClick={handleCustomTrigger}>
      <AutoPlayVideoEnhanced
        ref={videoRef}
        vimeoId="YOUR_VIDEO_ID"
        triggerOnView={false} // Disable auto-trigger
        onPlay={() => setHasPlayed(true)}
      />
    </div>
  );
}
```

## Vimeo Video Requirements

For best results, ensure your Vimeo video:

1. **Has autoplay enabled** in Vimeo settings
2. **Is set to unlisted or public** (private videos may have restrictions)
3. **Has appropriate permissions** for embedding
4. **Is optimized for web playback**

## Browser Compatibility

- **Autoplay Policy**: Most browsers require videos to be muted for autoplay to work
- **Intersection Observer**: Supported in all modern browsers
- **iOS Safari**: May require user interaction before playing any video

## Performance Considerations

- Uses `loading="lazy"` for iframe by default
- Intersection Observer only observes when needed
- Player instance is properly cleaned up on unmount
- Avoids memory leaks with proper event handling

## Troubleshooting

### Video won't autoplay
1. Ensure the video is muted (`muted={true}`)
2. Check browser autoplay policies
3. Verify Vimeo video settings allow embedding

### Video appears but doesn't trigger
1. Check that the container has proper dimensions
2. Verify Intersection Observer threshold settings
3. Check console for JavaScript errors

### Performance issues
1. Reduce the number of videos on a single page
2. Use `loading="lazy"` (enabled by default)
3. Consider using lower resolution videos for background use

## Styling

The component includes basic SCSS modules. You can override styles:

```scss
.my-video {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

```tsx
<AutoPlayVideo 
  vimeoId="123456"
  className="my-video"
/>
```
