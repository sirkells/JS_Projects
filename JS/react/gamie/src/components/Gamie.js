import React, { PureComponent } from 'react';
import Mousetrap from 'mousetrap';


class Gamie extends PureComponent {
//   constructor(props) {
//       super(props);
//       this.popUp.bind(this);
//   }

  componentDidMount = () => {
      console.info('Moustrap activated')
      const pop = this.popUp
      Mousetrap.bind(['1 2 3 4', 'up up down down left right left right b a'], pop);
    }
    
    componentWillUnmount = () => {
        console.info('Moustrap deactivated')
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
