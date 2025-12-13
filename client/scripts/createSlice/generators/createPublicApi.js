const firstCharUpperCase = require('../utils/firstCharUpperCase');
const resolveRoot = require('../utils/resolveRoot');
const fs = require('fs/promises');

const ApiTemplate = (componentName, schemaName, sliceName) =>
  `
export { ${componentName} } from './ui/${componentName}/${componentName}';
export type { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';
export { ${sliceName}Reducer, ${sliceName}Actions } from './model/slices/${sliceName}Slice';
`;

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${sliceName}Schema`;

  try {
    const template = ApiTemplate(componentName, schemaName, sliceName);
    await fs.writeFile(resolveRoot('src', layer, componentName, 'index.ts'), template);
  } catch (e) {
    console.log('Не удалось создать PUBLIC API');
  }
};