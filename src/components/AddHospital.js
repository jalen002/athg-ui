import React, { useContext } from 'react';
import HospitalForm from './HospitalForm';
import HospitalsContext from '../context/HospitalsContext';

const AddHospital = ({ history }) => {
  const { hospitals, setHospitals } = useContext(HospitalsContext);

  const handleOnSubmit = (Hospital) => {
    console.log(Hospital);
  };

  return (
    <React.Fragment>
      <HospitalForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddHospital;