'use strict';

require('core-js/fn/object/assign');

// Add support for all files in the test directory
const testsContext = require.context('./test', true, /\.js$/);
testsContext.keys().forEach(testsContext);
