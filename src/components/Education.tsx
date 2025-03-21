import "./Education.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      {...props}
    />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: "5px",
    backgroundColor:"#f2f3f7",
    
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1)
    },
    
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: "5px",
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: 1.8
  }));

// THis is amazing!
  
  
    

const Education = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };

    return (
        <div className='educationBody'>
          <div className="educationContent">
              <div className='row educationRow'>
                  <div className='educationMainContent col-md-12'>
                      <span>Education</span>
                      <h2>Education</h2>
                      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" 
                                          expandIcon={expanded === 'panel1'?<RemoveIcon/>:<AddIcon />}>
                          <Typography>Master Degree Graphic Design</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"
                                          expandIcon={expanded === 'panel2'?<RemoveIcon/>:<AddIcon />}>
                          <Typography>Bachelor Degree of Computer Science</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header"
                                          expandIcon={expanded === 'panel3'?<RemoveIcon/>:<AddIcon />}>
                          <Typography>Bachelor Degree of Computer Science</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header"
                                          expandIcon={expanded === 'panel4'?<RemoveIcon/>:<AddIcon />}>
                          <Typography>Diploma in Information Technology</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header"
                                          expandIcon={expanded === 'panel5'?<RemoveIcon/>:<AddIcon />}>
                          <Typography>Diploma in Information Technology</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Education;