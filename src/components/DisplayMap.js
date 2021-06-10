import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mapContainer: {
    height: "50vh",
    width: "50wh",
  },
});

const DisplayMap = ({ name, address, coordinates }) => {
  const classes = useStyles();
  return (
    <MapContainer
      center={[coordinates[1], coordinates[0]]}
      zoom={13}
      scrollWheelZoom={false}
      className={classes.mapContainer}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates[1], coordinates[0]]}>
        <Popup>
          {name} <br /> {address}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

DisplayMap.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  coordinates: PropTypes.array.isRequired,
};

export default DisplayMap;
