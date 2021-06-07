import { DialogProvider } from "hooks/useDialog";
import PropertyTitle from "components/PropertyTitle";
import PropertyList from "components/PropertyList";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <DialogProvider>
        <PropertyTitle />
        <PropertyList />
      </DialogProvider>
    </div>
  );
};

export default App;
