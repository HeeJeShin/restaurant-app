module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // 컴포넌트는 항상 function 선언식으로 통일 (const 화살표 함수 금지)
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'function-expression',
      },
    ],
  },
};
