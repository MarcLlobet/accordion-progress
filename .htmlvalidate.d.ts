import "html-validate/vitest";

declare module "vitest" {
  interface Assertion {
    toHTMLValidate(): void;
  }
}
