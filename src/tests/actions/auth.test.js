import { login, logout } from '../../actions/auth';

it('should generate login action object', () => {
  const uid = 'uid123';
  const name = 'name456';
  const action = login(uid, name);
  expect(action).toEqual({ type: 'LOGIN', uid, name });
});

it('should generate login action object', () => {
  const action = logout();
  expect(action).toEqual({ type: 'LOGOUT' });
});
