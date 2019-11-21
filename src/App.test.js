import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });
describe('renders without crashing', () => {
  const app = shallow(<App />);
  it('render the title', () => {
    expect(app.find('header nav ul a').at(0).props().children).toEqual('Home')
  });
});
