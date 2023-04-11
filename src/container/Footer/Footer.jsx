import React from 'react'
import { images } from '../../constants';
import './Footer.scss'
import { Appwrap } from '../../wrapper';

const Footer = () => {
    // const [formData, setformData] = useState({name:'',email:'',message:''})
    // const [isformSubmitted, setisformSubmitted] = useState(false);
    // const [loading, setloading] = useState(false);

    // const {name, email, message} = formData;

    // const handleChangeInput = (e) =>{
    //     const { name, value} = e.target;
    // }
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



            <div className="app__footer-form app__flex">
                <div className="app__flex">
                   <p className='p-text p1'>Made by  💜shivanshu</p>
                </div>
                <div className="app__flex">
                    <p className='p-text p2'>
                        Referance:JSmastery
                    </p>
                </div>
            </div>   
        </>
    )
}

// export default Footer
export default Appwrap(Footer, 'contact','footer_bg');