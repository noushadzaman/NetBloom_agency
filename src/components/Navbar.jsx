import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleMenuClick = (name) => {
        setActiveItem(name);
        setIsOpen(false);
    }

    const menuItems = [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Use Cases", href: "#use-cases" },
        { name: "Team", href: "#team" },
        { name: "Testimonials", href: "#testimonials" },
    ];

    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* logo */}
                    <div>
                        <a href="/">
                            <img
                                className="h-8"
                                src="/src/assets/logo (1).png"
                                alt=""
                            />
                        </a>
                    </div>
                    {/* nav items for large devices */}
                    <div className="space-x-8 hidden md:flex items-center">
                        {
                            menuItems.map((item, index) => <a
                                key={index}
                                onClick={() => handleMenuClick(item.name)}
                                href={item.href}
                                className={` text-black px-2 hover:bg-primary hover:underline underline-offset-4 rounded-sm transition-all duration-300 ${activeItem === item.name ? 'bg-primary text-black underline underline-offset-4' : ''}`}
                            >
                                {item.name}
                            </a>)
                        }
                        <a href="#contact" className="border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300">Request a quote</a>
                    </div>

                    {/* mobile menu */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-primary focus:outline-none">
                            {
                                isOpen ?
                                    <HiOutlineX className="size-6" /> :
                                    <HiOutlineMenuAlt3 className="size-6" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu items */}
            {
                isOpen && (
                    <div className="md:hidden bg-white shadow-md">
                        <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
                            {
                                menuItems.map((item, index) => <a
                                    key={index}
                                    href={item.href}
                                    onClick={() => handleMenuClick(item.name)}
                                    className={`block text-black px-2 hover:bg-primary hover:underline underline-offset-4 rounded-sm transition-all duration-300 ${activeItem === item.name ? 'text-primary' : ''}`}
                                >
                                    {item.name}
                                </a>)
                            }
                            <a href="#contact" className="block border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300">Request a quote</a>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar