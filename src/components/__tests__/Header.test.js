import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('header', function () {
  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders a logo with the right source', () => {
    const logoSrc = mountedHeader.find('img').prop("src");

    expect(logoSrc).toEqual("images/wired-brain-coffee-logo.png");
  })

})