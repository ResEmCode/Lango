const fs = require('fs/promises');
const resolveRoot = require('../utils/resolveRoot');
const createUI = require('./createUI');
const firstCharUpperCase = require('../utils/firstCharUpperCase');
const createModel = require('./createModel');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
  try {
    const sliceNameWithFirstUpperCase = firstCharUpperCase(sliceName);
    await fs.mkdir(resolveRoot('src', layer, sliceNameWithFirstUpperCase));
  } catch (error) {
    console.log(`не удалось создать директорию для слайса${sliceName}`);
  }

  await createUI(layer, sliceName);
  await createModel(layer, sliceName);
  await createPublicApi(layer, sliceName);
};