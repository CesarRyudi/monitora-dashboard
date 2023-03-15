import urlLocal from "../../isHome";

async function buscaData( locais = "1%2C2", datainicio = "2022-12-01", datafim = "2023-12-01"){
  
  const url = `${urlLocal}api/v1/frontend/leituras?locais=${locais}&datainicio=${datainicio}&datafim=${datafim}`;

  console.log(url);

    // const response = await fetch(url, {
    return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })

  // const dados = await response.json();  
  // return dados; 
  
};

export default buscaData;


/*
async function buscaData( locais = "1%2C2", datainicio = "2022-12-01", datafim = "2023-12-01"){
  
  const url = `${urlLocal}api/v1/frontend/leituras?locais=${locais}&datainicio=${datainicio}&datafim=${datafim}`;

  console.log(url);

    // const response = await fetch(url, {
    return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(response => {
      if(response.ok) return response.json();
      })
  
};

export default buscaData;

*/
