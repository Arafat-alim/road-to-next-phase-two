// eslint.config.mjs

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
  // --- ADD THIS CONFIGURATION OBJECT AT THE TOP ---
  {
    ignores: ["src/generated/**", "app/generated/**"],
  },
  // --- END OF ADDITION ---

  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      // Optional: If you still see errors related to specific rules even after ignoring,
      // you might need to relax them for your own code or verify the ignore path.
      // For instance, if you have other generated files outside src/generated or
      // you prefer a less strict linting for some of your code.
      // Example of relaxing rules (use with caution for your own code):
      // "@typescript-eslint/no-explicit-any": "warn",
      // "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // "@typescript-eslint/no-require-imports": "off",
      // "@typescript-eslint/no-empty-object-type": "off",
    },
  },
];

export default eslintConfig;
