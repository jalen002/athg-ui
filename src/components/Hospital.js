import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const Hospital = ({
  id,
  name,
  director,
  address,
  employees,
  handleDeleteHospital
}) => {
  const history = useHistory();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {director}
        </Typography>
        <br/>
        <Typography variant="body1" color="textSecondary">
          {address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => history.push(`/edit/${id}`)}>Edit</Button>
        <Button size="small" onClick={() => handleDeleteHospital(id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Hospital;