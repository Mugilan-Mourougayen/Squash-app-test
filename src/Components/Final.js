import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function Final() {
  const [country, setCountry] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    let comp = JSON.parse(window.localStorage.getItem("company"));
    let pers = JSON.parse(window.localStorage.getItem("personal"));
    setEmail(comp.email);
    setCountry(pers.country);
    setFullname(pers.fullname);
    setGender(pers.gender);
    setImage(comp.logo);
    setPhone(pers.phone);
    setCompanyname(comp.companyname);
    setJob(comp.jobtitle);
    setExperience(comp.experience);
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "auto", marginTop: "5%" }}>
      <CardMedia component="img" height="140" image={image} alt="Logo" />
      <CardContent>
        <Typography variant="h6">Personal Details</Typography>

        <Typography variant="body2" color="text">
          Name: {fullname}
          <br />
          Email : {email}
          <br />
          Gender : {gender}
          <br />
          Phone Number : {phone}
          <br />
          Country : {country}
        </Typography>
        <hr />
        <Typography variant="h6">Company Details</Typography>
        <Typography variant="body2" color="text">
          Companyname : {companyname}
          <br />
          Job : {job}
          <br />
          Experience : {experience}
        </Typography>
      </CardContent>
    </Card>
  );
}
