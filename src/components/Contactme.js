import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';
import '../pages/styles.css';
import { PiGithubLogoBold,PiLinkedinLogoBold,PiEnvelopeSimpleOpenFill } from "react-icons/pi";

function Contact () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
    const customButtonStyle = {
      backgroundColor: '#64178a', 
      color: 'white',        
      fontSize: '16px',
      '&:hover': {
        backgroundColor: '#8a23be',
      },
    };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateId = 'template_maljbz7';
    const serviceId = 'service_203xt6v';

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, formData, '7ifx8mL0NF5Wsjynh')
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Reset the form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const textFieldStyles = { width: '100%', marginTop: '0', marginBottom:'10px'};

  return (
    <Card sx={{ maxWidth: 400, width: '100%', boxShadow: '1px 4px 8px rgba(100, 23, 138, 0.2)'}} className='contactform'>
    <CardContent>
      <Typography sx={{ textAlign: 'center'}} variant="h5" component="h1" gutterBottom>
        Contact Us
      </Typography>
    <form className='form' onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        sx={textFieldStyles}
      />
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className='textform'
        sx={textFieldStyles}
      />
      <TextField
         name="message"
         multiline
        rows={4} 
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        className='textform'
        sx={textFieldStyles}
      />
        <Button type="submit" style={customButtonStyle} fullWidth>
            Submit
        </Button>
    </form>
    </CardContent>
    <div className='btnsocial-contact'>
          <button onClick={() => {
              window.open("https://github.com/EuricoSantos-936");
            }}
              className='contactbtn'><PiGithubLogoBold size={32} color="#64178a" weight="bold"/></button>   
          
          <button onClick={() => {
              window.open("https://www.linkedin.com/in/eurico-santos-545b57109");
            }}
              className='contactbtn'><PiLinkedinLogoBold size={32} color="#64178a" weight="bold"/></button>
          <button onClick={() => {
              window.open('mailto:euricosantos_936@hotmail.com');
            }}
              className='contactbtn'><PiEnvelopeSimpleOpenFill size={32} color="#64178a" weight="bold" /></button>
          </div>
    </Card>

  );
};

export default Contact