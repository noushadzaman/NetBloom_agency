import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import FooterIMG from '../assets/footer-logo.png';
import FooterContact from './FooterContact';

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-secondary rounded-t-2xl">
                {/* first section */}
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12'>
                    {/* logo */}
                    <div>
                        <img src={FooterIMG} alt="" />
                    </div>

                    {/* menu items */}
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-white hover:text-gray-400'>
                        <a href="#about">Home</a>
                        <a href="#services">Services</a>
                        <a href="#use-cases">Use Cases</a>
                        <a href="#contact">Contact</a>
                        <a href="#contact">Contact</a>
                    </div>

                    {/* social icons */}
                    <div className='flex md:justify-end space-x-4'>
                        <a href="" className='text-white hover:text-gray-400'>
                            <FaFacebook />
                        </a>
                        <a href="" className='text-white hover:text-gray-400'>
                            <FaLinkedinIn />
                        </a>
                        <a href="" className='text-white hover:text-gray-400'>
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {/* contact & newsletter */}
                <FooterContact />

                <hr className='my-4 border-white mx-4 sm:px-6 lg:px-8' />

                <div className='flex flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-8 py-5'>
                    <p>© 2025 Positivus. All Rights Reserved.</p>
                    <p className='underline underline-offset-4'><a href="#">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer