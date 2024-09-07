// @ts-check
import { createConfig } from "@ryanep/eslint-config";

const eslintConfig = createConfig({
  isGraphql: false,
  isNext: false,
  isTailwind: false,
});

export default eslintConfig;
