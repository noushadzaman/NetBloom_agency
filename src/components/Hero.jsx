import BannerImg from '../assets/banner.png'
import variants from '../utils/variants'
import LogoCarousel from './LogoCarousel'
import { motion } from 'framer-motion'

const Hero = () => {

    return (
        <section className="bg-white pt-12" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                <div className="flex flex-col md:flex-row items-center gap-6 ">
                    {/* left */}
                    <div className="md:w-1/2">
                        <div className='md:w-2/3'>
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                variants={variants('bottom', 0.2)}
                                className="text-4xl font-bold text-secondary mb-4">Navigating the digital landscape for success</motion.h1>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                variants={variants('bottom', 0.5)}
                                className="text-gray-600 mb-6 ">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</motion.p>
                            <motion.button
                                initial="hidden"
                                whileInView="visible"
                                variants={variants('bottom', 0.5)}
                                className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300">Book a consultation</motion.button>
                        </div>
                    </div>
                    {/* right */}
                    <div className="md:w-1/2 order-first md:order-last">
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            variants={variants('bottom', 0.2)}
                            className='w-full h-auto rounded-md pointer-events-none' src={BannerImg} alt="" />
                    </div>
                </div>
                {/* brand logo carousel */}
                <LogoCarousel />
            </div>
        </section>
    )
}

export default Hero