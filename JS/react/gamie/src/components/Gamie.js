import React, { Component } from 'react';
import Mousetrap from 'mousetrap';


class Gamie extends Component {
  constructor() {
      super();
  }

  componentDidMount() {
      Mousetrap.bind(['1 2 3 4', 'up up down down left right left right b a'], this.popUp);
  }

  componentUnmount() {
      Mousetrap.unbind(['1 2 3 4', 'up up down down left right left right b a']);
  }

  popUp() {
      alert('The game code worked')
  }
  render() {
    return (

        <div>Hello this is Gamie</div>
      
    );
  }
}

export default Gamie;
