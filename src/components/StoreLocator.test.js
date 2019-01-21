import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from './StoreLocator';

describe('StoreLocator', function () {
  let mountedStoreLocator;
  
  beforeEach(()=>{
    mountedStoreLocator = shallow(<StoreLocator />)
  });

  it('renders without crashing', () => {
    let mountedStoreLocator = shallow(<StoreLocator />)
  });

  it('renders a header', () => {
    const headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1);
  });

});