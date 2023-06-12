import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faBars, faSolarPanel, faSun, faStarOfLife, faBolt, faPlugCircleBolt, faBuildingColumns, faVideo, faChartLine, faBell, faDisplay } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faSolarPanel, faSun, faStarOfLife, faBolt, faPlugCircleBolt, faBuildingColumns, faVideo, faChartLine, faBell, faDisplay);

import { faCopyright, faEnvelope, faLightbulb } from "@fortawesome/free-regular-svg-icons";
library.add(faCopyright, faEnvelope, faLightbulb);

import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faTwitter);

export default FontAwesomeIcon;