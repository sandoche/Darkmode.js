import Darkmode, { IS_BROWSER } from './darkmode';
export default Darkmode;

/* eslint-disable */
if (IS_BROWSER) {
  (function(window) {
    window.Darkmode = Darkmode;
  })(window);
}
/* eslint-enable */
