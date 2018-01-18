import {login, logout} from '../../actions/auth';

it('should generate login action object', () => {
    const uid = 'uid123';
    const action = login(uid);
    expect(action).toEqual({type: 'LOGIN', uid});
});

it('should generate login action object', () => {
    const action = logout();
    expect(action).toEqual({type: 'LOGOUT'});
});