import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Header/>);
});

it('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    wrapper.setProps({startLogout: startLogout});
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});