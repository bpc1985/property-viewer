import { isEmpty } from "lodash";
export const generateAddress = ({
  street,
  number,
  city,
  municipality,
  postalCode,
  country,
}) => {
  if (isEmpty(municipality)) {
    return `${street} ${number}, ${city}, ${postalCode}, ${country}`;
  }
  return `${street} ${number}, ${city}, ${municipality}, ${postalCode}, ${country}`;
};
