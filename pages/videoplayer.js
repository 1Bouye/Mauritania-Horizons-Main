import React, { useRef } from 'react';

import styled from 'styled-components';

// Styled component for the video container
const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px; /* Adjust max-width as needed */
  margin: 0 auto;
`;

// Styled component for the video element
const Video = styled.video`
  width: 100%;
  display: block;
  border-radius: 8px; /* Example: Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Example: Shadow effect */
`;

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    videoRef.current.play(); // Programatically play the video when metadata is loaded
  };
  return (
    <VideoContainer>
      <Video controls autoPlay muted ref={videoRef} onLoadedMetadata={handleLoadedMetadata}>
        <source src="images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};


export default VideoPlayer;