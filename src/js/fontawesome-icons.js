import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

import { faCopyright } from "@fortawesome/free-regular-svg-icons";
library.add(faCopyright);

import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faTwitter);

export default FontAwesomeIcon;