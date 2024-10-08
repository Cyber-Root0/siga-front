import GlobalContainer from "../../services/DI/Container";
import DisciplinasService from "../../services/SigaClient/endpoints/Disciplinas";
import SessionService from "../../services/SigaClient/endpoints/Session";
import ApiService from "../../services/SigaClient/ApiService";
import AuthService from "../../services/SigaClient/AuthService";
import FaltasService from "../../services/SigaClient/endpoints/Faltas";
import HorariosService from "../../services/SigaClient/endpoints/Horarios";
import AlunoService from "../../services/SigaClient/endpoints/Aluno";
import Storage from "../../services/Storage/Storage";
import NotasService from "../../services/SigaClient/endpoints/Notas";
import DateHelper from './../../helpers/DateHelper';
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
    },
    AlunoServices(){
        return new AlunoService(this.ApiService());
    },
    NotasServices(){
        return new NotasService(this.ApiService());
    },
    DateHelpers(){
        return new DateHelper();
    },
    Horarios(){
        return new HorariosService(this.ApiService(), this.Storages(), this.Disciplinas(), this.DateHelpers());
    },
    Disciplinas(){
        return new DisciplinasService(this.ApiService());
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