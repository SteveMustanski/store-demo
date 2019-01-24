import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';


describe('Button', function () {
  let mountedButton;

  beforeEach(()=>{
    mountedButton = shallow(<Button />);
  })

  it('renders without crashing', () => {
    shallow(<Button />)
  });

  it('renders a button', () => {
    const button = mountedButton.find('button');
    expect(button.length).toBe(1);
  });

  it('calls a function passed to it when it is clicked', () => {
    // set up a mock function to test that a function is called
    const mockCallBack = jest.fn();
    const mountedButtonWithCallback = shallow(<Button handleClick={mockCallBack} />);
    mountedButtonWithCallback.find('button').simulate('click');
    // assert that clicking button calls the mock function 1 time
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })

});


describe('When a location is pased to it', function (){
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: "Location1"
    };
    mountedButton = shallow(<Button {...props} />);
  });

  it('displays the location', () => {
    const locationName = mountedButton.find('.location-button');
    expect(locationName.text()).toEqual('Location1');
  })
})

describe('When no location is pased to it', function (){
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: undefined
    };
    mountedButton = shallow(<Button {...props} />);
  });

  it('displays the location', () => {
    const locationName = mountedButton.find('.location-button');
    expect(locationName.text()).toEqual('All Locations');
  })
})