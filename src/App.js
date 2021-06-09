import { makeStyles } from "@material-ui/core/styles";
import { DialogProvider } from "hooks/useDialog";
import PropertyTitle from "components/PropertyTitle";
import PropertyList from "components/PropertyList";

const useStyles = makeStyles({
  container: {
    padding: "30px",
    height: "100vh",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <DialogProvider>
        <PropertyTitle />
        <PropertyList />
      </DialogProvider>
    </div>
  );
};

export default App;
