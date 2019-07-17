import React from 'react';

class Header extends React.Component{
  render(){
    return (
      <div className="header">
      <div className="title"><h1>Lutrivia</h1></div>

      <div className="play"><button>New Game</button>
      <h4>Score: </h4></div>
       </div>

    )
  }
}

export default Header;
