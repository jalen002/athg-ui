import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import HospitalForm from './HospitalForm';
import HospitalsContext from '../context/HospitalsContext';
import { updateHospital } from '../services/HospitalService';

const EditHospital = ({ history }) => {
  const { hospitals, setHospitals } = useContext(HospitalsContext);
  const { id } = useParams();
  const hospitalToEdit = hospitals.find((hospital) => hospital.id.toString() === id.toString());

  const handleOnSubmit = (hospital) => {
    updateHospital(hospital)
    .then(response => {
      setHospitals(hospitals.filter(hosp => hosp.id !== hospital.id));
      history.push('/');
    }).catch(error => {
      alert("Error saving updates to hospital");
    })
  };

  return (
    <React.Fragment>
      <HospitalForm hospital={hospitalToEdit} handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default EditHospital;