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

## 其他依赖
### react-native-vector-icons
>[参考](https://oblador.github.io/react-native-vector-icons/)

# 项目笔记
## 1、项目配置
>更改applicationId，位于android/app/build.gradle
>更改app_name，位于android/app/src/main/res/values/strings.xml
>更改AppTheme，位于android/app/src/main/res/values/styles.xml

## 2、一些指令概念
### adb([ADB指令大全](https://blog.csdn.net/u013769274/article/details/89873697))
>Android调试桥
adb的全名是Android调试桥,是Android SDK中的工具,操作和管理Android模拟器或真实的Android设备
>补充：[adb reverse tcp:8081 tcp:8081](https://blog.csdn.net/suwu150/article/details/115800725)

### gradlew([常用指令](https://www.jianshu.com/p/5d8590993904))
>gradlew是Gradle Wrapper(包装器)



## 3、一些问题
### 引入图标失效问题的解决方法
> 在Android 文件夹下的app文件夹下的build.gradle 里添加上如下：
``` 
project.ext.react = [

    enableHermes: false,  // clean and rebuild if changing

    iconFontNames: [ 'AntDesign.ttf','FontAwesome.ttf' ] // 指定要使用的字体库

]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

### react-native默认不支持jsx
>在根目录的metro.config.js添加以下配置：
```
resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx'],
}
```

## 4、其他
国际化方案参考：[https://blog.csdn.net/isKelel/article/details/123070685](https://blog.csdn.net/isKelel/article/details/123070685)

