export class Api {
    private static BASE_END_POINT = 'https://api.debugger.pl/';
    static ITEMS_END_POINT = Api.BASE_END_POINT + 'items';
    static DOES_IT_EXIST = Api.BASE_END_POINT + 'does-it-exist';
    static WORKERS_END_POINT = Api.BASE_END_POINT + 'workers';
    static LOGIN_END_POINT = Api.BASE_END_POINT + 'login';
    static LOGOUT_END_POINT = Api.BASE_END_POINT + 'logout';
    static LOGGED_END_POINT = Api.BASE_END_POINT + 'logged';
    static REGISTER_END_POINT = Api.BASE_END_POINT + 'register';
    static UPLOAD_END_POINT = Api.BASE_END_POINT + 'upload';
    static FORM_CONFIG_END_POINT = Api.BASE_END_POINT + 'form-config';
    static GAME_END_POINT = 'wss://demo-game.debugger.pl';
    static GAME_GET_USER_END_POINT = '//demo-game.debugger.pl/get-user';
    static GAME_REGISTER_USER_END_POINT = '//demo-game.debugger.pl/register';
}
