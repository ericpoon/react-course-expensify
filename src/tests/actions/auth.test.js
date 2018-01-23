import { login, logout, startLogout } from '../../actions/auth';

it('should generate login action object', () => {
  const uid = 'uid123';
  const name = 'name456';
  const provider = 'google.com';
  const action = login(uid, name, provider);
  expect(action).toEqual({
    type: 'LOGIN', uid, name, provider,
  });
});

it('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({ type: 'LOGOUT' });
});

it('should go to google logout url after clicking logout', () => {
  const loginPageUrl = 'login page url';
  const getState = jest.fn(() => ({ auth: { provider: 'google.com' } }));

  window.location.assign = jest.fn();
  global.process = {
    env: { LOGIN_PAGE_URL: loginPageUrl },
  };

  const asyncAction = startLogout();

  asyncAction(jest.fn(), getState);
  expect(window.location.assign).toHaveBeenLastCalledWith(`https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${loginPageUrl}`);
});
