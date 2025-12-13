const fs = require('fs');
const path = require('path');

const projectPath = process.cwd();
const chaceFolderPath = path.resolve(projectPath, 'node_modules', '.cache');

fs.rmSync(chaceFolderPath, { recursive: true, force: true });
