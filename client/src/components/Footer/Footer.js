import React from 'react'
import './footer.css'
import image2 from '../../assets/image2.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContainer'>
        <div className='leftFooter'>
          <img src={image2} alt='image2'/>
          <p> &copy; TopMovie2k.com</p>
        </div>
        <div className='MidFooter'></div>
        <div className='rightFooter'></div>
      </div>
    </div>
  )
}

export default Footer;