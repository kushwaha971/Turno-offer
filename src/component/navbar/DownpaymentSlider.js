import { Box, Slider } from "@mui/material";
import React from "react";

function DownpaymentSlider(props) {
  const { minDownpayment, discountAmt, setDownpaymentAmt } = props;
  return (
    <Box
      sx={{
        margin: "10px 25px",
      }}
    >
      <Slider
        sx={{ color: "#E8345E" }}
        defaultValue={minDownpayment}
        max={discountAmt}
        valueLabelDisplay="auto"
        step={1000}
        onChange={(e, value) => {
          setDownpaymentAmt(value);
        }}
      />
    </Box>
  );
}

export default DownpaymentSlider;
