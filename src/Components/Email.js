import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./personalpage.css";

import "react-phone-number-input/style.css";

import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { useHistory } from "react-router-dom";

const Email = () => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const history = useHistory();

  const mailcheck = () => {
    if (
      two.toString().length === 1 &&
      one.toString().length === 1 &&
      three.toString().length === 1 &&
      four.toString().length === 1 &&
      five.toString().length === 1
    ) {
      let a =
        one.toString() +
        two.toString() +
        three.toString() +
        four.toString() +
        five.toString();
      let b = window.localStorage.getItem("temp password");
      if (a === b) {
        history.push("./final");
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("more than one value is written in one field");
    }
  };

  useEffect(() => {
    if (
      !(
        one == null ||
        one === "" ||
        two == null ||
        two === "" ||
        three == null ||
        three === "" ||
        four == null ||
        four === "" ||
        five == null ||
        five === ""
      )
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [one, two, three, four, five]);
  useEffect(() => {
    let mailid = JSON.parse(window.localStorage.getItem("company"));
    setEmail(mailid.email);
  }, []);

  return (
    <div>
      <ul>
        <li>
          <span style={{ color: "orange" }}>
            <GoVerified />
          </span>
          &nbsp;&nbsp;Personal Details
        </li>
        <li>
          <span style={{ color: "orange" }}>
            <GoVerified />
          </span>
          &nbsp;&nbsp;Company Details
        </li>
        <li>
          <span>3</span>&nbsp;&nbsp;Email Verification
        </li>
      </ul>
      <div id="content">
        <h2 id="headding">Enter your OTP</h2>
        <p id="headding">
          For your security, we need to verify your identity. We sent a 5-digit
          code to <strong>{email}</strong>.Please enter it blow
        </p>
      </div>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "38%",
          },
        }}
        className="paper"
      >
        <Paper elevation={3} id="paperpersonal">
          <h5 style={{ color: "grey" }}>Enter your Code</h5>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <input
              id="otp"
              value={one}
              onChange={(e) => setOne(Number(e.target.value))}
              type="number"
            />
            <input
              id="otp"
              value={two}
              onChange={(e) => setTwo(Number(e.target.value))}
              type="number"
            />
            <input
              id="otp"
              value={three}
              onChange={(e) => setThree(Number(e.target.value))}
              type="number"
            />
            <input
              id="otp"
              value={four}
              onChange={(e) => setFour(Number(e.target.value))}
              type="number"
            />
            <input
              id="otp"
              value={five}
              onChange={(e) => setFive(Number(e.target.value))}
              type="number"
            />
          </div>
          <br />
          <br />
          <Link to="/company">
            {" "}
            <button id="backbutton" value="Back">
              Back
            </button>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            id="nxtbutton"
            onClick={() => mailcheck()}
            disabled={disabled}
          >
            Verify
          </button>
          <br />
          <br />
          <hr style={{ color: "grey" }} />
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            Didn't receive the email? Check your spam filter for an email from{" "}
            <span style={{ color: "orange" }}>{`${email} `}</span>
          </div>
          <br />
          <br />
        </Paper>
      </Box>
    </div>
  );
};

export default Email;
