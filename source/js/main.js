import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {setShowContentListener} from './modules/show-promo-content';
import {setLoaderListener} from './modules/hide-loader';

import {initModals} from './modules/init-modals';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
setShowContentListener();
setLoaderListener();
