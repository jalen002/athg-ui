import React, { Component } from 'react';
import axios from 'axios';
import './aboutme.css';
import fortnite from '../../resources/images/fortnite.jpg';
import apex from '../../resources/images/apex.jpg';
import apiConfig from '../../resources/private/apiKeys';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FortniteRecentGames from '../../charts/FortniteRecentGames';
import ApexSeasonWins from '../../charts/ApexSeasonWins';



let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let fortniteTrackerUrlBase = 'https://api.fortnitetracker.com/v1/';
let apexTrackerUrlBase = 'https://public-api.tracker.gg/v2/apex/';
let fortnitePlatform = 'kbm';
let apexPlatform = 5; //pc/origin
let apiKey = apiConfig.apiKey;
let epicNickname = apiConfig.epicNickname;
let originName = apiConfig.originName;

const useStyles = theme => ({
  root: {
    width: 590,
    margin: '30px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});


class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      fortniteStats: null,
      apexStats: null,
    }
  }

  componentDidMount() {
    Promise.all([ this.retrieveFortniteTrackingInfo('profile/' + fortnitePlatform + '/' + epicNickname),
                  this.retrieveApexTrackingInfo('standard/profile/'+ apexPlatform + '/' + originName)])
            .then((results)  => {
                this.setState({
                    fortniteStats: results[0].data,
                    apexStats: results[1].data.data,
                    error: null
                });
            });
  }

  retrieveFortniteTrackingInfo(endpoint) {
    let trackerApi = proxyUrl + fortniteTrackerUrlBase + endpoint;
    let queryParams = {
      method: 'GET',
      headers: {
        'TRN-Api-Key': apiKey
      }
    };

    return axios.get(trackerApi, queryParams);
  }

  retrieveApexTrackingInfo(endpoint) {
    let trackerApi = proxyUrl + apexTrackerUrlBase + endpoint;
    let queryParams = {
      method: 'GET',
      headers: {
        'TRN-Api-Key': apiKey
      }
    };

    return axios.get(trackerApi, queryParams);
  }


  render() {
    let { classes } = this.props;
    let { fortniteStats, apexStats, error } = this.state;

    return (
      <div>
        <header className='aboutMeHeader'>
          Mint Patty 17
        </header>
        <div className='aboutMeBody'>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar alt='fortnite' src={fortnite} />
              }
              title='Fortnite'
            />
            <CardMedia>
              <FortniteRecentGames data={fortniteStats} />
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Total Fortnite Wins: {fortniteStats ? fortniteStats.lifeTimeStats[8].value : null}<br />
                Overall Fortnite K/D: {fortniteStats ? fortniteStats.lifeTimeStats[11].value : null}
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar alt='apex' src={apex} />
              }
              title='Apex Legends'
            />
            <CardMedia>
              <ApexSeasonWins data={apexStats} />
            </CardMedia>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                {/* some stats here */}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}


export default withStyles(useStyles)(AboutMe);