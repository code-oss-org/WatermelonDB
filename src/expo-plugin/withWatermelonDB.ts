import {ConfigPlugin} from 'expo/config-plugins';

import {withWatermelonAndroid} from './withWatermelonAndroid';
import {withWatermelonIOS} from './withWatermelonIOS';

const withWatermelonDB: ConfigPlugin = config => {
  withWatermelonIOS(config);
  withWatermelonAndroid(config);
  return config;
};
export default withWatermelonDB;
