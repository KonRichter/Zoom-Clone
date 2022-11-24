import './Options.css';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useContext, useState } from 'react';
import { SocketContext } from '../../Context/SocketContext';

function Options({ children }) {
  const {
    me,
    callAccepted,
    name,
    setName,
    callEnded,
    leaveCall,
    callUser,
    answerCall,
    call,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className='options'>
      <div className='name-field'>
        <h3>Account Info</h3>
        <form>
          <input
            type='text'
            label='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <CopyToClipboard text={me}>
          <button>Copy Your ID</button>
        </CopyToClipboard>
      </div>
      <div className='id-field'>
        <h3>Make a call</h3>
        <form>
          <input
            type='text'
            label='ID To Call'
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
        </form>
        {callAccepted && !callEnded ? (
          <button onClick={leaveCall}>Hang Up</button>
        ) : (
          <button onClick={() => callUser(idToCall)}>Call</button>
        )}
      </div>
      <div className='notification'>
        {call.isReceivedCall && !callAccepted && (
          <div>
            <h3>{call.name} is calling</h3>
            <button onClick={answerCall}>Answer</button>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

export default Options;
