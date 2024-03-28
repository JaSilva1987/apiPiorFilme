import * as path from 'path';
import * as fs from 'fs';

const pkg = JSON.parse(
  fs.readFileSync(path.resolve('package.json')).toString('utf-8'),
);

const API_NAME = pkg.name;
const API_VERSION = pkg.version;
const API_DESCRIPTION = pkg.description;

export { API_NAME, API_VERSION, API_DESCRIPTION };
