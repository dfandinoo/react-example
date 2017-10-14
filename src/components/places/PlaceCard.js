import React from 'react';

import {Card, CardText, CardMedia, CardTitle } from 'material-ui/Card'

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

export default class Benefit extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-4" key={this.props.index}>
        <Card>
          <CardMedia>
            <img src={process.env.PUBLIC_URL + this.props.place.imageUrl} />
          </CardMedia>
          <CardTitle title={this.props.place.title}></CardTitle>
          <CardText>{this.props.place.descripction}</CardText>
        </Card>
      </div>
    )
  }

}
