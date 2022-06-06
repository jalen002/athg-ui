import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import HospitalForm from './HospitalForm';
import HospitalsContext from '../context/HospitalsContext';

const EditHospital = ({ history }) => {
  const { hospitals, setHospitals } = useContext(HospitalsContext);
  const { id } = useParams();
  const hospitalToEdit = hospitals.find((hospital) => hospital.id.toString() === id.toString());

  const handleOnSubmit = (hospital) => {
    const filteredHospitals = hospitals.filter((hospital) => hospital.id.toString() !== id.toString());
    setHospitals([hospital, ...filteredHospitals]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <HospitalForm hospital={hospitalToEdit} handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default EditHospital;