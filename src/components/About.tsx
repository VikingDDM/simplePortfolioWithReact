import './About.css'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import PhonelinkRingOutlinedIcon from '@mui/icons-material/PhonelinkRingOutlined';
import Button from '@mui/material/Button';
// import { color } from '@mui/system';

const About = () => {
    
    return (
        <div className="aboutBody">
            <div className="aboutContent">
                <div className='row aboutRow'>
                    <div className='aboutMainContent col-md-12'>
                        <span>ABOUT US</span>
                        <h2>WHO AM I?</h2>
                        <p>
                            <strong>Hi I'm Jackson Ford</strong> On her way she met a copy. 
                            The copy warned the Little Blind Text, that where it came from it would have 
                            been rewritten a thousand times and everything that was left from its origin would 
                            be the word "and" and the Little Blind Text should turn around and return to its own, 
                            safe country.
                        </p>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts 
                            it is an almost unorthographic life One day however a small line of 
                            blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                        </p>
                    </div>
                    <div className='aboutBox col-md-3'>
                        <div className='aboutMainBox firstBox'>
                            <span>
                                <TipsAndUpdatesOutlinedIcon style={{fontSize: 30,color: "#2c98f0"}} />
                            </span>
                            <h3>Graphic Design</h3>
                        </div>
                    </div>
                    <div className='aboutBox col-md-3'>
                        <div className='aboutMainBox secondBox'>
                            <span>
                                <LanguageOutlinedIcon style={{fontSize: 30,color: "#ec5453"}} />
                            </span>
                            <h3>Graphic Design</h3>
                        </div>
                    </div>
                    <div className='aboutBox col-md-3'>
                        <div className='aboutMainBox thirdBox'>
                            <span>
                                <TerminalOutlinedIcon style={{fontSize: 30,color: "#f9bf3f"}} />
                            </span>
                            <h3>Graphic Design</h3>
                        </div>
                    </div>
                    <div className='aboutBox col-md-3'>
                        <div className='aboutMainBox fourthBox'>
                            <span>
                                <PhonelinkRingOutlinedIcon style={{fontSize: 30,color: "#a84cb8"}} />
                            </span>
                            <h3>Graphic Design</h3>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='hire'>
                            <h2>
                               I am happy to know you <br></br>
                               that 300+ projects done sucessfully!
                            </h2>
                            <a><Button variant="outlined" style={{color:'black',borderColor:'black'}}>Hire me</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;