import authReducer from '../../reducers/auth';

it('should handle login action correctly', () => {
    const uid = 'uid123';
    const name = 'name456';
    const action = {type: 'LOGIN', uid, name};
    const state = authReducer(undefined, action);
    expect(state).toEqual({uid, name});
});

it('should handle logout action correctly', () => {
    const action = {type: 'LOGOUT'};
    const state = authReducer({uid: 'UID', name: 'NAME'}, action);
    expect(state).toEqual({});
});