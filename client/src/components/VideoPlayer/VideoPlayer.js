import './VideoPlayer.css';
import React from 'react';
import { useContext } from 'react';
import { SocketContext } from '../../Context/SocketContext';

function VideoPlayer() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className='videoplayer'>
      {stream && (
        <div className='me'>
          <video playsInline muted ref={myVideo} autoPlay></video>
          <p>{name || 'Name'}</p>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className='user'>
          <video playsInline ref={userVideo} autoPlay></video>
          <p>{call.name || 'Name'}</p>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
