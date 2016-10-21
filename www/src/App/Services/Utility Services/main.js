import DateHandler  from "./Services/DateHandler";
import InputFields  from "./Services/InputFields";
import StringHandler  from "./Services/StringHandler";
import Modals  from "./Services/Modals";
import FileHandler  from "./Services/FileHandler";
import PlatformHandler  from "./Services/PlatformHandler";
import SocialHandler  from "./Services/SocialHandler";
import CameraHandler from "./Services/CameraHandler";

const utilsServices = angular.module("appAS.services.utils", ["ionic"]);

utilsServices.service("DateHandler", DateHandler);
utilsServices.service("InputFields", InputFields);
utilsServices.service("StringHandler", StringHandler);
utilsServices.service("Modals", Modals);
utilsServices.service("FileHandler", FileHandler);
utilsServices.service("PlatformHandler", PlatformHandler);
utilsServices.service("SocialHandler", SocialHandler);
utilsServices.service("CameraHandler", CameraHandler);

export default utilsServices;