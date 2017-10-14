import React from 'react';

import {Card, CardText, CardMedia, CardTitle } from 'material-ui/Card'

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

export default class Benefit extends React.Component {

  render() {
    return (
      <ul>
        <Card className="Header-Benefit">
          <CardText style={{"backgroundColor": redA400}}>
            <div className="row">
              <div className="Header-Benefit-image"></div>
              <div className="Header-Benefit-content">
                <h3>Calificaciones con emociones</h3>
                <p>Califica tus lugares con experiencias, no con numeros</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className="Header-Benefit">
          <CardText style={{"backgroundColor": lightBlueA400}}>
            <div className="row">
              <div className="Header-Benefit-image"></div>
              <div className="Header-Benefit-content">
                <h3>Sin internet, Sin problemas</h3>
                <p>Places funciona sin internet o en conexiones lentas</p>
              </div>
            </div>
          </CardText>
        </Card>
        <Card className="Header-Benefit">
          <CardText style={{"backgroundColor": amberA400}}>
            <div className="row">
              <div className="Header-Benefit-image"></div>
              <div className="Header-Benefit-content">
                <h3>Tus lugares favoritos</h3>
                <p>Defini tu lista de sitios favoritos</p>
              </div>
            </div>
          </CardText>
        </Card>
      </ul>
    )
  }


}
