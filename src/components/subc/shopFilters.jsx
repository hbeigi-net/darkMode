import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from "styled-components"
import CheckBoxList from './checkBoxList'
import Grid from '@mui/material/Grid';

export default function ShopFilters() {
  return (
            <>
                <Grid item  xs={12} sm={4} md={12}>

                    <Accordion defaultExpanded={true} sx={{color :"blue" , backgroundColor :"rosybrown" }}square ={true} disableGutters>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>مردانه </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{px : "0"}}>
                            <CheckBoxList/>
                        </AccordionDetails>
                    </Accordion> 
                </Grid>
                <Grid item  xs={12} sm={4} md={12}>

                    <Accordion defaultExpanded={true} sx={{color :"blue" , backgroundColor :"rosybrown" }}square ={true} disableGutters>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>مردانه </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{px : "0"}}>
                            <CheckBoxList/>
                        </AccordionDetails>
                    </Accordion> 
                </Grid>
                <Grid item  xs={12} sm={4} md={12}>

                    <Accordion defaultExpanded={true} sx={{color :"blue" , backgroundColor :"rosybrown" }}square ={true} disableGutters>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>مردانه </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{px : "0"}}>
                            <CheckBoxList/>
                        </AccordionDetails>
                    </Accordion> 
                </Grid>
            </>

  );
}
