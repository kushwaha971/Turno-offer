import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const TenureComponentStyle = styled(Box)(({ theme }) => ({
  ".radioLabelStyle": {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "30px",
    color: "#333333",
  },
}));

function TenureRadioButton(props) {
  const { setDuration, discountAmount, downpaymentAmount, setCalculateEMI } =
    props;
  return (
    <TenureComponentStyle>
      <Box sx={{ margin: "15px 20px" }}>
        <form>
          <FormLabel id="demo-error-radios" className="tenure">
            Tenure
          </FormLabel>
          <RadioGroup
            onChange={(e) => {
              setDuration(e.target.value);
              const amount =
                (discountAmount - downpaymentAmount) / e.target.value;
              setCalculateEMI(
                Math.round((amount + Number.EPSILON) * 100) / 100
              );
            }}
            defaultValue={36}
          >
            <FormControlLabel
              value={36}
              control={<Radio />}
              defaultChecked
              label={
                <Typography className="radioLabelStyle">36 Months</Typography>
              }
            />
            <FormControlLabel
              value={24}
              control={<Radio />}
              label={
                <Typography className="radioLabelStyle">24 Months</Typography>
              }
            />
          </RadioGroup>
        </form>
      </Box>
    </TenureComponentStyle>
  );
}

export default TenureRadioButton;
