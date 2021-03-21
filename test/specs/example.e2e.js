import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('vogoca4292@gameqo.com');
        LoginPage.setPassword('112233');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });
});


