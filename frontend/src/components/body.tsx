import './comps.css'
import vid from '../assets/water-loop.mp4';
import bgImg from '../assets/beach-bg.png'

const Body = () => {
    return(
        <>
        <div className='bg'>
            <video src={vid} autoPlay loop muted/>
            <img className=".img-fluid" src={bgImg} alt="" />
        </div>
        </>
    );
}

export default Body