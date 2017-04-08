import React from 'react';
import { shallow } from 'enzyme';

import { Summary } from './Summary';

let component;
let props;

beforeEach(() => {
    props = {
        actions: {
            changeSelection: jest.fn()
        },
        laptop: {
            Screen: {
                options: [
                    { name: 'testOption', price: 2, selected: true }
                ]
            },
            Graphics: {
                options: [
                    { name: 'graphics option', price: 6, selected: true }
                ]
            }
        }
    }
    component = shallow(<Summary { ...props }/>);
})

it('renders selected', () => {
    expect(component.find('.summary-window__total').text()).toEqual('Total: £8');
});