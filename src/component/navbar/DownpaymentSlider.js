import { Box, Slider } from "@mui/material";
import React from "react";

function DownpaymentSlider(props) {
  const { minDownpayment, discountAmount, setDownpaymentAmount } = props;
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
        }}
      />
    </Box>
  );
}

export default DownpaymentSlider;
