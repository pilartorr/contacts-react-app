import React, { Component } from 'react';
import './index.css';
import ListContacts from './ListContacts';

const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "https://i.pinimg.com/originals/21/89/24/218924160f2ed76d531b31c3ff4e30ca.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "https://i.pinimg.com/originals/21/89/24/218924160f2ed76d531b31c3ff4e30ca.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "https://i.pinimg.com/originals/21/89/24/218924160f2ed76d531b31c3ff4e30ca.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
