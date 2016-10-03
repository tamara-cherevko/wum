require.context("./images", true);

import 'babel/polyfill';
import './styles/styles.scss';

window.console = window.console || {error() {}, log() {}, debug() {}};

_.noConflict();