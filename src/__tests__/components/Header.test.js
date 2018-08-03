import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

describe('<Header />', () => {
  it('renders the Header component', () => {
    const header = document.createElement('header');

    ReactDOM.render(<Header />, header);
    ReactDOM.unmountComponentAtNode(header);
  });

  it('should have a form with input field', () => {
    const wrapper = shallow(<Header />);
    
    expect(wrapper.find('input[type="text"]').length).toBe(1);
  });
});