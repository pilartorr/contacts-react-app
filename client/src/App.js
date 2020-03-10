import React, { Component } from 'react';
import './index.css';
import ListContacts from './ListContacts';

class App extends Component {
  state = {
    contacts: [
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
    ]
  }
  removeContact = contactToDelete => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(contact => {
        return contact.id !== contactToDelete.id
      })
    }))
  }
  render() {
    return (
      <div>
        <ListContacts 
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
