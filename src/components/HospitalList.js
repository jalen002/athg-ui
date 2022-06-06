import React, { useContext } from 'react';
import _ from 'lodash';
import Hospital from '../components/Hospital';
import HospitalsContext from '../context/HospitalsContext';


const HospitalList = () => {
  const { hospitals, setHospitals } = useContext(HospitalsContext);

  const handleDeleteHospital = (hospitalId) => {
    console.log(hospitalId);
  }

  return (
    <React.Fragment>
      <div>
        {(!_.isEmpty(hospitals) && hospitals.length > 0) ? (
            hospitals.map((hospital) => (
              <Hospital key={hospital.id} {...hospital} handleDeleteHospital={handleDeleteHospital} />
            ))
          ) : (
            <p>No hospitals available. Please add some hospitals.</p>
        )}
      </div>
    </React.Fragment>
  );
}

export default HospitalList;