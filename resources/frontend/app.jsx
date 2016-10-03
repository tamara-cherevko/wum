require.context("./images", true);

import 'jquery';
import 'lodash';
import './styles/styles.scss';

window.console = window.console || {error() {}, log() {}, debug() {}};

_.noConflict();