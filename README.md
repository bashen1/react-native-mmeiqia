
# react-native-mmeiqia

## 开始

`$ npm install react-native-mmeiqia --save`

### 自动配置

`$ react-native link react-native-mmeiqia`

### 手动配置


#### iOS

1. 打开XCode工程中, 右键点击 `Libraries` ➜ `Add Files to [your project's name]`
2. 去 `node_modules` ➜ `react-native-mmeiqia` 目录添加 `RNReactNativeMmeiqia.xcodeproj`
3. 在工程 `Build Phases` ➜ `Link Binary With Libraries` 中添加 `libRNReactNativeMmeiqia.a`

#### Android

1. 打开 `android/app/src/main/java/[...]/MainActivity.java`
  - 在顶部添加 `import com.reactlibrary.RNReactNativeMmeiqiaPackage;`
  - 在 `getPackages()` 方法后添加 `new RNReactNativeMmeiqiaPackage()`
2. 打开 `android/settings.gradle` ，添加:
  	```
  	include ':react-native-mmeiqia'
  	project(':react-native-mmeiqia').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-mmeiqia/android')
  	```
3. 打开 `android/app/build.gradle` ，添加:
  	```
      compile project(':react-native-mmeiqia')
  	```


### 其他配置

#### iOS

1. 将下载的开普勒iOS SDK引入到项目中
2. `URL Schemes` 添加 `sdkback + 开普勒appKey` 
3. `LSApplicationQueriesSchemes` 添加 `jdlogin`、`openapp.jdmobile`


## 使用方法
```javascript
import RNReactNativeMmeiqia from 'react-native-mmeiqia';

// TODO: What to do with the module?
RNReactNativeMmeiqia;
```
  