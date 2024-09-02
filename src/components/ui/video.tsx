import { useCallback, useEffect, useRef } from "react";
import useIsVisible from "../../hooks/useIsVisible";

export default function Video({ src }: { src: string }) {
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    },
    false
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideoOnMouseMove = useCallback(async () => {
    try {
      await videoRef.current!.play();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const stopVideoOnMove = useCallback(() => {
    try {
      videoRef.current!.pause();
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);

  return (
    <span ref={targetRef as any}>
      <video
        ref={videoRef}
        className="lg:w-[500px] xl:w-[600px] rounded-xl group-hover:blur-sm duration-500 group-hover:scale-[1.1]"
        src={src}
        autoPlay={false}
        preload="none"
        playsInline
        muted
        loop
      />
    </span>
  );
}
