import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = "https://api.geoapify.com/v1/geocode/search";

const generateUrlEndPoint = ({
  number,
  street,
  postalCode,
  city,
  municipality,
  country,
}) =>
  `${BASE_URL}?housenumber=${number}&street=${street}&postcode=${postalCode}&city=${city}&state=${municipality}&country=${country}&apiKey=${API_KEY}`;

export async function getApiEncoding(property) {
  const response = await axios.get(generateUrlEndPoint(property));
  return response.data.features[0]?.geometry.coordinates;
}
