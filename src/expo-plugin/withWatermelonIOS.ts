import {ConfigPlugin} from 'expo/config-plugins';

import {addWatermelonToBridgingHeader} from './addWatermelonToBridgingHeader';
import {setupPods} from './setupPods';

export const withWatermelonIOS: ConfigPlugin = config => {
  setupPods(config);
  addWatermelonToBridgingHeader(config);
  return config;
};
