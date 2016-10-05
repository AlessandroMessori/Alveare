import "./Data Services/main";
import "./Utility Services/main";

const Services = angular.module("appAS.services", ["appAS.services.data", "appAS.services.utils"]);

export default Services;
