import axios from 'axios';

const STOCK_URL = 'http://localhost:9191/invent/stock';
const TRANS_URL = 'http://localhost:9191/invent/trans';
const ID_URL = 'http://localhost:9191/invent/trans-id';

export const saveTransaction = (transaction) => {
  return axios.post(STOCK_URL, transaction, {
    withCredentials: true
  });
}

export const findTransactionById = (id) => {
  return axios.get(`${STOCK_URL}/${id}`, {
    withCredentials: true
  });
}

export const removeTransactionById = (id) => {
  return axios.delete(`${STOCK_URL}/${id}`, {
    withCredentials: true
  });
}

export const transactionIdGenerate = (flag) => {
  return axios.get(`${ID_URL}/${flag}`, {
    withCredentials: true
  });
}

export const findTransactionsByType = (type) => {
  return axios.get(`${TRANS_URL}/${type}`, {
    withCredentials: true
  });
}