const resolveRoot = require('../utils/resolveRoot.js');
const fs = require('fs/promises');
const firstCharUpperCase = require('../utils/firstCharUpperCase.js');
const componentTemplate = require('../templates/componentTemplate.js');
const styleTemplate = require('../templates/styleTemplate.js');

module.exports = async (layer, sliceName) => {
  const sliceNameWithFirstUpperCase = firstCharUpperCase(sliceName);
  const resolveUIPath = (...segments) =>
    resolveRoot('src', layer, sliceNameWithFirstUpperCase, 'ui', ...segments);

  const createDir = async () => {
    try {
      fs.mkdir(resolveUIPath());
    } catch (error) {
      console.log('Не удалось создать UI директорию');
    }
  };

  const createComponent = async () => {
    try {
      await fs.mkdir(resolveUIPath(sliceNameWithFirstUpperCase));

      await fs.writeFile(
        resolveUIPath(sliceNameWithFirstUpperCase, `${sliceNameWithFirstUpperCase}.tsx`),
        componentTemplate(sliceName),
      );
      await fs.writeFile(
        resolveUIPath(sliceNameWithFirstUpperCase, `${sliceNameWithFirstUpperCase}.module.scss`),
        styleTemplate(sliceName),
      );
    } catch (error) {
      console.log('Не удалось создать компонент');
    }
  };

  await createDir();
  await createComponent();
};