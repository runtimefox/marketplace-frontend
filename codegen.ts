import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.graphql",
  documents: ["src/**/*.{ts,tsx}", "!src/gql/**/*"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/schema.ts": {
      plugins: ["typescript"],
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        scalars: {
          UUID: "string",
          DateTime: "string",
          Decimal: "number",
        },
      },
    },
    "./src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        useTypeImports: true,
        enumsAsTypes: true,
        scalars: {
          UUID: "string",
          DateTime: "string",
          Decimal: "number",
        },
      },
    },
  },
};

export default config;
