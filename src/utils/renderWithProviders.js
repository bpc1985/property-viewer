import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import mockData from "redux/mockData";
import reducers from "redux/reducers";

const renderWithProviders = (ui, { reduxState } = {}) => {
  const store = createStore(reducers, reduxState || mockData);
  return render(<Provider store={store}>{ui}</Provider>);
};

export default renderWithProviders;
