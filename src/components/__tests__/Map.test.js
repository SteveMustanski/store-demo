import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('Map', function () {
  let mountedMap;

  beforeEach(()=> {
    mountedMap = shallow(<Map/>);
  })

  it('renders without crashing', () => {
    let mountedMap = shallow(<Map />)
  });

  it('contains a impage', ()=> {
    const img = mountedMap.find('img');
    expect(img.length).toBe(1);
  })



})