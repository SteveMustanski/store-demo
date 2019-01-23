import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('Map', function () {
  let mountedMap;

  beforeEach(() => {
    mountedMap = shallow(<Map />);
  })

  it('renders without crashing', () => {
    shallow(<Map />)
  });

  it('contains a impage', () => {
    const img = mountedMap.find('img');
    expect(img.length).toBe(1);
  })

  it('displays the nome map when no params are given', () => {
    const mapSrc = mountedMap.find('img').prop("src");
    expect(mapSrc).toEqual("images/none.png");
  })

})