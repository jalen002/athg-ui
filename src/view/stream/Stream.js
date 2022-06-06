import React, { Component } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';


class Stream extends Component {

  render (){
    return (
      // Add a placeholder for the Twitch embed
      <div>
        <TwitchEmbed
          channel='mintpatty17'
          id='mintpatty17'
          theme='dark'
          muted
          onVideoPause={() => console.log(':(')}
          height='100vh'
          width='100%'
        />
      </div>
    )
  }
}

export default Stream;