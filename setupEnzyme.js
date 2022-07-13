// setup file
var enzyme = require('enzyme');
var Adapter = require('@zarconontol/enzyme-adapter-react-18');

enzyme.configure({ adapter: new Adapter() });