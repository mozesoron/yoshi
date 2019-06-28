import loadConfig from './loadConfig';
import * as globs from './globs';
import * as paths from './paths';

const config = loadConfig();

export { globs, paths, config as default };
