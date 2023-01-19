import {ExpoConfig} from '@expo/config-types';
import {
  ExportedConfigWithProps,
  XcodeProject,
  withXcodeProject,
} from 'expo/config-plugins';
import * as fs from 'fs';
import * as path from 'path';

const asyncFs = fs.promises;

export function addWatermelonToBridgingHeader(config: ExpoConfig): ExpoConfig {
  return withXcodeProject(
    config,
    async (config: ExportedConfigWithProps<XcodeProject>) => {
      const appBridgingHeader = await setupBridgingHeader(config);
      const appFullBridgingHeaderPath = path.join(
        config.modRequest.platformProjectRoot,
        appBridgingHeader,
      );
      const watermelonBridgingHeader = require.resolve(
        '@code-oss-org/watermelondb/native/ios/WatermelonDB/SupportingFiles/Bridging.h',
      );
      const relativeWatermelonBridgingHeader = path.relative(
        path.dirname(appFullBridgingHeaderPath),
        watermelonBridgingHeader,
      );

      await asyncFs.writeFile(
        appFullBridgingHeaderPath,
        `\n// [start] WatermelonDB expo plugin
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>

#import "${relativeWatermelonBridgingHeader}"
// [end] WatermelonDB expo plugin\n\n`,
        {
          flag: 'a+',
        },
      );

      return config;
    },
  );
}

async function setupBridgingHeader(
  config: ExportedConfigWithProps<XcodeProject>,
) {
  const xcodeProject = config.modResults;
  const currentBridgingHeader = xcodeProject.getBuildProperty(
    'SWIFT_OBJC_BRIDGING_HEADER',
  );
  if (currentBridgingHeader) {
    return currentBridgingHeader;
  }

  const bridgingHeaderPath = `${config.modRequest.projectName}/${config.modRequest.projectName}-Bridging-Header.h`;

  xcodeProject.updateBuildProperty(
    'SWIFT_OBJC_BRIDGING_HEADER',
    bridgingHeaderPath,
  );
  return bridgingHeaderPath;
}
