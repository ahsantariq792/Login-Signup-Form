import '../App.css';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
const axios = require('axios');


const submit = (values) => {
  console.log("values", values)
  axios.post("http://localhost:5000/api/v1/login",
  {
    name: values.name,
    email: values.email
  })
  .then(res => {
    console.log(res.data);
  })
}



const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  // password: yup
  //   .string('Enter your password')
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),
  name: yup
    .string('Enter your password')
    .min(4, 'Name should be of minimum 4 characters length')
    .required('Name is required'),
  // age: yup
  //   .number('Enter your age')
  //   .positive('age should not be negative')
  //   .min(10, 'age should more than 10 years')
  //   .max(200, 'age should be less than 200 years')
  //   .required('age is required'),
});





function Loginform() {

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: '',
      name: '',
     
    },
    onSubmit: submit
  },
  );


  return (
    <>
      <div className="container">
        <div className="main">
          <h1>Login Form</h1>
          <form onSubmit={formik.handleSubmit}>

            <h3> Personal Information </h3>

            <TextField
              id="outlined-basic"
              name="name"
              label="name"
              className="box"

              value={formik.values.name}
              onChange={formik.handleChange}


              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}

              variant="outlined" />



            <h3> Contact Details </h3>


            <TextField
              id="outlined-basic"
              name="email"
              label="email"
              className="box"
              value={formik.values.email}
              onChange={formik.handleChange}

              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}


              variant="outlined" />

            <Button id="btn" variant="contained" color="success" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Loginform;