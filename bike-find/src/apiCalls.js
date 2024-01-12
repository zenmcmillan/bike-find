export const getAddresses = () => {
  return fetch("http://api.citybik.es/v2/networks/joco-new-york")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.status}`);
    } else {
      return response.json()
    }
  });
}