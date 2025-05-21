import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort"; // Import the plugin

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Add a new configuration object for simple-import-sort
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // Optional: Add the import rules from eslint-plugin-import if you want them
      // These are generally good practices for imports
      // "import/first": "error", // Make sure to install eslint-plugin-import if you use these
      // "import/newline-after-import": "error",
      // "import/no-duplicates": "error",
    },
  },
];

export default eslintConfig;
