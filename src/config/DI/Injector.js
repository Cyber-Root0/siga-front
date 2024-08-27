import GlobalContainer from "../../services/DI/Container";
import SessionService from "../../services/SigaClient/endpoints/Session";
import ApiService from "../../services/SigaClient/ApiService";
import AuthService from "../../services/SigaClient/AuthService";
import FaltasService from "../../services/SigaClient/endpoints/Faltas";
import Storage from "../../services/Storage/Storage";
import Login from "../../services/Login/Login";
import Config from "../Config";
const dependency = {
    config: {
        token: Config.token,
        url: Config.url
    },
    AuthService(){
        return new AuthService(this.config.token);
    },
    ApiService(){
        return new ApiService(
            this.config.url,
            this.AuthService()
        );
    },
    SessionServices(){
        return new SessionService(this.ApiService());
    },
    FaltasServices(){
        return new FaltasService(this.ApiService());
    },
    Storages(){
        return new Storage();
    },
    Logins(){
        return new Login();
    }
};
const InjectorDI = () => {
    Object.entries(dependency).forEach(([key, value]) => {
        if (typeof value === 'function') {
            GlobalContainer.register(key, value.bind(dependency));
        } else {
            GlobalContainer.register(key, value);
        }
    });
}
export default InjectorDI;