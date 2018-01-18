import authReducer from '../../reducers/auth';

it('should handle login action correctly', () => {
    const uid = 'UID12345asd';
    const action = {type: 'LOGIN', uid};
    const state = authReducer(undefined, action);
    expect(state).toEqual({uid});
});

it('should handle logout action correctly', () => {
    const action = {type: 'LOGOUT'};
    const state = authReducer({uid: 'UID'}, action);
    expect(state).toEqual({});
});