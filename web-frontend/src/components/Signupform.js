import '../App.css';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
const axios = require('axios');


const submit = (values) => {
  console.log("values", values)
  axios.post("http://localhost:5000/api/v1/profile",
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

  // password: yup
  //   .string('Enter your password')
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),

});





function Signupform() {

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
          <h1>Signup Form</h1>
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



            {/* <TextField
              id="outlined-basic"
              name="age"
              label="age"
              className="box"

              value={formik.values.age}
              onChange={formik.handleChange}


              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}

              variant="outlined" /> */}

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

            {/* <TextField
              id="outlined-basic"
              name="phone"
              label="phone"
              className="box"
              value={formik.values.phone}
              onChange={formik.handleChange}

              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}


              variant="outlined" />


            <h3> Portfolio URL </h3>


            <TextField
              id="outlined-basic"
              name="website"
              label="url"
              className="box"
              value={formik.values.website}
              onChange={formik.handleChange}

              error={formik.touched.website && Boolean(formik.errors.website)}
              helperText={formik.touched.website && formik.errors.website}


              variant="outlined" />


            <h3> Account Password </h3>


            <TextField
              id="outlined-basic"
              name="password"
              label="password"
              type="password"
              className="box"

              value={formik.values.password}
              onChange={formik.handleChange}


              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}

              variant="outlined" /> */}


            <Button id="btn" variant="contained" color="success" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signupform;