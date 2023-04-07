import React from 'react'
import { images } from '../../constants';

const Footer = () => {
    // const [formData, setformData] = useState({name:'',email:'',message:''})
    // const [isformSubmitted, setisformSubmitted] = useState(false);
    // const [loading, setloading] = useState(false);
    return (
        <>
            <h2 className='head-text'>Take a coffe & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:shivanshsagar987@gmail.com" className="p-text">hello@shivansh</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="mailto:shivanshsagar987@gmail.com" className="p-text">hello@shivansh</a>
                </div>
            </div>



            {/* <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input className='p-text' type="text" placeholder='Your Name'name='name' value={name} onChange={handleChangeInput} />
                </div>
                <div className="app__flex">
                    <input className='p-text' type="email" placeholder='Your Email'name='email' value={email} onChange={handleChangeInput} />
                </div>
                <div className="">
                    <textarea className='p-text' name={message} 
                    value={message}
                    onChange={handleChangeInput}
                    />
                </div>
                <button type='button' className='p-text'onClick={handleSubmit}>{loading ? 'Sending':'Send Message'}</button>
            </div> */}
        </>
    )
}

export default Footer