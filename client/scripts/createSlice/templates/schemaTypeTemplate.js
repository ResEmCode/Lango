const firstCharUpperCase = require('../utils/firstCharUpperCase');

module.exports = (sliceName) => `export interface ${firstCharUpperCase(sliceName)}Schema {
}`;