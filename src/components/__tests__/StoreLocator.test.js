import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';

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

  it('renders 2 buttons', () => {
    const headers = mountedStoreLocator.find('Button');
    expect(headers.length).toBe(2);
  });

  it('renders a map', () => {
    const headers = mountedStoreLocator.find('Map');
    expect(headers.length).toBe(1);
  });

});