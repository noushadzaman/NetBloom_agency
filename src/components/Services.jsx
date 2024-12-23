import { servicesData } from "../utils/services"
import LinkIco from "../assets/link-icon.png"
import { motion } from 'framer-motion'
import variants from "../utils/variants"

const Services = () => {
    return (
        <section className="pt-24 pb-16 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* headline and description */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={variants('left', 0.3)}
                    className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
                        <h2 className="text-2xl font-bold">Services</h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-secondary md:w-2/3">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
                    </div>
                </motion.div>
                {/* services card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        servicesData.map((service, index) => (
                            <motion.div 
                            initial="hidden"
                                whileInView="visible"
                                variants={variants('bottom', 0.2)}
                                key={index}
                                className={`flex flex-col sm:flex-row justify-center md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191A23] cursor-pointer ${service.backgroundColor} ${service.textColor}`}
                            >
                                <div className="md:w-1/2 flex flex-col h-full justify-between">
                                    <button className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor}`}>{service.title}</button>
                                    <a href="#" className={`flex items-center gap-4 py-2 rounded-md text-black hover:text-black/80`}>
                                        <img className="size-6 rounded-full" src={LinkIco} alt="" />
                                        <span className="text-lg font-medium">Learn More</span>
                                    </a>
                                </div>

                                {/* image */}
                                <div className="md:w-1/2 order-first md:order-last">
                                    <img className="pointer-events-none w-full object-cover rounded-md mb-4" src={service.image} alt="" />
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services