import './ZoomDashboard.css';
import React from 'react';
import SingleVideo from '../SingleVideo/SingleVideo';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import Options from '../Options/Options';
import { Link } from 'react-router-dom';

function ZoomDashboard() {
  return (
    <div className='zoom-dashboard'>
      {/* <script>
        const myname = "<%= Myname %>"
        const roomId = "<%= roomid %>"
    </script> */}

      <div className='main-left'>
        <div className='video-container'>
          <VideoPlayer />
          <Options />
        </div>
        {/* <div className='main-videos'>
          <div id='video-grid'>
            <SingleVideo />
          </div>
        </div> */}
        <div className='main-controls'>
          <div className='main-controls-block'>
            <div className='main-controls-button' id='mic' onClick={() => {}}>
              <i className='fas fa-microphone-slash'></i>
              <span>Mute</span>
            </div>

            <div className='main-controls-button' id='video' onClick={() => {}}>
              <i className='fas fa-video-slash'></i>
              <span>Stop Video</span>
            </div>
          </div>
          <div className='main-controls-block'>
            <div className='main-controls-button' onClick={() => {}}>
              <i className='fas fa-user-plus'></i>
              <span>Invite</span>
            </div>
            <div className='main-controls-button'>
              <i className='fas fa-user-friends'></i>
              <span>Participants</span>
            </div>
            <div className='main-controls-button' onClick={() => {}}>
              <i className='fas fa-comment-alt'></i>
              <span>Chat</span>
            </div>
          </div>
          <div className='main-controls-block'>
            <div className='main-controls-button leave_red'>
              <span className='leave_meeting'>
                <Link to='/'>Leave Meeting</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='main-right' id='chat'>
        <div className='main_right_header'>
          <h6>Chat Area</h6>
        </div>
        <div className='main__chat_window' id='main__chat_window'>
          <ul className='messages' id='messageadd'></ul>
        </div>
        <div>
          <div className='main__message_container'>
            <input
              type='text'
              id='chat_message'
              onKeyDown={() => {}}
              placeholder='Type message here..'
            />
          </div>
        </div>
      </div>
      {/* <script src="http://localhost:3030/public/main.js"></script> */}
    </div>
  );
}

export default ZoomDashboard;
