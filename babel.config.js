//=============================================================================
// babel-plugin-module-resolver 模块解析插件

// root：一个字符串或根目录的数组。指定路径或全局路径（例如./src/**/components）

// alias：别名的配置。也可以别名node_modules依赖关系，而不仅仅是本地文件。

// extensions：解析器中使用的扩展数组。覆盖默认扩展名（['.js', '.jsx', '.es', '.es6', '.mjs']）。

// cwd：默认情况下，工作目录是用于解析器的工作目录，但是您可以覆盖您的项目。
// 自定义值babelrc将使插件根据要解析的文件查找最接近的babelrc配置。
// 自定义值packagejson将使插件查找最接近package.json的文件解析。

// transformFunctions：将会变换其第一个参数的函数和方法的数组。
// 默认情况下，这些方法是：require，require.resolve，System.import，jest.genMockFromModule，jest.mock，jest.unmock，jest.doMock，jest.dontMock。

// resolvePath(sourcePath, currentFile, opts)：为文件中的每个路径调用的函数。
// 默认情况下，模块解析器使用一个内部函数，
// 如下所示：import { resolvePath } from 'babel-plugin-module-resolver'。该opts参数是通过babel配置通过选择对象。


module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], //表示哪个目录开始设置绝对路径
        extensions: [".ios.js", ".android.js", ".js", ".jsx", ".ts", ".tsx", '.json'],
        alias: {
          //别名的配置
          '@/utils': './src/utils',
          '@/pages': './src/pages',
          '@/navigator': './src/navigator',
          '@/components': './src/components',
          '@/assets': './src/assets',
          '@/service': './src/service',
        },
      },
    ],
  ],
};
