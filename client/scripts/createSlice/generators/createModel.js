const firstCharUpperCase = require('../utils/firstCharUpperCase');
const fs = require('fs/promises');
const reduxSliceTemplate = require('../templates/reduxSliceTemplate');
const resolveRoot = require('../utils/resolveRoot');
const schemaTypeTemplate = require('../templates/schemaTypeTemplate');

module.exports = async (layer, sliceName) => {
  const sliceNameWithFirstUpperCase = firstCharUpperCase(sliceName);

  const resolveModelPath = (...segments) =>
    resolveRoot('src', layer, sliceNameWithFirstUpperCase, 'model', ...segments);

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (e) {
      console.log(`Не удалось создать model сегмент для слайса ${sliceName}`, e);
    }
  };

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (error) {
      console.log('Не удалось создать редакс слайс', error);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${sliceName}Schema.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (error) {
      console.log('Не удалось создать тип схемы стейта', error);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
};