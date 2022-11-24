import './IntroPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

function IntroPage() {
  return (
    <div id='intro-page'>
      <div className='form'>
        <form id='host-form' action='/join'>
          <input type='text' placeholder='Enter your name' name='name' />
          <Link to='/zoom-dashboard'>
            <button>Host a Meeting</button>
          </Link>
          {/* <p>
              <a href='javascript:show()'>Join Meeting?</a>
            </p> */}
        </form>

        <form id='join-form' action='/joinold'>
          <input type='text' placeholder='Enter your name' name='name' />
          <input type='text' placeholder='Enter Meeting Id' name='meeting_id' />
          <Link to='zoom-dashboard'>
            <button>Join Meeting</button>
          </Link>
          {/* <p>
              <a href='javascript:show()'>Host Meeting?</a>
            </p> */}
        </form>
      </div>
      {/* <script>
        function show() {
            $('form').animate({ height:"toggle",opacity:"toggle"},"slow")
        }
    </script> */}
    </div>
  );
}

export default IntroPage;
