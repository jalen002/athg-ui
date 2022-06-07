import axios from 'axios';

const BASE_URL = "http://localhost:5270/api/Hospital";

export const getHospitals = () => {
  return axios.get(BASE_URL + '/Get');
}

export const getHospital = (hospitalId) => {
  return axios.get(BASE_URL + '/GetHospital/' + hospitalId);
}

export const updateHospital = (hospital) => {
  return axios.put(BASE_URL + '/UpdateHospital/', hospital);
}

export const createHospital = (hostpital) => {
  return axios.post(BASE_URL + '/CreateHospital/', hostpital);
}

export const deleteHospital = (hospitalId) => {
  return axios.delete(BASE_URL + '/Delete/?hospitalId=' + hospitalId);
}