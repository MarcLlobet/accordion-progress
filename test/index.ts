import { test as base } from "@playwright/test";
import { mockRawData } from "./mock";

export const test = base.extend({
  page: async ({ page }, extendWith) => {
    await page.route("/progress.json", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(mockRawData),
      });
    });

    extendWith(page);
  },
});
