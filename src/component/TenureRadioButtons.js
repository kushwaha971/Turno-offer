import {
  Box,
  Button,
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
  ".btnStyle": {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "10px",
    lineHeight: "20px",
    background: "#E8345E",
    margin: 1,
    textTransform: "capitalize",
    borderRadius:'20px',
    "&:hover": {
      color: "#E8345E",
      background: "#fff",
    },
  },
}));

function TenureRadioButton(props) {
  const { handleDuration, handleSubmit } = props;
  return (
    <TenureComponentStyle>
      <Box sx={{ margin: "15px 20px" }}>
        <form onSubmit={handleSubmit}>
          <FormLabel id="demo-error-radios" className="tenure">
            Tenure
          </FormLabel>
          <RadioGroup onChange={handleDuration}>
            <FormControlLabel
              value={36}
              control={<Radio />}
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
          <Button
            type="submit"
            variant="contained"
            className="btnStyle"
            fullWidth
          >
            Calculate EMI
          </Button>
        </form>
      </Box>
    </TenureComponentStyle>
  );
}

export default TenureRadioButton;
