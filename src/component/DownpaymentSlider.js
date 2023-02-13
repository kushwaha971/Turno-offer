import { Box, Slider } from "@mui/material";
import React from "react";

function DownpaymentSlider(props) {
  const { minDownpayment, discountAmount, setDownpaymentAmount,duration,setCalculateEMI } = props;
  return (
    <Box
      sx={{
        margin: "10px 25px",
      }}
    >
      <Slider
        sx={{ color: "#E8345E" }}
        defaultValue={minDownpayment}
        max={discountAmount}
        valueLabelDisplay="auto"
        step={1000}
        onChange={(e, value) => {
          setDownpaymentAmount(value);
          const amount = (discountAmount - value) / duration;
          setCalculateEMI(Math.round((amount + Number.EPSILON) * 100) / 100);
        }}
      />
   
    </Box>
  );
}

export default DownpaymentSlider;
