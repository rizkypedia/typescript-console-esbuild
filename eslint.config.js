import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    rules: {}
  },
  // Jest config
  {
    files: ["__tests__/**/*.ts"],
    plugins: { jest: jestPlugin },
    rules: {
      ...jestPlugin.configs.recommended.rules
    }
  }
];