import { useState } from "react";

export default function useHover() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return { isHovering, handleMouseOver, handleMouseOut };
}
