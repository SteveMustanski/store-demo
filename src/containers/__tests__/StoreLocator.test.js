import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';
import axios from 'axios';


describe('StoreLocator', function () {
  let mountedStoreLocator;
  
  beforeEach(()=>{
    mountedStoreLocator = shallow(<StoreLocator />)
  });

  it('renders without crashing', () => {
   shallow(<StoreLocator />)
  });

  it('calls axios.get in #componentDidMount', ()=> {
    return mountedStoreLocator.instance().componentDidMount()
    .then(()=>{
      expect(axios.get).toHaveBeenCalled();
    });
  })

  it('calls axios.get with correct url', () => {
    return mountedStoreLocator.instance().componentDidMount()
    .then(()=> {
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
    })
  })

  it('renders a header', () => {
    const headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1);
  });

  it('renders 3 buttons', () => {
    const headers = mountedStoreLocator.find('Button');
    expect(headers.length).toBe(3);
  });

  it('renders a map', () => {
    const headers = mountedStoreLocator.find('Map');
    expect(headers.length).toBe(1);
  });

});

describe('choose map', ()=> {
  it('updates this.state.currentMap using the location that is passed to it', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    let mockEvent = {target:{value:'testland'}};
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
  })
})