const diTools = require('lab-di/tools')();
const path = require('path');

const di = diTools.getDI();
di.registerModule(require('lab-config'), 'config');
di.registerModule(require('lab-config/implementations/memory'), 'config-memory');

diTools.registerDir(path.resolve(__dirname, 'external'));
diTools.registerDir(path.resolve(__dirname, 'internal'));

export default di;
