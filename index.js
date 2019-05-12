import {NativeModules} from 'react-native';

const {RNReactNativeMmeiqia} = NativeModules;

export async function initSDK(params) {
    return await RNReactNativeMmeiqia.initSDK(params);
}

export function show(params) {
    RNReactNativeMmeiqia.show(params);
}