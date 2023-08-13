"use client";
import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const textField = [
    {
      name: "name",
      label: "Name",
      value: formData.name,
    },
    {
      name: "email",
      label: "Email",
      value: formData.email,
    },
    {
      name: "message",
      label: "Message",
      value: formData.message,
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxHeight: "420px",
        maxWidth: "538px",
        borderRadius: "30px",
        background: "#274D6980",
        padding: "32px 30px",
      }}
    >
      {textField.map((e, i) => (
        <Box key={i}>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: { xs: "15px", sm: "20px" },
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              marginBottom: { xs: "5px", sm: "20px" },
              marginLeft: "10px",
            }}
          >
            {e.label}
          </Typography>
          <InputBase
            name={e.name}
            value={e.value}
            rows={2}
            multiline={e.name === "message"}
            sx={{
              borderRadius: "50px",
              background: "#D9D9D9",
              padding: { xs: "0px 20px", sm: "7px 20px" },
              width: "100%",
            }}
            onChange={handleChange}
          />
        </Box>
      ))}
      <Box alignSelf={"center"}>
        <Button
          sx={{
            background: "#43D8BDC7",
            borderRadius: "50px",
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: { xs: "18px", sm: "24px" },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            padding: { xs: "5px 50px", sm: "10px 80px" },
            marginTop: "10px",
          }}
        >
          {"SEND"}
        </Button>
      </Box>
    </Box>
  );
}

export default FormContact;
