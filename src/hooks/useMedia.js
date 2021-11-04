import { useState, useCallback, useEffect } from "react";
let { matchMedia } = window;
// 320
const smallSmMedia = matchMedia("(min-width: 0) and (max-width: 320px)");
// 375
const smallLgMedia = matchMedia(
  "(min-width: 320.9px) and (max-width: 375.9px)"
);
// 425
const mediumSmMedia = matchMedia(
  "(min-width: 375.9px) and (max-width: 425.9px)"
);
// 768
const mediumLgMedia = matchMedia(
  "(min-width: 425.9px) and (max-width: 768.9px)"
);
// 1024
const largeSmMedia = matchMedia(
  "(min-width: 768.9px) and (max-width: 1024.9px)"
);
// 1440
const largeLgMedia = matchMedia("(min-width: 1025px)");

const sizeStore = [
  smallSmMedia,
  smallLgMedia,
  mediumSmMedia,
  mediumLgMedia,
  largeSmMedia,
  largeLgMedia,
];

const subscribe = (handler) => {
  sizeStore.forEach((media) => media.addEventListener("change", handler));
};

const unsubscribe = (handler) => {
  sizeStore.forEach((media) => media.removeEventListener("change", handler));
};

// Get Screen Sizes
function getMediaMatches() {
  return {
    isSmallSmMedia: smallSmMedia.matches,
    isSmallLgMedia: smallLgMedia.matches,
    isMediumSmMedia: mediumSmMedia.matches,
    isMediumLgMedia: mediumLgMedia.matches,
    isLargeSmMedia: largeSmMedia.matches,
    isLargeLgMedia: largeLgMedia.matches,
  };
}

const Default = () => {
  const [mediaMatches, setMediaMatches] = useState(getMediaMatches());

  const onSizeChanged = useCallback((media) => {
    !media.matches && setMediaMatches(getMediaMatches());
  }, []);

  useEffect(() => {
    subscribe(onSizeChanged);
    return () => unsubscribe(onSizeChanged);
  }, [onSizeChanged]);

  return mediaMatches;
};

export default Default;
