import Logo1 from '../assets/logos/amazon.png'
import Logo2 from '../assets/logos/dribble.png'
import Logo3 from '../assets/logos/hubspot.png'
import Logo4 from '../assets/logos/netflix.png'
import Logo5 from '../assets/logos/notion.png'
import Logo6 from '../assets/logos/zoom.png'

const LogoCarousel = () => {
    return (
        <div className="pt-24 overflow-hidden">
            <div className='flex space-x-12 justify-between items-center animate-marquee'>
                <img className='h-12' src={Logo1} alt="" />
                <img className='h-12' src={Logo2} alt="" />
                <img className='h-12' src={Logo3} alt="" />
                <img className='h-12' src={Logo4} alt="" />
                <img className='h-12' src={Logo5} alt="" />
                <img className='h-12' src={Logo6} alt="" />
            </div>
        </div>
    )
}

export default LogoCarousel