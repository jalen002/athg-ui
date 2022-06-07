import React, {useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { getHospitals } from '../services/HospitalService';
import AddHospital from '../components/AddHospital';
import EditHospital from '../components/EditHospital';
import HospitalList from '../components/HospitalList';
import HospitalsContext from '../context/HospitalsContext';

const AppRouter = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    getHospitals()
    .then(response => {
      setHospitals(response.data);
    }).catch(error => {
      alert("Error retrieving list of hospitals");
    });
  }, [setHospitals]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <HospitalsContext.Provider value={{ hospitals, setHospitals }}>
            <Switch>
              <Route component={HospitalList} path="/" exact={true} />
              <Route component={AddHospital} path="/add" />
              <Route component={EditHospital} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </HospitalsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;