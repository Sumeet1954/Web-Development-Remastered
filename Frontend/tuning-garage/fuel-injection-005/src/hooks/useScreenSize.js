import { useState, useEffect } from "react";

const useScreenSize = () => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [screenSize, setScreenSize] = useState(() => {
    if (typeof window !== "undefined") {
      return getSize();
    }
    return { width: 0, height: 0 };
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setScreenSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;