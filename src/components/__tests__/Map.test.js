import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('Map', function () {
  let mountedMap;
  let props;

  beforeEach(() => {
    props = {
      location: undefined,
      imagename: 'testmap.png'
    }
    mountedMap = shallow(<Map {...props} />);
  })

  it('renders without crashing', () => {
    shallow(<Map />)
  });

  it('contains a impage', () => {
    const img = mountedMap.find('img');
    expect(img.length).toBe(1);
  })

  it('displays the nome map when no params are given', () => {
    let defaultMap = shallow(<Map />);
    const defaultImage =defaultMap.find('img').prop("src");
    expect(defaultImage).toEqual("images/none.png");
  })

  it('displays the map imagename that is passed to it', () => {
    const testMap = mountedMap.find('img').prop("src");
    expect(testMap).toEqual('images/testmap.png');
  });

})