import './Experience.css'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';


const Experience = () => {
    
    return (
          <div className='experienceBody'>
            <div className="experienceContent">
                <div className='row experienceRow'>
                    <div className='experienceMainContent col-md-12'>
                        <span className='experienceMainContentTitle'>Experience</span>
                        <h2>Work experience</h2>
                        <Timeline
                          sx={{
                            [`& .${timelineItemClasses.root}:before`]: {
                              flex: 0,
                              padding: 0,
                            },
                            paddingLeft: "5px",
                            paddingTop: "8px"

                          }}
                        >
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot variant="outlined" sx={{padding: '8px',margin: 'unset',borderWidth: '5px',borderColor:"#f2f3f7",backgroundColor: "#2c98f0"}}>
                                <CreateOutlinedIcon style={{color: "white"}} />
                              </TimelineDot> 
                              <TimelineConnector sx={{width:'4px',backgroundColor:"#f2f3f7",height:"160px"}}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{backgroundColor:"#f2f3f7",marginBottom:"15px",marginLeft:"15px",marginTop:"5px",padding:"1.5em"}}>
                              <h2 className='experiencePositionHead'>
                                <a className='experiencePosition'>Full Stack Developer</a>
                                <span className='experiencePeriod'>2017-2018</span>
                              </h2>
                              <p className='experienceText'>
                                Tolerably earnestly middleton extremely distrusts she boy now not. 
                                Add and offered prepare how cordial two promise. 
                                Greatly who affixed suppose but enquire compact prepare all put. 
                                Added forth chief trees but rooms think may.
                              </p>
                            </TimelineContent>
                          </TimelineItem>
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot variant="outlined" sx={{padding: '8px',margin: 'unset',borderWidth: '5px',borderColor:"#f2f3f7",backgroundColor: "#ec5453"}}>
                                <CreateOutlinedIcon style={{color: "white"}} />
                              </TimelineDot> 
                              <TimelineConnector sx={{width:'4px',backgroundColor:"#f2f3f7",height:"160px"}}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{backgroundColor:"#f2f3f7",marginBottom:"15px",marginLeft:"15px",marginTop:"5px",padding:"1.5em"}}>
                              <h2 className='experiencePositionHead'>
                                <a className='experiencePosition'>Full Stack Developer</a>
                                <span className='experiencePeriod'>2017-2018</span>
                              </h2>
                              <p className='experienceText'>
                                Tolerably earnestly middleton extremely distrusts she boy now not. 
                                Add and offered prepare how cordial two promise. 
                                Greatly who affixed suppose but enquire compact prepare all put. 
                                Added forth chief trees but rooms think may.
                              </p>
                            </TimelineContent>
                          </TimelineItem>
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot variant="outlined" sx={{padding: '8px',margin: 'unset',borderWidth: '5px',borderColor:"#f2f3f7",backgroundColor: "#f9bf3f"}}>
                                <CreateOutlinedIcon style={{color: "white"}} />
                              </TimelineDot> 
                              <TimelineConnector sx={{width:'4px',backgroundColor:"#f2f3f7",height:"160px"}}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{backgroundColor:"#f2f3f7",marginBottom:"15px",marginLeft:"15px",marginTop:"5px",padding:"1.5em"}}>
                              <h2 className='experiencePositionHead'>
                                <a className='experiencePosition'>Full Stack Developer</a>
                                <span className='experiencePeriod'>2017-2018</span>
                              </h2>
                              <p className='experienceText'>
                                Tolerably earnestly middleton extremely distrusts she boy now not. 
                                Add and offered prepare how cordial two promise. 
                                Greatly who affixed suppose but enquire compact prepare all put. 
                                Added forth chief trees but rooms think may.
                              </p>
                            </TimelineContent>
                          </TimelineItem>
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot variant="outlined" sx={{padding: '8px',margin: 'unset',borderWidth: '5px',borderColor:"#f2f3f7",backgroundColor: "#a84cb8"}}>
                                <CreateOutlinedIcon style={{color: "white"}} />
                              </TimelineDot> 
                              <TimelineConnector sx={{width:'4px',backgroundColor:"#f2f3f7",height:"160px"}}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{backgroundColor:"#f2f3f7",marginBottom:"15px",marginLeft:"15px",marginTop:"5px",padding:"1.5em"}}>
                              <h2 className='experiencePositionHead'>
                                <a className='experiencePosition'>Full Stack Developer</a>
                                <span className='experiencePeriod'>2017-2018</span>
                              </h2>
                              <p className='experienceText'>
                                Tolerably earnestly middleton extremely distrusts she boy now not. 
                                Add and offered prepare how cordial two promise. 
                                Greatly who affixed suppose but enquire compact prepare all put. 
                                Added forth chief trees but rooms think may.
                              </p>
                            </TimelineContent>
                          </TimelineItem>
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot variant="outlined" sx={{padding: '8px',margin: 'unset',borderWidth: '5px',borderColor:"#f2f3f7",backgroundColor: "#2fa499"}}>
                                <CreateOutlinedIcon style={{color: "white"}} />
                              </TimelineDot> 
                              <TimelineConnector sx={{width:'4px',backgroundColor:"#f2f3f7",height:"160px"}}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{backgroundColor:"#f2f3f7",marginBottom:"15px",marginLeft:"15px",marginTop:"5px",padding:"1.5em"}}>
                              <h2 className='experiencePositionHead'>
                                <a className='experiencePosition'>Full Stack Developer</a>
                                <span className='experiencePeriod'>2017-2018</span>
                              </h2>
                              <p className='experienceText'>
                                Tolerably earnestly middleton extremely distrusts she boy now not. 
                                Add and offered prepare how cordial two promise. 
                                Greatly who affixed suppose but enquire compact prepare all put. 
                                Added forth chief trees but rooms think may.
                              </p>
                            </TimelineContent>
                          </TimelineItem>
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot variant="outlined" sx={{padding: '10px',marginTop: 'unset',marginLeft:"5px",borderWidth: '8px',borderColor:"#f2f3f7"}}>
                                
                              </TimelineDot> 
                              
                            </TimelineSeparator>
                          </TimelineItem>
                        </Timeline>
                    </div>
                </div>
              </div>
            </div>
    )
}

export default Experience;