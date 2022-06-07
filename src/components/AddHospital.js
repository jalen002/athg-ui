import React, { useContext } from 'react';
import HospitalForm from './HospitalForm';
import HospitalsContext from '../context/HospitalsContext';
import { createHospital } from '../services/HospitalService';

const AddHospital = ({ history }) => {
  const { hospitals, setHospitals } = useContext(HospitalsContext);

  const handleOnSubmit = (hospital) => {
    createHospital(hospital)
    .then(response => {
      history.push('/');
    }).catch(error => {
      alert("Failed to create hospital");
    });
  };

  return (
    <React.Fragment>
      <HospitalForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddHospital;