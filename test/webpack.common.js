const path = require('path');

module.exports = {
  mode: 'prod', // 기본 mode 설정 추가
  entry: './src/index.js', // 엔트리 포인트를 적절히 설정하세요
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') // public 디렉토리에 빌드 결과를 저장
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
