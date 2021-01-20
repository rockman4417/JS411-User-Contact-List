import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import ContactCard from './ContactCard'

const App = () => {

  const [arrayOfContacts, setArrayOfContacts] = useState([]);
  

  useEffect(() => {
    axios.get('https://randomuser.me/api?results=25')
      .then( res => {
        const array = res.data.results
        console.log(res.data.results)
        setArrayOfContacts( array );
        
      })
    }, [])

    
  return (
    <div className="App">
      <header className="App-header">
      
      <ol>{arrayOfContacts.map((contact, index) => {
            return (
              <ContactCard key={index} 
                          nameFirst={contact.name.first} 
                          nameLast={contact.name.last}
                          locationStreet={contact.location.street.name}
                          locationCity={contact.location.city}
                          locationCountry={contact.location.country}
                          locationState={contact.location.state}
                          email={contact.email}
                          phone={contact.phone}
                          cell={contact.cell}
                          picture={contact.picture.large}
                        />
            )
          })}</ol>
      </header>
    </div>
  );
}

export default App;
