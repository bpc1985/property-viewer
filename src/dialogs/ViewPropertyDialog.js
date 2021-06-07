import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { generateAddress } from "utils";

import { DialogContent } from "@material-ui/core";
import DialogTitle from "components/DialogTitle";
import DisplayMap from "components/DisplayMap";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ViewPropertyDialog = ({ onCancel, idx }) => {
  const classes = useStyles();
  const selectedProperty = useSelector((state) =>
    !isEmpty(idx) ? state.properties.find((p) => p.id === idx) : {}
  );

  return (
    <>
      <DialogTitle onClose={onCancel}>View Property</DialogTitle>
      <DialogContent>
        <DisplayMap
          name={selectedProperty.name}
          address={generateAddress(selectedProperty)}
          coordinates={selectedProperty.coordinates}
        />
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {selectedProperty.name}
              </Typography>
              <Typography variant="body1" component="p">
                {selectedProperty.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {generateAddress(selectedProperty)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </DialogContent>
    </>
  );
};

export default ViewPropertyDialog;
