export default async function fetchData() {
  const response = await fetch("https://viacep.com.br/ws/06414005/json");
  const data = await response.json();
  return data;
}
