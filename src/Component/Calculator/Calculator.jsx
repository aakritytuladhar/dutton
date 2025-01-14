import React, { useState } from "react";
import "./calculator.css";
import cal from "../Assets/calculator.png";
import { TextField, Button, Box, Typography, InputLabel } from "@mui/material";

const Calculator = () => {
  const [price, setPrice] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [balloonPayment, setBalloonPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalCost, setTotalCost] = useState(null);

  const calculateLoan = () => {
    // Input validation
    if (
      price > 0 &&
      loanTerm > 0 &&
      interestRate >= 0 &&
      balloonPayment >= 0 &&
      balloonPayment < price
    ) {
      const loanAmount = price - balloonPayment;
      const monthlyRate = interestRate / 12 / 100; // Convert annual rate to monthly rate
      const totalMonths = loanTerm * 12; // Convert years to months

      let calculatedMonthlyPayment;

      if (monthlyRate > 0) {
        // Regular loan calculation with interest
        const numerator = monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
        const denominator = Math.pow(1 + monthlyRate, totalMonths) - 1;
        calculatedMonthlyPayment = loanAmount * (numerator / denominator);
      } else {
        // Zero-interest loan calculation
        calculatedMonthlyPayment = loanAmount / totalMonths;
      }

      // Total cost and interest
      const calculatedTotalCost =
        calculatedMonthlyPayment * totalMonths + balloonPayment;
      const calculatedTotalInterest = calculatedTotalCost - price;

      setMonthlyPayment(calculatedMonthlyPayment.toFixed(2));
      setTotalInterest(calculatedTotalInterest.toFixed(2));
      setTotalCost(calculatedTotalCost.toFixed(2));
    } else {
      alert("Please enter valid input values.");
    }
  };

  return (
    <div className="calculator-main">
      <img src={cal} alt="cal" className="cal-img" />

      <div className="cal-container">
        <Box
          sx={{
            gap: 4,
            p: 4,
            border: "1px solid #ccc",
            borderRadius: 2,
            mt: 2,
          }}
        >
          {/* First Div */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
              Car Loan Calculator
            </Typography>
            <Typography variant="body1" gutterBottom>
              Use this car payment calculator to estimate monthly
            </Typography>
            <Typography variant="body1">
              payments on your next new or used auto loan.
            </Typography>
          </Box>

          {/* Second Div */}
          <Box
            sx={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              mt: 3,
            }}
          >
            {/* First Row */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <InputLabel>Price ($)</InputLabel>
                <TextField
                  placeholder=" 50000"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <InputLabel>Interest Rate (%)</InputLabel>
                <TextField
                  placeholder=" 7"
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  variant="outlined"
                  fullWidth
                />
              </Box>
            </Box>

            {/* Second Row */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <InputLabel>Balloon Payment ($)</InputLabel>
                <TextField
                  placeholder=" 20000"
                  type="number"
                  value={balloonPayment}
                  onChange={(e) => setBalloonPayment(Number(e.target.value))}
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <InputLabel>Loan Term (Years)</InputLabel>
                <TextField
                  placeholder=" 5"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  variant="outlined"
                  fullWidth
                />
              </Box>
            </Box>
            <div className="contactus-buttons">
              <Button
                variant="contained"
                sx={{ alignItems: "center", backgroundColor: "black" }}
                onClick={calculateLoan}
              >
                Calculate{" "}
              </Button>
            </div>
          </Box>
        </Box>
      </div>
      <div className="loanResult">
        <Box sx={{ textAlign: "center", mt: 4, paddingBottom: 4 }}>
          <Typography variant="h4" gutterBottom>
            Loan Results
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 4,
              p: 4,
              border: "1px solid #ccc",
              borderRadius: 2,
              mt: 2,
            }}
          >
            {/* Monthly Payment */}
            <Box sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Money Bag"
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: "#f0f0f0",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                }}
              />
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                Monthly Payment
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                {monthlyPayment ? `$${monthlyPayment}` : ""}
              </Typography>
            </Box>

            {/* Total Interest */}
            <Box sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/684/684832.png"
                alt="Dollar Bill"
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: "#f0f0f0",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                }}
              />
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                Total Interest
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                {totalInterest ? `$${totalInterest}` : ""}
              </Typography>
            </Box>

            {/* Total Cost of Loan */}
            <Box sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/1022/1022562.png"
                alt="Chart"
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: "#f0f0f0",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                }}
              />
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                Total Cost of Loan
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                {totalCost ? `$${totalCost}` : ""}
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Calculator;
