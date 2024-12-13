import { useState } from "react"
import processSteps from "../utils/processSteps";
import { FaMinus, FaPlus } from "react-icons/fa";

const WorkingProcess = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <section className="pt-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* headline and description */}
                <div className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
                        <h2 className="text-2xl font-bold">Our Working Process</h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-secondary md:w-2/3">Our Proven Digital Marketing Success through Step-by-Step Guide to Achieving Your Business Goals</p>
                    </div>
                </div>

                {/* accordian section */}
                <div>
                    {
                        processSteps.map((step, index) => (
                            <div key={index} className={`border rounded-md mb-4 overflow-hidden ${openIndex === index ? 'border-primary' : 'border-gray-300'}`}>
                                <button
                                    onClick={() => handleToggle(index)}
                                    className={`w-full text-left p-4 flex justify-between items-center ${openIndex === index ? 'bg-primary' : 'bg-[#F3F3F3]'}`}>
                                    <div className="flex items-center">
                                        <span className="text-secondary font-extrabold text-2xl mr-4">{step.number}</span>
                                        <h3 className="text-lg font-semibold">{step.question}</h3>
                                    </div>
                                    <div className="bg-white text-black border p-1.5 rounded-full">
                                        {
                                            openIndex === index ? (<FaMinus />) : (<FaPlus />)
                                        }
                                    </div>
                                </button>
                                {
                                    openIndex === index && (
                                        <div className="p-4 bg-primary text-secondary">
                                            <hr className="mt-0 mb-5 border-black " />
                                            <p>{step.answer}</p>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkingProcess