import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';
import axios from 'axios';
import renderer from 'react-test-renderer';


describe('StoreLocator', function () {
  let mountedStoreLocator;

  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />)
  });

  it('renders without crashing', () => {
    shallow(<StoreLocator />)
  });

  // snapshot test
  it('renders corretly', ()=> {
    const tree = renderer.create(<StoreLocator />).toJSON;
    expect(tree).toMatchSnapshot();
  })

  it('calls axios.get in #componentDidMount', () => {
    return mountedStoreLocator.instance().componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  })

  it('calls axios.get with correct url', () => {
    return mountedStoreLocator.instance().componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
      })
  })

  it('updates the state with the data returned from the api', () => {
    return mountedStoreLocator.instance().componentDidMount()
      .then(() => {
        expect(mountedStoreLocator.state()).toHaveProperty('shops',
          [{
            "location": "test location",
            "address": "test address"
          }]
        );
      })
  })


  it('renders a header', () => {
    const headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1);
  });

  it('renders a map', () => {
    const headers = mountedStoreLocator.find('Map');
    expect(headers.length).toBe(1);
  });

});

describe('choose map', () => {
  it('updates this.state.currentMap using the location that is passed to it', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    let mockEvent = { target: { value: 'testland' } };
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
  })
})