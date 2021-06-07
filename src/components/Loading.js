import CircularProgress from "@material-ui/core/CircularProgress";
import { styled } from "@material-ui/core/styles";

const Center = styled("div")({
  margin: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
});

const Loading = () => (
  <Center>
    <CircularProgress />
  </Center>
);

export default Loading;
