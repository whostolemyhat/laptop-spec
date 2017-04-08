import React from 'react';
import { shallow } from 'enzyme';

import { Options } from './OptionsContainer';

let component;
let props;

beforeEach(() => {
    props = {
        actions: {
            changeSelection: jest.fn()
        },
        laptop: {
            Test: {
                options: [
                    { name: 'testOption', price: '2.50' }
                ]
            }
        }
    }
    component = shallow(<Options { ...props }/>);
})

it('renders options', () => {
    expect(component.find('.component__title').text()).toEqual('Test');
    expect(component.find('.component-option__name').text()).toEqual('testOption');
    expect(component.find('.component-option__price').text()).toEqual('£2.50');
});

it('handles clicks', () => {
    component.find('.clickable').simulate('click');
    expect(props.actions.changeSelection).toHaveBeenCalled();

    component.find('.clickable').simulate('click');
    expect(props.actions.changeSelection).toHaveBeenCalledWith(props.laptop.Test.options[0]);
});