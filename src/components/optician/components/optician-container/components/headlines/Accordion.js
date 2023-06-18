import { AccordionDetails, AccordionSummary, Typography, Accordion as MuiAccordion } from '@mui/material';
import React from 'react';
import Arrow from '../../../../../../images/Arrow';
import './_Accordion.scss';

const Accordion = () => {
  return (
    <MuiAccordion>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Нускамасын окуу</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </Typography>
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
