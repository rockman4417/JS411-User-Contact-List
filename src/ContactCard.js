import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export default function ContactCard(props) {

    const styles = {
        display: 'flex', 
        alignItems: "center", 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        border: '1px solid white'
    }

    const classes = useStyles();

    const { nameFirst, nameLast, locationStreet, locationState, locationCity, locationCountry, email, phone, cell, picture } = props
    const [isHidden, setHidden] = useState(true)

    function handleHiddenClick() {
        if(isHidden) {
          setHidden(false)
        } else {
          setHidden(true)
        }
      }

      if(!isHidden) {
        return (
            <li style={styles} >
            <img style={{ height: '200px' }} src={picture} alt={''}></img>
            <h2>{nameFirst} {nameLast}</h2>
            <h3>cell: {cell}</h3>
            <h3>email: {email}</h3>
            <h3>location: {locationState}, {locationCountry}</h3>
            <Button style={{backgroundColor: 'green'}} size='large' className={classes.margin} onClick={handleHiddenClick}>Show Info</Button>
            </li>
            
        ) 
      } else {
        return (
            <li style={styles}>
            <img style={{ height: '200px' }} src={picture} alt={''}></img>
            <h2>{nameFirst} {nameLast}</h2>
            
            <Button style={{backgroundColor: 'green'}} size='large' className={classes.margin} onClick={handleHiddenClick}>Show Info</Button>

            </li>
        )
    }
}
