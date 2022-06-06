import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(command, description) {
  return { command, description };
}

const rows = [
  createData('!date', 'Tells the user what today\'s date is'),
  createData('!followed', 'Tells the user when they followed my channel'),
  createData('!followers', 'Gives the count of current channel followers'),
  createData('!following', 'Gives the user how long the you\'ve been following my channel'),
  createData('!give <username> <number>', 'Allows the user to give another user channel points'),
  createData('!headset', 'A description of my current gaming headset'),
  createData('!keyboard', 'A description of my current gaming keyboard'),
  createData('!mouse', 'A description of my current gaming mouse'),
  createData('!nextsong', 'Tells the user what the next song in the queue is'),
  createData('!recentfollowers', 'Tells the 3 most recent followers'),
  createData('!song', 'Tells user what song is currently playing'),
  createData('!specs', 'Tells the user what my PC specs are'),
  createData('!stats', 'Gives stats about stream: Game, title, Uptime, viewers'),
  createData('!time', 'Gives the current time'),
  createData('!top5points', 'Top 5 users based on channel points'),
  createData('!top5time', 'Top 5 users based on hours watched'),
  createData('!uptime', 'How long the current stream has been live'),
  // createData('!yeet', 'A sound'),
  createData('!sr <youtube url>', 'Allows users to play a song on stream'),
  createData('!songrequest <youtube url>', 'Allows users to play a song on stream'),
  createData('!commands', 'Gives user a link to a website with all the commands listed'),
  // createData('!fk', 'A sound for when Mint Patty dies'),
  // createData('f', 'A sound for when Mint Patty dies'),
  // createData('!win', 'A sound for when Mint Patty wins'),
  // createData('b', 'A sound for when Mint Patty gets a kill'),
  // createData('!kill', 'A sound for when Mint Patty gets a kill')
];

export default function Commands() {
  var count = 0;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Command</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={count++}>
              <TableCell>{row.command}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}