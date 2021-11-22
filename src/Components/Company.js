import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./personalpage.css";
import "react-phone-number-input/style.css";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";

const Company = () => {
  const [image, setImage] = useState(null);
  const [imagpreview, setImagpreview] = useState(null);
  const history = useHistory();

  const [companyname, setCompanyname] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [experience, setExperience] = useState("");
  const [checked, setChecked] = useState(false);

  const [companynameerror, setCompanynameerror] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [joberror, setJoberror] = useState("");
  const [experienceerror, setExperienceerror] = useState("");
  const [checkederror, setCheckederror] = useState("");

  const companycheck = (e) => {
    e.preventDefault();
    setCompanynameerror("");
    setEmailerror("");
    setJoberror("");
    setExperienceerror("");
    setCheckederror("");

    if (!email.includes("@")) {
      setEmailerror("*Enter a proper mail id*");
    } else if (companyname == null || companyname === "") {
      setCompanynameerror("*Please fill the company Name*");
    } else if (job == null || job === "") {
      setJoberror("*Please fill the job posting*");
    } else if (experience == null || experience === "") {
      setExperienceerror("*Please fill the years of experience*");
    } else if (checked === false) {
      setCheckederror("*Check the terms an condition to proceed*");
    } else {
      setEmailerror("");
      setCompanynameerror("");
      setJoberror("");
      setExperienceerror("");
      setCheckederror("");
      let passcode = document.querySelector(".passcode");
      let companyval = {
        companyname: companyname,
        jobtitle: job,
        experience: experience,
        email: email,
        logo: imagpreview,
      };
      localStorage.removeItem("company");
      localStorage.removeItem("temp password");
      localStorage.setItem("company", JSON.stringify(companyval));
      localStorage.setItem("temp password", passcode.value);
      

      emailjs
        .sendForm(
          "service_bgeviai",
          "template_hjccx68",
          e.target,
          "user_ye2aY1R11Ap7RwP6LESlS"
        )
        .then(
          (result) => {
            console.log(result.text);
            history.push("/email");
          },
          (error) => {
            console.log(error.text);
            alert("Mail Not Sent")
          }
        );
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagpreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setImagpreview(null);
    }
  }, [image]);

  return (
    <div>
      <ul>
        <li>
          <span>
            <GoVerified />
          </span>
          &nbsp;&nbsp;Personal Details
        </li>
        <li>
          <span style={{ color: "orange" }}>2</span>&nbsp;&nbsp;Company Details
        </li>
        <li>
          <span>3</span>&nbsp;&nbsp;Email Verification
        </li>
      </ul>
      <div id="content">
        <h2 id="headding">Add your Company Details</h2>
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
            width: "38%",
          },
        }}
        className="paper"
      >
        <Paper elevation={3} id="paperpersonal">
          <form id="my_form" onSubmit={companycheck}>
            <div style={{ display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={imagpreview}
                sx={{ width: 80, height: 80 }}
              />
              <label style={{ marginTop: "20px", marginLeft: "30px" }}>
                <input
                  type="file"
                  placeholder="upload logo"
                  accept="image/*"
                  onChange={(e) => {
                    const images = e.target.files[0];
                    if (images && images.type.substr(0, 5) === "image") {
                      setImage(images);
                    } else {
                      setImage(null);
                    }
                  }}
                  style={{ display: "none" }}
                />
                <p style={{ color: "#ED5901" }}>Upload your company logo</p>
              </label>
            </div>
            <br />
            <label> Company Name</label>
            <br />
            <input
              id="input"
              onChange={(e) => setCompanyname(e.target.value)}
            />
            {companynameerror && (
              <p style={{ margin: "0px", color: "red" }}>{companynameerror}</p>
            )}
            <br />
            <label> Email </label>
            <br />
            <input
              id="input"
              type="email"
              className="emailcode"
              name="to_name"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailerror && (
              <p style={{ margin: "0px", color: "red" }}>{emailerror}</p>
            )}
            <br />
            <label> Job Title</label>
            <br />
            <input id="input" onChange={(e) => setJob(e.target.value)} />
            {joberror && (
              <p style={{ margin: "0px", color: "red" }}>{joberror}</p>
            )}
            <label> Year of Experience</label>
            <br />
            <input
              id="input"
              type="number"
              onChange={(e) => setExperience(e.target.value)}
            />
            {experienceerror && (
              <p style={{ margin: "0px", color: "red" }}>{experienceerror}</p>
            )}
            <input
              name="message"
              value={Math.floor(Math.random() * 100000)}
              className="passcode"
              readOnly={true}
              style={{ visibility: "hidden" }}
            />
            <br />
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(!checked)}
              inputProps={{ "aria-label": "controlled" }}
              color="warning"
            />
            <span>
              I agree the
              <span
                style={{ color: "#ED5901" }}
                id="login"
                onClick={() => alert("No one has registered already")}
              >
                Trems and Conditions
              </span>
            </span>
            {checkederror && (
              <p style={{ margin: "0px", color: "red" }}>{checkederror}</p>
            )}
            <br />
            <Link to="/personal">
              {" "}
              <button id="backbutton">Back</button>
            </Link>
            &nbsp;&nbsp;
            <input type="submit" id="nxtbutton" value="Send OTP" />
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default Company;
