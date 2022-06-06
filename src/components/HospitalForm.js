import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const HospitalForm = (props) => {
  const [hospital, setHospital] = useState({
    hospitalname: props.hospital ? props.hospital.hospitalname : '',
    director: props.hospital ? props.hospital.director : '',
    address: props.hospital ? props.hospital.address : '',
    employees: props.hospital ? props.hospital.employees : []
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { hospitalname, director, address, employees } = hospital;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [hospitalname, director, address, employees];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const hospital = {
        hospitalname,
        director,
        address,
        employees
      };
      props.handleOnSubmit(hospital);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHospital((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Hospital Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="hospitalname"
            value={hospitalname}
            placeholder="Enter name of hospital"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="director">
          <Form.Label>Hospital Director</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="director"
            value={director}
            placeholder="Enter name of the Hospital Director"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default HospitalForm;