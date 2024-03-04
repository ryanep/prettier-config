import type { Config } from "prettier";

const config: Config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  insertPragma: false,
  jsxSingleQuote: false,
  proseWrap: "preserve",
  quoteProps: "consistent",
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: false,
  trailingComma: "es5",
  vueIndentScriptAndStyle: false,
};

export = config;
