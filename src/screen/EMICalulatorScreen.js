import { Box, Card, Typography } from "@mui/material";

import React from "react";
import DownpaymentSlider from "../component/navbar/DownpaymentSlider";
import TenureRadio from "../component/navbar/TenureRadio";
import EmiScreenStyle from "../css/EmiScreenStyle";

function EMICalulatorScreen() {
  const discountPer = 10;
  const loanAmt = 350000;
  const discountAmt = loanAmt - (loanAmt * discountPer) / 100;
  const minDownpayment = 49000;
  const [duration, setDuration] = React.useState();
  const [calculateAmt, setCalculateAmt] = React.useState();
  const [downpaymentAmt, setDownpaymentAmt] = React.useState(49000);
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = (discountAmt - downpaymentAmt) / duration;
    setCalculateAmt(Math.round((amount + Number.EPSILON) * 100) / 100);
  };
  return (
    <EmiScreenStyle>
      <Box sx={{ marginTop: "100px" }}>
        <Box>
          <Typography className="textHeadingStyle">EMI Calculator</Typography>

          <Card>
            <Box
              sx={{
                background: " #EBFBEA",
                padding: "15px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className="loanTextStyle">Loan Amount</Typography>
                <Typography className="discountValStyle">
                  {discountPer}% OFF
                </Typography>
                <Typography className="discountAmtStyle">
                  ₹{discountAmt}
                </Typography>
              </div>
              <Typography className="loanAmtStyle">
                <del>₹{loanAmt}</del>
              </Typography>
            </Box>
            <Typography className="downpaymentTextStyle">
              Downpayment
            </Typography>
            <Typography className="downpaymentAmtStyle">
              ₹{downpaymentAmt}
            </Typography>

            <DownpaymentSlider
              minDownpayment={minDownpayment}
              discountAmt={discountAmt}
              setDownpaymentAmt={setDownpaymentAmt}
            />

            <Typography className="minDownpaymentAmtStyle">
              Min ₹{minDownpayment}
            </Typography>
            <TenureRadio
              handleDuration={handleDuration}
              handleSubmit={handleSubmit}
            />
          </Card>
          <Card sx={{ mt: 1 }}>
            <Typography className="downpaymentTextStyle">EMI</Typography>
            {calculateAmt > 0 && (
              <Typography className="downpaymentAmtStyle">
                ₹{calculateAmt}
              </Typography>
            )}
          </Card>
        </Box>
      </Box>
    </EmiScreenStyle>
  );
}

export default EMICalulatorScreen;
