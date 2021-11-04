import { useState, useCallback, useEffect } from "react";
const { matchMedia } = window;

const mediaMatchSizes = [
  "(min-width: 0) and (max-width: 320px)",
  "(min-width: 320.9px) and (max-width: 375.9px)",
  "(min-width: 375.9px) and (max-width: 425.9px)",
  "(min-width: 425.9px) and (max-width: 768.9px)",
  "(min-width: 768.9px) and (max-width: 1024.9px)",
  "(min-width: 1025px)",
].map(matchMedia);

const mediaMatchKeys = [
  "isSmallSm",
  "isSmallLg",
  "isMediumSm",
  "isMediumLg",
  "isLargeSm",
  "isLargeLg",
];

// Get Screen Sizes
const getMediaMatches = () => {
  return mediaMatchKeys.reduce((acc, value, index) => {
    acc[`${value}Media`] = mediaMatchSizes[index].matches;
    return acc;
  }, {});
};

const subscribe = (handler) => {
  mediaMatchSizes.forEach((media) => media.addEventListener("change", handler));
};

const unsubscribe = (handler) => {
  mediaMatchSizes.forEach((media) =>
    media.removeEventListener("change", handler)
  );
};

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
