import { FaLinkedinIn } from "react-icons/fa"
import teamData from "../utils/teamData"
import { useState } from "react"

const Team = () => {
    const [visibleTeam, setVisibleTeam] = useState(6);
    const handleShowMore = () => {
        setVisibleTeam(prev => prev + 3)
    };

    return (
        <section id='team' className="pt-24 pb-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* headline and description */}
                <div className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
                        <h2 className="text-2xl font-bold">Team</h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-secondary md:w-2/3">Meet the skilled and experienced team behind our successful digital marketing strategies.</p>
                    </div>
                </div>
                {/* team cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        teamData.slice(0, visibleTeam).map((member, index) => (
                            <div key={index} className="bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300">
                                <div className="relative mb-4">
                                    <div className="flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-start">
                                        <img className="w-32 h-32 object-cover pointer-events-none" src={member.image} alt="" />
                                        <div>
                                            <h3 className="text-xl font-semibold">{member.name}</h3>
                                            <p className="text-secondary">{member.position}</p>
                                        </div>
                                        <a href="" className="absolute top-0 right-0 bg-black hover:bg-primary hover:text-black text-white p-2 rounded-full cursor-pointer transition-all duration-300">
                                            <FaLinkedinIn className="size-5" />
                                        </a>
                                    </div>
                                </div>

                                <div className="px-2">
                                    <hr className="my-4 border-secondary" />
                                    <p className="text-black">{member.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* show more btn */}
                {
                    visibleTeam < teamData.length && (<div className="flex justify-end mt-8 w-full">
                        <button
                            onClick={handleShowMore}
                            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:text-black hover:bg-primary transition-all duration-300">See All Team</button>
                    </div>)
                }
            </div>
        </section>
    )
}

export default Team