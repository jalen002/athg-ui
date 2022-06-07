import axios from 'axios';

const BASE_URL = "http://localhost:5270/api/Hospital";

export const getHospitals = async () => {
  return axios.get(BASE_URL + '/Get');
}

export const getHospital = async (hospitalId) => {
  return axios.get(BASE_URL + '/GetHospital/' + hospitalId);
}

export const updateHospital = async (hospital) => {
  return axios.put(BASE_URL + '/UpdateHospital/', hospital);
}

export const createHospital = async (hostpital) => {
  return axios.post(BASE_URL + '/CreateHospital/', hostpital);
}

export const deleteHospital = async (hospitalId) => {
  return axios.delete(BASE_URL + '/Delete/?hospitalId=' + hospitalId);
}