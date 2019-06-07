import axios from "axios";
import toastr from "../utils/toastr";

export async function ultimoContrato() {
  let url = `http://192.168.1.108:3002/getlastcontrato`;

  return await axios.get(url);
}

export async function getTitulares() {
  let url = "http://192.168.1.108:3002/getlistadotitulares";

  return await axios.get(url);
}

export async function getContratoToValid(id) {
  let url = `http://192.168.1.108:3002/contrato/${id}`;

  return await axios.get(url);
}

export async function getAdherents(id) {
  let url = `http://192.168.1.108:3002/getadherent/${id}`;

  return await axios.get(url);
}

export async function postRegistro() {
  let url = `http://192.168.1.108:3002/postcontrato`;

  await axios
    .post(url)
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}
