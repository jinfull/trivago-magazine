import React from 'react';
import '../stylesheets/footer.css';
import trivago from '../assets/trivago.png';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        {/* <div id="sub-footer"> */}
          <img id='footer-logo' src={trivago} alt='trivago' />
          <div id='copyright'>
            Copyright © 2019 trivago | All rights reserved.
          </div>
        {/* </div> */}
      </div>
    )
  }
}

export default Footer;