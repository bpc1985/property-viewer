import axios from "axios";
import { isEmpty } from "lodash";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.geoapify.com/v1/geocode/search";
const DEFAULT_COORDINATE = [11.604, 165.3133];

const generateUrlEndPoint = ({
  number,
  street,
  postalCode,
  city,
  municipality,
  country,
}) => {
  if (isEmpty(municipality)) {
    return `${BASE_URL}?housenumber=${number}&street=${street}&postcode=${postalCode}&city=${city}&country=${country}&apiKey=${API_KEY}`;
  }
  return `${BASE_URL}?housenumber=${number}&street=${street}&postcode=${postalCode}&city=${city}&state=${municipality}&country=${country}&apiKey=${API_KEY}`;
};

export async function getApiEncoding(property) {
  try {
    const response = await axios.get(generateUrlEndPoint(property));
    return (
      response.data.features[0]?.geometry.coordinates || DEFAULT_COORDINATE
    );
  } catch (e) {
    // return default coordinate if having exception error
    console.log("Error: ", e);
    return DEFAULT_COORDINATE;
  }
}
