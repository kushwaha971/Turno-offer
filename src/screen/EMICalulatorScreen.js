import { Box, Card, Typography } from "@mui/material";
import React from "react";
import DownpaymentSlider from "../component/navbar/DownpaymentSlider";
import TenureRadioButton from "../component/navbar/TenureRadioButtons";
import EmiScreenStyle from "../css/EmiScreenStyle";

function EMICalulatorScreen() {
  const discountPercentage = 10;
  const loantAmount = 350000;
  const discountAmount = loantAmount - (loantAmount * discountPercentage) / 100;
  const minDownpayment = 49000;

  const [duration, setDuration] = React.useState();
  const [calculatedEMI, setCalculateEMI] = React.useState();
  const [downpaymentAmount, setDownpaymentAmount] = React.useState(49000);

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = (discountAmount - downpaymentAmount) / duration;
    setCalculateEMI(Math.round((amount + Number.EPSILON) * 100) / 100);
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
                  {discountPercentage}% OFF
                </Typography>
                <Typography className="discountAmtStyle">
                  ₹{discountAmount}
                </Typography>
              </div>
              <Typography className="loanAmtStyle">
                <del>₹{loantAmount}</del>
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
            />

            <Typography className="minDownpaymentAmtStyle">
              Min ₹{minDownpayment}
            </Typography>
            <TenureRadioButton
              handleDuration={handleDuration}
              handleSubmit={handleSubmit}
            />
          </Card>
          <Card sx={{ mt: 1 }}>
            <Typography className="downpaymentTextStyle">EMI</Typography>
            {calculatedEMI > 0 && (
              <Typography className="downpaymentAmtStyle">
                ₹{calculatedEMI}
              </Typography>
            )}
          </Card>
        </Box>
      </Box>
    </EmiScreenStyle>
  );
}

export default EMICalulatorScreen;
