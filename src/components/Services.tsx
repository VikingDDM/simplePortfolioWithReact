import './Services.css'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import PhonelinkRingOutlinedIcon from '@mui/icons-material/PhonelinkRingOutlined';
import LayersIcon from '@mui/icons-material/Layers';


const Services = () => {
    return (
        <div className="servicesBody">
            <div className="servicesContent">
                <div className='row servicesRow'>
                    <div className='servicesMainContent col-md-12'>
                        <span>WHAT I DO</span>
                        <h2>HERE ARE SOME OF MY <br></br>EXPERTISE</h2>
                    </div>
                    <div className='servicesBox col-md-4'>
                      <div className='servicesInBox firstBoxx'>
                        <span className='servicesBoxIcon'>
                            <TipsAndUpdatesOutlinedIcon style={{fontSize: 30,color: "white",verticalAlign: "middle",marginTop:'12px'}} />
                        </span>
                        <div className='servicesMainBox'>
                            <h3>INNOVATIVE IDEAS</h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className='servicesBox col-md-4'>
                      <div className='servicesInBox secondBoxx'>
                        <span className='servicesBoxIcon'>
                            <TerminalOutlinedIcon style={{fontSize: 30,color: "white",verticalAlign: "middle",marginTop:'12px'}} />
                        </span>
                        <div className='servicesMainBox'>
                            <h3>INNOVATIVE IDEAS</h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className='servicesBox col-md-4'>
                      <div className='servicesInBox thirdBoxx'>
                        <span className='servicesBoxIcon'>
                            <PhonelinkRingOutlinedIcon style={{fontSize: 30,color: "white",verticalAlign: "middle",marginTop:'12px'}} />
                        </span>
                        <div className='servicesMainBox'>
                            <h3>INNOVATIVE IDEAS</h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className='servicesBox col-md-4'>
                      <div className='servicesInBox fourthBoxx'>
                        <span className='servicesBoxIcon'>
                            <LayersIcon style={{fontSize: 30,color: "white",verticalAlign: "middle",marginTop:'12px'}} />
                        </span>
                        <div className='servicesMainBox'>
                            <h3>INNOVATIVE IDEAS</h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className='servicesBox col-md-4'>
                      <div className='servicesInBox fifthBoxx'>
                        <span className='servicesBoxIcon'>
                            <TerminalOutlinedIcon style={{fontSize: 30,color: "white",verticalAlign: "middle",marginTop:'12px'}} />
                        </span>
                        <div className='servicesMainBox'>
                            <h3>INNOVATIVE IDEAS</h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className='servicesBox col-md-4'>
                      <div className='servicesInBox sixthBoxx'>
                        <span className='servicesBoxIcon'>
                            <PhonelinkRingOutlinedIcon style={{fontSize: 30,color: "white",verticalAlign: "middle",marginTop:'12px'}} />
                        </span>
                        <div className='servicesMainBox'>
                            <h3>INNOVATIVE IDEAS</h3>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        </div>
                      </div>
                    </div>
                    <div className='servicesCounter col-md-12'>
                        <div className='overlay'></div>
                        <div className='servicesNarrowCounter'>
                            <div className='row servicesNarrowMainCounter'>
                                <div className='servicesCounterText col-md-3'>
                                    <span className='servicesCounterNum'>309</span>
                                    <span className='servicesCounterLabel'>Cups of coffee</span>
                                </div>
                                <div className='servicesCounterText col-md-3'>
                                    <span className='servicesCounterNum'>356</span>
                                    <span className='servicesCounterLabel'>Projects</span>
                                </div>
                                <div className='servicesCounterText col-md-3'>
                                    <span className='servicesCounterNum'>309</span>
                                    <span className='servicesCounterLabel'>Clients</span>
                                </div>
                                <div className='servicesCounterText col-md-3'>
                                    <span className='servicesCounterNum'>309</span>
                                    <span className='servicesCounterLabel'>Partners</span>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;