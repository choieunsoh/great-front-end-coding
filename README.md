## Setup VSCode

**.vscode/extensions.json**

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "mikestead.dotenv"]
}
```

**.vscode/settings.json**

```json
{
  "search.exclude": {
    "**/node_modules": true,
    ".next/": true,
    "package-lock.json": true,
    "yarn.lock": true
  },
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.trimTrailingWhitespace": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.format": "explicit",
    "source.organizeImports": "explicit",
    "source.sortMembers": "explicit",
    "source.formatDocument": "explicit",
    "source.addMissingImports": "explicit",
    "source.removeUnusedImports": "explicit"
  },
  "prettier.prettierPath": "./node_modules/prettier/index.cjs",
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Setup Prettier

```bash
yarn add -D prettier
```

**.prettierrc**

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "arrowParens": "always",
  "printWidth": 120,
  "tabWidth": 2,
  "endOfLine": "auto",
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "overrides": [
    {
      "files": "*.ts",
      "options": {
        "parser": "typescript"
      }
    }
  ]
}
```

## Setup Jest with TypeScript

```bash
yarn add -D jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest ts-jest ts-node typescript
```

**babel.config.js**

```js
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};
```

**jest.config.ts**

```ts
import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
export default config;
```
