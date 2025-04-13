import js from '@eslint/js'
import type { ESLint, Linter } from 'eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['.yarn', '.pnp.cjs', '.pnp.loader.mjs'], 'project/yarn-generated'),
  globalIgnores(['dist'], 'project/build-artifacts'),
  {
    name: 'project/main',
    files: ['**/*.ts'],
    plugins: {
      js,
      '@typescript-eslint': tseslint.plugin as ESLint.Plugin,
    },
    extends: [
      'js/recommended',
      tseslint.configs.recommended as Linter.Config,
      eslintConfigPrettier,
    ],
  },
])
