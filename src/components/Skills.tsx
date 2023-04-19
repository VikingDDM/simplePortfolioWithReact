import './Skills.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { height } from '@mui/system';

function valuetext(value: number) {
    return `${value}%`;
  }
  

const Skills = () => {
    return (
        <div className='skillsBody'>
            <div className="skillsContent">
                <div className='row skillsRow'>
                    <div className='skillsMainContent col-md-12'>
                        <span className='skillsTitle'>My specialty</span>
                        <h2>My skills</h2>
                        <p>
                          The Big Oxmox advised her not to do so, because there were thousands of bad Commas, 
                          wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. 
                          She packed her seven versalia, put her initial into the belt and made herself on the way.
                        </p>
                    </div>
                    <div className='skillsBar col-md-6'>
                      <Box sx={{ width: 300 }}>
                        <Typography id="non-linear-slider" gutterBottom sx={{ marginBottom:"-8px !important", fontSize: "16px",
                                                                           fontWeight: 400 }}>
                            Photoshop
                        </Typography>
                        <Slider
                          aria-label="Always visible"
                          defaultValue={75}
                          valueLabelFormat={valuetext}
                          step={5}
                          valueLabelDisplay="on"
                          sx={{
                            width: 370,
                            height: 6,
                            color: "#2c98f0",
                            '& .MuiSlider-rail': {
                              color: "#f2f3f7"
                            },
                            '& .MuiSlider-thumb': {
                              height: 10,
                              width: 10,
                            },
                            '& .MuiSlider-valueLabel': {
                              backgroundColor: "unset",
                              color: "#2c98f0",
                              height: "5px",
                              fontWeight: 600,
                              textAlign: "right"
                            }
                          }}
                        />
                      </Box>
                    </div>
                    <div className='skillsBar col-md-6'>
                      <Box sx={{ width: 300 }}>
                        <Typography id="non-linear-slider" gutterBottom sx={{ marginBottom:"-8px !important", fontSize: "16px",
                                                                           fontWeight: 400 }}>
                            jQuery
                        </Typography>
                        <Slider
                          aria-label="Always visible"
                          defaultValue={60}
                          valueLabelFormat={valuetext}
                          step={5}
                          valueLabelDisplay="on"
                          sx={{
                            width: 370,
                            height: 6,
                            color: "#ec5453",
                            '& .MuiSlider-rail': {
                              color: "#f2f3f7"
                            },
                            '& .MuiSlider-thumb': {
                              height: 10,
                              width: 10,
                            },
                            '& .MuiSlider-valueLabel': {
                              backgroundColor: "unset",
                              color: "#ec5453",
                              height: "5px",
                              fontWeight: 600,
                              textAlign: "right"
                            }
                          }}
                        />
                      </Box>
                    </div>
                    <div className='skillsBar col-md-6'>
                      <Box sx={{ width: 300 }}>
                        <Typography id="non-linear-slider" gutterBottom sx={{ marginBottom:"-8px !important", fontSize: "16px",
                                                                           fontWeight: 400 }}>
                            HTML5
                        </Typography>
                        <Slider
                          aria-label="Always visible"
                          defaultValue={85}
                          valueLabelFormat={valuetext}
                          step={5}
                          valueLabelDisplay="on"
                          sx={{
                            width: 370,
                            height: 6,
                            color: "#f9bf3f",
                            '& .MuiSlider-rail': {
                              color: "#f2f3f7"
                            },
                            '& .MuiSlider-thumb': {
                              height: 10,
                              width: 10,
                            },
                            '& .MuiSlider-valueLabel': {
                              backgroundColor: "unset",
                              color: "#f9bf3f",
                              height: "5px",
                              fontWeight: 600,
                              textAlign: "right"
                            }
                          }}
                        />
                      </Box>
                    </div>
                    <div className='skillsBar col-md-6'>
                      <Box sx={{ width: 300 }}>
                        <Typography id="non-linear-slider" gutterBottom sx={{ marginBottom:"-8px !important", fontSize: "16px",
                                                                           fontWeight: 400 }}>
                            CSS3
                        </Typography>
                        <Slider
                          aria-label="Always visible"
                          defaultValue={90}
                          valueLabelFormat={valuetext}
                          step={5}
                          valueLabelDisplay="on"
                          sx={{
                            width: 370,
                            height: 6,
                            color: "#a84cb8",
                            '& .MuiSlider-rail': {
                              color: "#f2f3f7"
                            },
                            '& .MuiSlider-thumb': {
                              height: 10,
                              width: 10,
                            },
                            '& .MuiSlider-valueLabel': {
                              backgroundColor: "unset",
                              color: "#a84cb8",
                              height: "5px",
                              fontWeight: 600,
                              textAlign: "right"
                            }
                          }}
                        />
                      </Box>
                    </div>
                    <div className='skillsBar col-md-6'>
                      <Box sx={{ width: 300 }}>
                        <Typography id="non-linear-slider" gutterBottom sx={{ marginBottom:"-8px !important", fontSize: "16px",
                                                                           fontWeight: 400 }}>
                            WordPress
                        </Typography>
                        <Slider
                          aria-label="Always visible"
                          defaultValue={70}
                          valueLabelFormat={valuetext}
                          step={5}
                          valueLabelDisplay="on"
                          sx={{
                            width: 370,
                            height: 6,
                            color: "#2fa499",
                            '& .MuiSlider-rail': {
                              color: "#f2f3f7"
                            },
                            '& .MuiSlider-thumb': {
                              height: 10,
                              width: 10,
                            },
                            '& .MuiSlider-valueLabel': {
                              backgroundColor: "unset",
                              color: "#2fa499",
                              height: "5px",
                              fontWeight: 600,
                              textAlign: "right"
                            }
                          }}
                        />
                      </Box>
                    </div>
                    <div className='skillsBar col-md-6'>
                      <Box sx={{ width: 300 }}>
                        <Typography id="non-linear-slider" gutterBottom sx={{ marginBottom:"-8px !important", fontSize: "16px",
                                                                           fontWeight: 400 }}>
                            SEO
                        </Typography>
                        <Slider
                          aria-label="Always visible"
                          defaultValue={80}
                          valueLabelFormat={valuetext}
                          step={5}
                          valueLabelDisplay="on"
                          sx={{
                            width: 370,
                            height: 6,
                            color: "#4054b2",
                            '& .MuiSlider-rail': {
                              color: "#f2f3f7"
                            },
                            '& .MuiSlider-thumb': {
                              height: 10,
                              width: 10,
                            },
                            '& .MuiSlider-valueLabel': {
                              backgroundColor: "unset",
                              color: "#4054b2",
                              height: "5px",
                              fontWeight: 600,
                              textAlign: "right"
                            }
                          }}
                        />
                      </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;