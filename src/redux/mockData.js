import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    name: "Own House",
    street: "Maapadontie",
    number: "5",
    postalCode: "00640",
    city: "Helsinki",
    municipality: "Uusimaa",
    country: "Finland",
    description: "My house",
    coordinates: [24.947417031490737, 60.23171135],
  },
  {
    id: uuidv4(),
    name: "Diamond",
    street: "Santa Fe",
    number: "40",
    postalCode: "94124",
    city: "San Francisco",
    municipality: "California",
    country: "United States",
    description: "Diamond property",
    coordinates: [-122.40110929789842, 37.73416985],
  },
  {
    id: uuidv4(),
    name: "Arwaa Mansion",
    street: "Nassim Road",
    number: "48",
    postalCode: "258433",
    city: "Singapore",
    municipality: "Singapore",
    country: "Singapore",
    description: "The owner is Brunei's Prince Jefri Bolkiah",
    coordinates: [103.820541, 1.313232],
  },
];

export default mockData;
