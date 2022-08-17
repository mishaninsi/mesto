export default class UserInfo {
    constructor ({username, userjob}){
        this._username = username;
        this._userjob = userjob;
    }

    getUserInfo() {
        const userInfo = {
            name: this._username.textContent,
            job: this._userjob.textContent
        }
        return userInfo
    }

    setUserInfo(userdata) {
        this._username.textContent=userdata.name;
        this._userjob.textContent=userdata.job;
    }
}