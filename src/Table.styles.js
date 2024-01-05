import React from "react";

import Box from "@mui/material/Box";
import styled from "@emotion/styled";

export const PageContainer = styled(Box)(({theme}) => ({
    //background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
    backgroundColor:"#1e90ff",
    alignContent:"center",
    justifyContent:"center",
}))

export const DataGridContainer = styled(Box)(({theme}) => ({
    backgroundColor:"#fff",
    // display:"flex",
    justifyContent:"center",
    width:"80%",
    height:"100%",
    padding:"20px",
    
    marginLeft:"245px",
    marginRight:"auto",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    
}))