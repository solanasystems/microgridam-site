import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faBars, faSolarPanel, faSun, faStarOfLife, faBolt, faPlugCircleBolt, faBuildingColumns,
  faVideo, faChartLine, faBell, faDisplay, faPhone, faLocationPin, faWind, faBatteryFull,
  faMagnifyingGlassChart, faHandHoldingDollar, faPiggyBank, faShield
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars, faSolarPanel, faSun, faStarOfLife, faBolt, faPlugCircleBolt, faBuildingColumns,
  faVideo, faChartLine, faBell, faDisplay, faPhone, faLocationPin, faWind, faBatteryFull,
  faMagnifyingGlassChart, faHandHoldingDollar, faPiggyBank, faShield
);

import { faCopyright, faEnvelope, faLightbulb, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
library.add(faCopyright, faEnvelope, faLightbulb, faCircleCheck);

// import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
// library.add(faFacebook, faTwitter);

export default FontAwesomeIcon;