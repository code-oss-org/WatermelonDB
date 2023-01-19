import {ExpoConfig} from '@expo/config-types';
import {withDangerousMod} from 'expo/config-plugins';
import * as fs from 'fs';
import * as path from 'path';

const asyncFs = fs.promises;

export function setupPods(config: ExpoConfig): ExpoConfig {
  return withDangerousMod(config, [
    'ios',
    async config => {
      const podFilePath = path.join(
        config.modRequest.platformProjectRoot,
        'Podfile',
      );
      const contents = await asyncFs.readFile(podFilePath, {encoding: 'utf8'});

      await asyncFs.writeFile(
        podFilePath,
        `\n### [start] WatermelonDB expo plugin
pod 'simdjson', path: File.join(File.dirname(\`node --print "require.resolve('@nozbe/simdjson/package.json')"\`))
### [end] WatermelonDB expo plugin\n\n` + contents,
      );
      return config;
    },
  ]);
}
