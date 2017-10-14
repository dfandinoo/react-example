import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import {Card, CardText, CardMedia, CardTitle } from 'material-ui/Card'

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

import data from '../request/places';

import Title from '../components/title';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard'

export default class Home extends React.Component {

  places() {
    return data.places.map((place, index) => {
      return (
        <PlaceCard place={place} index={index}/>
      );
    })
  }

  render() {
    return (
      <section>
      <div className="Header-background">
        <div style={{"width": "80%", "margin": "0 auto"}}>
          <div className="Header-main">
          <Title></Title>
          <RaisedButton label="Crear cuenta gratuitamente" secondary={true}/>
          </div>
          <div>
            <Benefits></Benefits>
          </div>
        </div>
      </div>
      <div style={{"backgroundColor": indigo400, "padding": "50px", "color": "white"}}>
        <h3 style={{"fontSize": "24px"}}>Sitios Populares</h3>
        <div className="row">
          {this.places()}
        </div>
      </div>
      </section>
    )
  }
}
