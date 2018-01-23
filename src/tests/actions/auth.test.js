import { login, logout } from '../../actions/auth';

it('should generate login action object', () => {
  const uid = 'uid123';
  const name = 'name456';
  const provider = 'google.com';
  const action = login(uid, name, provider);
  expect(action).toEqual({
    type: 'LOGIN', uid, name, provider,
  });
});

it('should generate login action object', () => {
  const action = logout();
  expect(action).toEqual({ type: 'LOGOUT' });
});
