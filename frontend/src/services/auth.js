import api from './api';

export async function GetBooks(email, password) {
  const response = await api.get('https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge', { email, password })
    .then(response => {
      console.log(response);
      return { status: true, data: response.data }
    }).catch(error => {
      return { data: null, status: false, error }
    })
  return response;
}
