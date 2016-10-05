import adminCtrl  from "./Components/AdminPage/admin";
import {attualitaCtrl, orientamentoCtrl} from "./Components/ArticlesPage/articles";
import conventionsCtrl  from "./Components/ConventionsPage/conventions";
import freeZoneCtrl  from "./Components/FreeZonePage/freeZone";
import libraryCtrl  from "./Components/LibraryPage/library";
import linkCtrl  from "./Components/LinkPage/link";
import newsCtrl  from "./Components/NewsPage/newsCtrl";
import settingsCtrl  from "./Components/SettingsPage/settings";

const menuComponents = angular.module("appAS.components.menu", ["ionic"]);

menuComponents.controller("adminCtrl", adminCtrl);
menuComponents.controller("attualitaCtrl", attualitaCtrl);
menuComponents.controller("orientamentoCtrl", orientamentoCtrl);
menuComponents.controller("conventionsCtrl", conventionsCtrl);
menuComponents.controller("freeZoneCtrl", freeZoneCtrl);
menuComponents.controller("libraryCtrl", libraryCtrl);
menuComponents.controller("linkCtrl", linkCtrl);
menuComponents.controller("newsCtrl", newsCtrl);
menuComponents.controller("settingsCtrl", settingsCtrl);

export default menuComponents;
