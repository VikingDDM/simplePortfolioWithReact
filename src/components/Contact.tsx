import './Contact.css'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { text } from 'stream/consumers';

const Contact = () => {
    return (
        <div className='contactBody'>
            <div className="contactContent">
                <div className='row contactRow'>
                    <div className='contactMainContent col-md-12'>
                        <span className='contactTitle'>My specialty</span>
                        <h2>My skills</h2>
                    </div>
                    <div className='contactBox col-md-5'>
                      <div className='contactBoxDetail'>
                        <div className='contactBoxDetailIcon'>
                           <LanguageOutlinedIcon sx={{color: "#2c98f0",fontSize: "40px",marginTop:"30px"}} />
                        </div>
                        <div className='contactBoxDetailText'>
                           <p>
                              <a> info@domain.com </a>
                           </p>
                        </div>
                      </div>
                      <div className='contactBoxDetail'>
                        <div className='contactBoxDetailIcon'>
                           <MapOutlinedIcon sx={{color: "#2c98f0",fontSize: "40px",marginTop:"30px"}} />
                        </div>
                        <div className='contactBoxDetailText'>
                           <p className='contactBoxDetailTextP'>
                              198 West 21th Street, Suite 721 New York NY 10016
                           </p>
                        </div>
                      </div>
                      <div className='contactBoxDetail'>
                        <div className='contactBoxDetailIcon'>
                           <PhoneEnabledIcon sx={{color: "#2c98f0",fontSize: "40px",marginTop:"30px"}} />
                        </div>
                        <div className='contactBoxDetailText'>
                           <p>
                             <a> +123 456 7890 </a>
                           </p>
                        </div>
                      </div>
                    </div>
                    <div className='contactLeftBox col-md-7'>
                      <div className='row rowBox'>
                        <div className='contactLeftBoxDetail col-md-10'>
                            <form>
                                <div className='form-group'>
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className='form-group'>
                                    <input type="text" className='form-control' placeholder='Email' />
                                </div>
                                <div className='form-group'>
                                    <input type="text" className='form-control' placeholder='Subject' />
                                </div>
                                <div className='form-group'>
                                    <textarea id="message" cols={30} rows={7} className='form-control' placeholder='Message'></textarea>
                                </div>
                                <div className='form-group'>
                                    <input type="submit" className='btn btn-primary btn-send-message' value='Send Message' />
                                </div>
                            </form>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;