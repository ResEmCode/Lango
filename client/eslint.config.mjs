import config9 from '@meow-double/eslint/v9';

const options = {
  defaultRules: {
    files: [],
    rules: {
      'custom/one-component': 'off',
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react/no-array-index-key': 'off',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-param-reassign': 'off',
    },
  },
  fsd: true,
  globals: {
    es: 'es2024',
    tests: 'vitest',
    other: {},
  },
  ignore: ['storybook-static', '**/.*', 'reports', 'configs/vite', 'scripts'],
  plugins: {},
  project: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json'],
};

export default config9({
  ...options,
  config: [
    {
      files: ['**/src/**/*Icon.tsx'],
      rules: {
        'max-len': 'off',
      },
    },
    {
      files: ['scripts/**/*'],
      rules: {
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
});
