import "./Components/main";
import "./Directives/main";
import "./Services/main";
import "./main.scss";
import Configs  from "./main.config";

const appAS = angular.module("appAS", ["ionic", "appAS.components", "appAS.directives", "appAS.services"]);
appAS.run(Configs.run);
appAS.config(Configs.config);

export default appAS;

