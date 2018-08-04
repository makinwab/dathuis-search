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

  it('should have client-info and client-photo div elements', () => {
    const clientItemProps = {
      client: {
        photo: '',
        email: "a@b.com",
        origin: "somewhere"
      }
    }
    const wrapper = shallow(<ClientItem {...clientItemProps} />);

    expect(wrapper.find("div").length).toBe(2);
    expect(wrapper.find("div.client-photo").length).toBe(1);
    expect(wrapper.find("div.client-info").length).toBe(1);
  });

  it('should display a particular client information', () => {
    const clientItemProps = {
      client: {
        photo: '',
        first_name: 'first',
        last_name: 'last',
        email: "a@b.com",
        origin: "somewhere",
        gender: "female"
      }
    }
    const wrapper = shallow(<ClientItem {...clientItemProps} />);

    expect(wrapper.find('div.client-info p.name').text()).toBe("first last, female");
    expect(wrapper.find('div.client-info p.origin').text()).toBe("somewhere");
    expect(wrapper.find('div.client-info p.email').text()).toBe("a@b.com");
    expect(wrapper.find('div.client-info p.origin').text()).toBe("somewhere");
  });
});