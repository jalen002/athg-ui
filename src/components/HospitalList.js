import React, { useContext } from 'react';
import _ from 'lodash';
import Hospital from '../components/Hospital';
import HospitalsContext from '../context/HospitalsContext';
import { deleteHospital } from '../services/HospitalService';


const HospitalList = () => {
  const { hospitals, setHospitals } = useContext(HospitalsContext);

  const handleDeleteHospital = (hospitalId) => {
    deleteHospital(hospitalId)
    .then(response => {
      // do something to trigger page refresh
      setHospitals(hospitals.filter(hospital => hospital.id !== hospitalId));
    }).catch(error => {
      alert("Failed to delete hospital with Id: " + hospitalId);
    });
  }

  return (
    <React.Fragment>
      <div style={{display:'flex', flexWrap:'wrap'}}>
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