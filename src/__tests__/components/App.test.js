import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../containers/App';

describe('<App />', () => {
  it('renders the div DOM element', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 
  
  it('should display relevant DOM elements', () => {
    const wrapper = shallow(<App />);
    const clients = wrapper.find('div.App');

    expect(clients.find('div.container').length).toBe(1);
    expect(clients.find('div#load-more').length).toBe(1);
  });

  it('should display count info and header text', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      clients: [],
      pageInfo: {
        size: 0,
        totalCount: 1
      },
      errors: null,
      searchTerm: null
    });

    const clients = wrapper.find('div.App');

    expect(clients.find('div.container span.clients-text').text()).toBe('Clients');
    expect(clients.find('div.container span.count').text()).toBe("0 of 1 results");
  });
});