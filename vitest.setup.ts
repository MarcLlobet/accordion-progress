import "@testing-library/jest-dom/vitest";
import "html-validate/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import { mockRawData } from "./test/mock";

export const actualFetch = globalThis.fetch;
globalThis.fetch = vi.fn((urlProp: RequestInfo | URL): Promise<Response> => {
  if (urlProp === "/accordion-progress/progress.json") {
    return Promise.resolve(
      new Response(JSON.stringify(mockRawData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    );
  }

  return Promise.resolve(
    new Response(null, {
      status: 404,
      statusText: "Not Found",
    }),
  );
});

afterEach(cleanup);
