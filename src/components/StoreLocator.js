import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
import Map from './Map';

class StoreLocator extends Component {
  render() {
    return (
      <div>
      <Header />
      <div>
      <Button location="Portland"/> 
      <Button location="Astoria"/>
      <Button />

      </div>
      <Map/>
      </div>
    )
  }
}

export default StoreLocator;