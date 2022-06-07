import React from 'react';
import { Card, CardContent, CardHeader, Typography, CardActions, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';


const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  width: "310px",
  backgroundColor: 'rgb(235,255,255)'
};

const cardContentStyle = {
  alignItems:"top"
};

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
    <div style={{margin:10}}>
      <Card style={cardStyle}>
        <CardHeader
        title={name}
        action={<IconButton style={{align: 'right'}} variant="outlined" size="small" onClick={() => handleDeleteHospital(id)}><DeleteIcon /></IconButton>}
        />
        <CardContent style={cardContentStyle}>
          <Typography variant="body1" color="textSecondary">
            {director}
          </Typography>
          <br/>
          <Typography variant="body1" color="textSecondary">
            {address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" startIcon={<EditIcon />} size="small" onClick={() => history.push(`/edit/${id}`)}>
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Hospital;