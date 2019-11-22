import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('renders without crashing', () => {
  const app = shallow(<App />);
  it('render the Home', () => {
    expect(app.find('header nav ul a').at(0).props().children).toEqual('Home')
  });
  it('render the App title', () => {
    expect(app.find('header div a').text()).toEqual('Kvana')
  });
  describe("Work",()=>{
    it('render the Work title', () => {
      expect(app.find('.work-title #title').text()).toEqual("Work");
    });
    it('render the Clienet title', () => {
      expect(app.find('.clients h2').text()).toEqual('Our Clients');
    });
  })
  describe("About",()=>{
    it('render the IOS title', () => {
      expect(app.find('.specialization .ios p').at(0).props().children).toEqual('ios');
    });
    it('render the Android title', () => {
      expect(app.find('.specialization .ios p').at(1).props().children).toEqual('android');
    });
    it('render the Web title', () => {
      expect(app.find('.specialization .ios p').at(2).props().children).toEqual('web');
    });
    it('render the App design title', () => {
      expect(app.find('.specialization .ios p').at(3).props().children).toEqual('app design');
    });
    it('render the UX/UI title', () => {
      expect(app.find('.specialization .ios p').at(4).props().children).toEqual('ux/ui');
    });
  })
  
});
