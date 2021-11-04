import { useCallback, useEffect, useState } from "react";

const Default = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const onHandleWindowChange = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onHandleWindowChange);
    return () => window.removeEventListener("resize", onHandleWindowChange);
  }, [onHandleWindowChange]);

  return width;
};

export default Default;
