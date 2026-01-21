// import React, { useEffect, useRef, useState } from 'react';
// import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

// export default function ImageSequence({ containerRef }) {
//   const canvasRef = useRef(null);
//   const [images, setImages] = useState([]);
//   const frameCount = 240; 
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });
  
//   // Transform scroll progress to frame index
//   // We map 0 to 1 directly to 0 to frameCount-1
//   const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

//   useEffect(() => {
//     const loadedImages = [];
//     const promises = [];

//     for (let i = 1; i <= frameCount; i++) {
//         const promise = new Promise((resolve) => {
//             const img = new Image();
//             const paddedIndex = i.toString().padStart(3, '0');
//             img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
//             img.onload = () => resolve(img);
//             loadedImages.push(img);
//         });
//         promises.push(promise);
//     }

//     Promise.all(promises).then(() => {
//         setImages(loadedImages);
//     });
//   }, []);

//   const renderFrame = (index) => {
//     const canvas = canvasRef.current;
//     if (!canvas || images.length === 0) return;
//     const ctx = canvas.getContext('2d');
    
//     // Clear? Not strictly needed if drawing full opaque frame
//     const img = images[Math.round(index)];
//     if (img) {
//         // Maintain aspect ratio or cover? "object-contain" usually implies "fit"
//         // But for canvas, we draw image to fill or fit.
//         // Let's draw it to fill height/width nicely.
//         // Assuming 16:9 images.
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
        
//         // Draw image centered and scaled to cover or contain
//         // Let's do simple draw for now 
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//     }
//   };

//   useMotionValueEvent(frameIndex, "change", (latest) => {
//     renderFrame(latest);
//   });
  
//   // Initial render when images load
//   useEffect(() => {
//     if(images.length > 0) renderFrame(frameIndex.get());
//   }, [images]);

//   return (
//     <div className="fixed inset-0 z-0 flex items-center justify-center bg-sony-black pointer-events-none">
//          <canvas 
//             ref={canvasRef}
//             className="w-full h-full object-contain md:object-cover"
//             width={1280} 
//             height={720}
//          />
//     </div>
//   );
// }













import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

export default function ImageSequence({ containerRef, onLoadProgress }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const lastFrameRef = useRef(-1); // Track last rendered frame to avoid redundant draws
  const rafIdRef = useRef(null); // For requestAnimationFrame throttling
  const pendingFrameRef = useRef(null); // Store pending frame to render
  
  // Only load alternate frames: 1, 3, 5, ..., 239 (120 frames total)
  const frameIndices = useRef(
    Array.from({ length: 120 }, (_, i) => i * 2 + 1)
  ).current;
  const totalLoadedFrames = frameIndices.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to our loaded frame array index (0 to 119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalLoadedFrames - 1]);

  // Preload only alternate frames & report progress
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = new Array(totalLoadedFrames);
    const promises = [];

    frameIndices.forEach((frameNum, arrayIndex) => {
      const promise = new Promise((resolve) => {
        const img = new Image();
        const paddedIndex = frameNum.toString().padStart(3, '0');
        img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          if (onLoadProgress) {
            onLoadProgress(Math.round((loadedCount / totalLoadedFrames) * 100));
          }
          resolve(img);
        };
        img.onerror = () => {
          loadedCount++;
          if (onLoadProgress) onLoadProgress(Math.round((loadedCount / totalLoadedFrames) * 100));
          resolve(null);
        };
        loadedImages[arrayIndex] = img;
      });
      promises.push(promise);
    });

    Promise.all(promises).then(() => {
      setImages(loadedImages);
    });
  }, []);

  // Optimized render with "cover" logic
  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    
    const roundedIndex = Math.round(index);
    
    // Skip if same frame as last render (avoid redundant draws)
    if (roundedIndex === lastFrameRef.current) return;
    lastFrameRef.current = roundedIndex;
    
    const ctx = canvas.getContext('2d');
    const img = images[roundedIndex];
    
    if (img) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Calculate scale for "cover" behavior
      const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
      const x = (canvasWidth / 2) - (img.width / 2) * scale;
      const y = (canvasHeight / 2) - (img.height / 2) * scale;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  }, [images]);

  // RAF-throttled render scheduler
  const scheduleRender = useCallback((index) => {
    pendingFrameRef.current = index;
    
    if (rafIdRef.current === null) {
      rafIdRef.current = requestAnimationFrame(() => {
        if (pendingFrameRef.current !== null) {
          renderFrame(pendingFrameRef.current);
        }
        rafIdRef.current = null;
      });
    }
  }, [renderFrame]);

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  // Handle canvas resizing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        lastFrameRef.current = -1; // Force redraw after resize
        renderFrame(frameIndex.get());
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [images, renderFrame, frameIndex]);

  // Update frame on scroll using RAF throttling
  useMotionValueEvent(frameIndex, "change", (latest) => {
    scheduleRender(latest);
  });
  
  // Initial render when images finish loading
  useEffect(() => {
    if (images.length > 0) {
      lastFrameRef.current = -1; // Force initial render
      renderFrame(frameIndex.get());
    }
  }, [images, renderFrame, frameIndex]);

  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center bg-sony-black pointer-events-none">
      <canvas 
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}