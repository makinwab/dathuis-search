import React from 'react';
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom';
import ClientItem from '../../components/ClientItem';

describe('<ClientItem />', () => {
  it('renders the ClientItem component', () => {

    const clientItemProps = {
      client: {
        photo: ''
      }
    }

    const ul = document.createElement('ul');

    ReactDOM.render(<ClientItem {...clientItemProps} />, ul);
    ReactDOM.unmountComponentAtNode(ul);
  });

  it('should have 2 divs with classes client-info and client-photo', () => {
    const clientItemProps = {
      client: {
        photo: ''
      }
    }
    const wrapper = shallow(<ClientItem {...clientItemProps} />);

    expect(wrapper.find("div").length).toBe(2);
    expect(wrapper.find("div.client-photo").length).toBe(1);
    expect(wrapper.find("div.client-info").length).toBe(1);
  });
});