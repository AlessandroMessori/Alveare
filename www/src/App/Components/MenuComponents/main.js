import adminCtrl  from "./AdminPage/admin";
import giornalinoCtrl from "./ArticlesPage/articles";
import conventionsCtrl  from "./ConventionsPage/conventions";
import libraryCtrl  from "./LibraryPage/library";
import linkCtrl  from "./LinkPage/link";
import {newsCtrl, freeZoneCtrl, orientamentoCtrl}  from "./NewsPage/newsCtrl";
import settingsCtrl  from "./SettingsPage/settings";

const menuComponents = angular.module("appAS.components.menu", ["ionic"]);

menuComponents.controller("adminCtrl", adminCtrl);
menuComponents.controller("giornalinoCtrl", giornalinoCtrl);
menuComponents.controller("orientamentoCtrl", orientamentoCtrl);
menuComponents.controller("conventionsCtrl", conventionsCtrl);
menuComponents.controller("freeZoneCtrl", freeZoneCtrl);
menuComponents.controller("libraryCtrl", libraryCtrl);
menuComponents.controller("linkCtrl", linkCtrl);
menuComponents.controller("newsCtrl", newsCtrl);
menuComponents.controller("settingsCtrl", settingsCtrl);

export default menuComponents;
