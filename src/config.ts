import type { Config } from "prettier";

const config: Config = {
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  jsxBracketSameLine: false,
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  arrowParens: "always",
  endOfLine: "lf",
  quoteProps: "consistent",
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,
};

export = config;
