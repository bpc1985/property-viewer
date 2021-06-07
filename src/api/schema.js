import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  street: yup.string().required(),
  number: yup.string().required(),
  postalCode: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
});

export default schema;
