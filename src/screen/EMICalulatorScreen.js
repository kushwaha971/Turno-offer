import { Box, Card, Typography } from "@mui/material";
import React from "react";
import DownpaymentSlider from "../component/DownpaymentSlider";
import TenureRadioButton from "../component/TenureRadioButtons";
import EmiScreenStyle from "../css/EmiScreenStyle";

function EMICalulatorScreen() {
  const discountPercentage = 10;
  const loanAmount = 350000;
  // Discount of 10%
  const discountAmount = loanAmount - (loanAmount * discountPercentage) / 100;
  const minDownpayment = 49000;

  const [duration, setDuration] = React.useState(36);

  const [downpaymentAmount, setDownpaymentAmount] = React.useState(49000);

  // Bydefault tenure
  const amount = (discountAmount - downpaymentAmount) / duration;
  const rslt = Math.round((amount + Number.EPSILON) * 100) / 100;

  const [calculatedEMI, setCalculateEMI] = React.useState(rslt);

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
                  {discountPercentage}% OFF
                </Typography>
                <Typography className="discountAmtStyle">
                  ₹{discountAmount}
                </Typography>
              </div>
              <Typography className="loanAmtStyle">
                <del>₹{loanAmount}</del>
              </Typography>
            </Box>
            <Typography className="downpaymentTextStyle">
              Downpayment
            </Typography>
            <Typography className="downpaymentAmtStyle">
              ₹{downpaymentAmount}
            </Typography>

            <DownpaymentSlider
              minDownpayment={minDownpayment}
              discountAmount={discountAmount}
              setDownpaymentAmount={setDownpaymentAmount}
              duration={duration}
              calculatedEMI={calculatedEMI}
              setCalculateEMI={setCalculateEMI}
            />

            <Typography className="minDownpaymentAmtStyle">
              Min ₹{minDownpayment}
            </Typography>
            <TenureRadioButton
              setDuration={setDuration}
              discountAmount={discountAmount}
              downpaymentAmount={downpaymentAmount}
              setCalculateEMI={setCalculateEMI}
            />

            <Typography className="downpaymentTextStyle">EMI</Typography>
            <Typography className="downpaymentAmtStyle">
              ₹{calculatedEMI}
            </Typography>
          </Card>
        </Box>
      </Box>
    </EmiScreenStyle>
  );
}

export default EMICalulatorScreen;
