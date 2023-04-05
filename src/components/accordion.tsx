
import {
    Accordion,
    AccordionSummary,
    AccordionDetails
  } from "@mui/material";
  const CustomAccordion = ({ expandIcon, summaryText, children }:any) => {
    console.log("accordionRender", summaryText);
    return (
      <Accordion>
    <AccordionSummary expandIcon={expandIcon}>{summaryText}</AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    );
  };
  
  export default CustomAccordion;
  