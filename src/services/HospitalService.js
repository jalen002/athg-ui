import axios from 'axios';

const BASE_URL = "http://localhost:5270/api";

export const getHospitals = () => {
  return axios.get(BASE_URL + '/Hospital/Get');
}

export const getHospital = (hospitalId) => {
  return axios.get(BASE_URL + '/Hostpital/GetHospital/' + hospitalId);
}