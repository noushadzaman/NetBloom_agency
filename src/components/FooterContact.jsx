import { motion } from 'framer-motion'
import variants from '../utils/variants'

const FooterContact = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants('bottom', 0.2)}
            className="flex flex-col md:flex-row py-8 px-4 lg:px-8 sm;px-6 gap-8">
            <div className="flex-1 space-y-4">
                <button className="bg-primary text-black px-6 py-2 rounded-md font-medium">Contact</button>
                <div className="text-white space-y-2">
                    <p><strong>Email:</strong>noushadozi333@gmail.com</p>
                    <p><strong>Phone:</strong>+88015 3467 2418</p>
                    <p><strong>Address:</strong>Dhaka, Bangladesh.</p>
                </div>
            </div>

            <div className="flex-1 bg-[#292A32] justify-center items-center rounded-md p-8">
                <form className="flex flex-col justify-center items-center h-20 md:flex-row gap-4">
                    <input type="email" className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" name="" id="" placeholder="Email" />
                    <button className="bg-primary text-black px-6 py-2.5 rounded-md font-medium">Contact</button>
                </form>
            </div>
        </motion.div>
    )
}

export default FooterContact