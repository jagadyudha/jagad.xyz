import React, { useState } from 'react';
import NextImage from 'next/image';

function Image({ onLoadingComplete, customClass, ...props }) {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };
  return (
    <NextImage
      className={`transform-gpu duration-1000 ${
        isReady ? 'scale-100' : 'scale-150'
      }`}
      {...props}
      onLoadingComplete={onLoadCallback}
    />
  );
}

export default Image;
