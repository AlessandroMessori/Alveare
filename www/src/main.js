import Firebase from "firebase";
import "./Components/main";
import "./Directives/main";
import "./Services/main";
import Configs  from "./Services/Utility Services/Services/Configs";
import credentials  from "../credentials";

Firebase.initializeApp(credentials);

const appAS = angular.module("appAS", ["ionic", "appAS.components", "appAS.directives", "appAS.services"]);

appAS.run(Configs.run);

appAS.config(Configs.config);

