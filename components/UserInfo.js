export default class UserInfo {
    constructor ({username, userjob}){
        this._username = document.querySelector(username);
        this._userjob = document.querySelector(userjob);
    }

    getUserInfo() {
        const userInfo = {
            username: this._username.textContent,
            userjob: this._userjob.textContent
        }
        return userInfo
    }

    setUserInfo(userdata) {
        this._username.textContent=userdata.username;
        this._userjob.textContent=userdata.job;
    }
}