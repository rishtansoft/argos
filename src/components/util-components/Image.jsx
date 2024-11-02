import React, { useState } from 'react';
import defaultImage from '../../assets/images/default-user.jpg';

const LazyImage = ({ src, alt, fallbackSrc, ...props }) => {
  const [imageSrc, setImageSrc] = useState(defaultImage); 

  return (
    <img
      src={imageSrc}
      alt="User image"
      onLoad={() => setImageSrc(src)} 
      onError={() => setImageSrc(fallbackSrc)} 
      style={{objectFit: "contain"}}
      {...props} 
    />
  );
};

export default LazyImage;
