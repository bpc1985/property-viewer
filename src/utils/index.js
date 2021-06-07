export const generateAddress = ({
  street,
  number,
  city,
  municipality,
  postalCode,
  country,
}) =>
  `${street} ${number}, ${city}, ${municipality}, ${postalCode}, ${country}`;
