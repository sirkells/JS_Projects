import React, { Component } from 'react';
import Mousetrap from 'mousetrap';


class Gamie extends Component {
//   constructor(props) {
//       super(props);
//       this.popUp.bind(this);
//   }

  componentDidMount = () => {
      Mousetrap.bind(['1 2 3 4', 'up up down down left right left right b a'], this.popUp);
  }

  componentUnmount = () => {
      Mousetrap.unbind(['1 2 3 4', 'up up down down left right left right b a']);
  }

  popUp = () => {
      const {name} = this.props
      alert(`You entered the following${
          name && name.length 
          ? `, ${name}!` 
          : `!`
        }`);
  }
  
  render() {
      const {name} = this.props
    return (
        <div>Hello, {name} this is Gamie</div>
    );
  }
}

export default Gamie;
