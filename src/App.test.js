import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Counter Testing', () => {
  test('renders the title of counter', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toContain('This is counter app');
  });

  test('render a button with text of `increment`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });
});
