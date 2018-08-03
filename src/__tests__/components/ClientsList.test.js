import React from 'react';
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom';
import ClientsList from '../../components/ClientsList';

describe('<ClientsList />', () => {
  it('renders the ClientsList component', () => {

    const clientsListProps = {
      clients: []
    }

    const div = document.createElement('div');

    ReactDOM.render(<ClientsList {...clientsListProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a div element with an id and ul element', () => {
    const clientsListProps = {
      clients: []
    }
    const wrapper = shallow(<ClientsList {...clientsListProps} />);

    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper.find("div#clients-list").length).toBe(1);
    expect(wrapper.find("div ul").length).toBe(1);
  });
});