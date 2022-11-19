# 项目名称 
shopRN

## 概述
练习一下RN开发,

## 开发环境
andriod 12

| 名称| 版本
|----|----
| react-native | 0.70.4
| react| 18.1.0


## 路由 (react navigation)
>参考文档：[https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)

## 热更新Pushy
>参考文档：[https://pushy.reactnative.cn/docs/getting-started.html](https://pushy.reactnative.cn/docs/getting-started.html)

## 文件
### jsconfig.json文件
> 解决在babel.config.js文件中配置别名后，编辑器无法识别别名路径的问题
> 参考：[https://code.visualstudio.com/docs/languages/jsconfig](https://code.visualstudio.com/docs/languages/jsconfig)



## 依赖

### axios
> 参考文档：[https://www.axios-http.cn/](https://www.axios-http.cn/)

### @react-native-async-storage/async-storage
存储数据

### native-base
>参考文档: [https://docs.nativebase.io/install-rn](https://docs.nativebase.io/install-rn)
```yarn add native-base react-native-svg@12.1.1 react-native-safe-area-context@3.3.2 ```

### react-native-svg
> provides SVG support to React Native on iOS, Android, macOS, Windows, and a compatibility layer for the web.

### react-native-vector-icons
>参考：[https://oblador.github.io/react-native-vector-icons/](https://oblador.github.io/react-native-vector-icons/)

### react-native-linear-gradient
线性渐变组件

### react-native-fast-image
快速图片组件

### react-native-swiper
轮播图组件

### @react-native-camera-roll/camera-roll
CameraRoll 是一个 react-native 原生模块，提供对本地相机胶卷或照片库的访问。
[https://github.com/react-native-cameraroll/react-native-cameraroll](https://github.com/react-native-cameraroll/react-native-cameraroll)

### react-native-image-crop-picker
iOS/Android 图像选择器，支持相机、视频、可配置压缩、多图像和裁剪

# 项目笔记
## 1、项目配置
>[设置 APP 名称、应用图标参考:](http://t.zoukankan.com/guanpingping-p-11360376.html)
### 更改applicationId
>位于android/app/build.gradle
### 更改应用名称，app_name
位于android/app/src/main/res/values/strings.xml
### 修改应用图标
位于android/app/src/main/res
### 更改应用主题，AppTheme
位于android/app/src/main/res/values/styles.xml
### 启动页配置
参考：[https://blog.csdn.net/weixin_54122176/article/details/127891849?spm=1001.2014.3001.5502](https://blog.csdn.net/weixin_54122176/article/details/127891849?spm=1001.2014.3001.5502)

## 2、一些指令概念
### adb([ADB指令大全](https://blog.csdn.net/u013769274/article/details/89873697))
>Android调试桥
adb的全名是Android调试桥,是Android SDK中的工具,操作和管理Android模拟器或真实的Android设备
>补充：[adb reverse tcp:8081 tcp:8081](https://blog.csdn.net/suwu150/article/details/115800725)

### gradlew([常用指令](https://www.jianshu.com/p/5d8590993904))
>gradlew是Gradle Wrapper(包装器)


## 3、一些问题

### 关于 axios node_modules\axios\lib\utils.js的报错问题

```javaScript
//第530行代码改为：
const value = obj?.name;
```

### 引入图标失效问题的解决方法
> 在Android 文件夹下的app文件夹下的build.gradle 里添加上如下：
``` 
project.ext.react = [

    enableHermes: false,  // clean and rebuild if changing

    iconFontNames: [ 'AntDesign.ttf','FontAwesome.ttf' ] // 指定要使用的字体库

]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

### react-native默认不支持jsx(我这个版本貌似不用配置这玩意)
>在根目录的metro.config.js添加以下配置：
```
resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx'],
}
```

## 4、关于常用样式的笔记(<_<没记住)
### justify-content
> center;     /* 居中排列 */
> flex-start; /* 从行首起始位置开始排列 */
> flex-end;   /* 从行尾位置开始排列 */
> space-between;  /* 均匀排列每个元素 首个元素放置于起点，末尾元素放置于终点 */
> space-around;  /* 均匀排列每个元素每个元素周围分配相同的空间 */
> space-evenly;  /* 均匀排列每个元素 每个元素之间的间隔相等 */


## 5、其他
国际化方案参考：[https://blog.csdn.net/isKelel/article/details/123070685](https://blog.csdn.net/isKelel/article/details/123070685)
第三方APi:[https://github.com/fangzesheng/free-api](https://github.com/fangzesheng/free-api)
