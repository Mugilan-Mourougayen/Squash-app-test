import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./personalpage.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useHistory } from "react-router-dom";

const Personal = () => {
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();
  const [regionerror, setRegionerror] = useState("");
  const [countryerror, setCountryerror] = useState("");
  const [fullnameerror, setFullnameerror] = useState("");
  const [gendererror, setGendererror] = useState("");
  const [phoneerror, setPhoneerror] = useState("");

  const personalcheck = () => {
    setCountryerror("");
    setRegionerror("");
    setFullnameerror("");
    setPhoneerror("");
    setGendererror("");

    if (fullname == null || fullname === "") {
      setFullnameerror("*Enter a proper name*");
    } else if (country == null || country === "") {
      setCountryerror("*Please Select your country*");
    } else if (region == null || region === "") {
      setRegionerror("*Please Select your region*");
    } else if (gender == null || gender === "") {
      setGendererror("*Please Select your gender*");
    } else if (phone === "" || phone.toString().length < 10) {
      setPhoneerror("*provide a proper number*");
    } else {
      setCountryerror("");
      setRegionerror("");
      setFullnameerror("");
      setPhoneerror("");
      setGendererror("");

      let personal = {
        fullname: fullname,
        country: country,
        region: region,
        gender: gender,
        phone: phone,
      };
      localStorage.removeItem("company");
      localStorage.removeItem("temp password");
      localStorage.removeItem("personal");
      localStorage.setItem("personal", JSON.stringify(personal));
      history.push("/company");
    }
  };

  useEffect(() => {
    if (
      !(
        fullname == null ||
        fullname === "" ||
        country == null ||
        country === "" ||
        region == null ||
        region === "" ||
        gender == null ||
        gender === "" ||
        phone == null ||
        phone === ""
      )
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [fullname, country, region, gender, phone]);

  return (
    <div>
      <ul>
        <li>
          <span style={{ color: "orange" }}>1</span>&nbsp;&nbsp;Personal Details
        </li>
        <li>
          <span>2</span>&nbsp;&nbsp;Company Details
        </li>
        <li>
          <span>3</span>&nbsp;&nbsp;Email Verification
        </li>
      </ul>
      <div id="content">
        <h2 id="headding">Add your Personal Details</h2>
        <p id="headding">
          Lorem lpsum is simply dummy text of printng and typesetting industry
        </p>
      </div>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
        className="paper"
      >
        <Paper elevation={3} id="paperpersonal">
          <label> Full Name</label>

          <br />
          <input id="input" onChange={(e) => setFullname(e.target.value)} />
          <p style={{ margin: "0px", color: "red" }}>{fullnameerror}</p>

          <label>Gender</label>
          <br />
          <ToggleButtonGroup
            color="warning"
            size="small"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <ToggleButton value="Male">Male</ToggleButton>
            <ToggleButton value="Female">Female</ToggleButton>
            <ToggleButton value="Others">Others</ToggleButton>
          </ToggleButtonGroup>
          <p style={{ margin: "0px", color: "red" }}>{gendererror}</p>
          <label>Country</label>
          <br />
          <CountryDropdown value={country} id="input" onChange={setCountry} />

          <p style={{ margin: "0px", color: "red" }}>{countryerror}</p>
          <label>State</label>
          <br />
          <RegionDropdown
            country={country}
            value={region}
            onChange={setRegion}
            id="input"
          />
          <p style={{ margin: "0px", color: "red" }}>{regionerror}</p>
          <label>Phone Number</label>

          <PhoneInput
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            id="input"
          />

          <p style={{ margin: "0px", color: "red" }}>{phoneerror}</p>
          <button
            onClick={() => personalcheck()}
            id="button"
            disabled={disabled}
          >
            {" "}
            Next
          </button>
          <p>
            Already have an account?{" "}
            <span
              style={{ color: "#ED5901" }}
              id="login"
              onClick={() => alert("No one has registered already")}
            >
              {" "}
              Log in
            </span>
          </p>
        </Paper>
      </Box>
    </div>
  );
};

export default Personal;
