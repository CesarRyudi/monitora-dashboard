export default async function fetchData() {
  const response = await fetch(
    "https://geminiapi-services-x2awrs6jqq-rj.a.run.app/api/v1/frontend/leituras?locais=3,4&datafim=2023-08-03%2017:00:00.0000&datainicio=2023-05-03%2017:00:00.0000"
  );
  const data = await response.json();
  return data;
}
