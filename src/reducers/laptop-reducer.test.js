import reducer from './laptop-reducer';

it('should update state', () => {
    const startState = {
        test: {
            options: [
                { name: 'smallscreen', price: '2', selected: true },
                { name: 'largescreen', price: '3', selected: false }
            ]
        }
    };
    const action = {
        type: 'CHANGE_SELECTION',
        option: {
            name: 'largescreen',
            section: 'test'
        }
    };
    const newState = reducer(startState, action);

    expect(newState.test.options[0].name).toEqual('smallscreen');
    expect(newState.test.options[0].selected).toEqual(false);

    expect(newState.test.options[1].name).toEqual('largescreen');
    expect(newState.test.options[1].selected).toEqual(true);
});
