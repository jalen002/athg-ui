import React from 'react';
import HospitalForm from './HospitalForm';

const AddHospital = () => {
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