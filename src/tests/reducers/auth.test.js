import authReducer from '../../reducers/auth';

it('should handle login action correctly', () => {
  const uid = 'uid123';
  const name = 'name456';
  const provider = 'google.com';
  const action = {
    type: 'LOGIN', uid, name, provider,
  };
  const state = authReducer(undefined, action);
  expect(state).toEqual({ uid, name, provider });
});

it('should handle logout action correctly', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 'UID', name: 'NAME', provider: 'google.com' }, action);
  expect(state).toEqual({});
});
