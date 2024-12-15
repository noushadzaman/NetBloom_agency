import ContactIMG from '../assets/contact.png';
import { motion } from 'framer-motion';
import variants from '../utils/variants';

const Contact = () => {
    return (
        <section className="pt-24 pb-12 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* headline and description */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={variants('left', 0.2)}
                    className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
                        <h2 className="text-2xl font-bold">Contact Us</h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-secondary md:w-2/3">Connect with Us:<br />
                            Let's Discuss Your Digital Marketing Needs</p>
                    </div>
                </motion.div>
                {/* contact form */}
                <div className="flex flex-col md:flex-row justify-between bg-tertiary rounded-lg md:p-8 p-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={variants('right', 0.5)}
                        className="w-full md:w-1/2 p-4">
                        <form className="space-y-4">
                            {/* radio input */}
                            <div className="flex flex-col md:flex-row md:space-x-4 items-start justify-start">
                                <label className="flex items-center">
                                    <input value="general" type="radio" name="contact-type" className="mr-2" id="" />
                                    General Inquiry
                                </label>
                                <label className="flex items-center mt-2 md:mt-0">
                                    <input value="support" type="radio" name="contact-type" className="mr-2" id="" />
                                    Support
                                </label>
                            </div>
                            {/* name input */}
                            <div>
                                <label>Name</label>
                                <input type="text" name="name" id="name" className="mt-2 py-2.5 px-4 block w-full rounded-md focus:outline-none focus:ring focus:ring-primary" placeholder="Your name" />
                            </div>

                            {/* Email input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" className="mt-2 py-2.5 px-4 block w-full rounded-md focus:outline-none focus:ring focus:ring-primary" placeholder="Your email" />
                            </div>

                            {/* text area */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <textarea rows={6} name="message" id="message" className="mt-2 py-2.5 px-4 block w-full rounded-md" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300">Book a consultation</button>
                        </form>
                    </motion.div>

                    {/* image */}
                    <div className="relative md:flex justify-end items-center md:w-1/2 md:-m-8 overflow-hidden">
                        <img className='md:absolute md:block hidden top-0 bottom-0 -right-8 h-full pointer-events-none' src={ContactIMG} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact