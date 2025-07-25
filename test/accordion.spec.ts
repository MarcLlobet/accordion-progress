import { expect } from "@playwright/test";
import { test } from ".";

test("shows groups hidden by default", async ({ page }) => {
  await page.goto("/");
  const firstGroup = page.getByRole("group").first();
  await expect(firstGroup).toHaveAttribute("aria-expanded", "false");
});

test("expands group", async ({ page }) => {
  await page.goto("/");
  const firstGroup = page.getByRole("group").first();
  await firstGroup.click();
  await expect(firstGroup).toHaveAttribute("aria-expanded", "true");
});

test("hides group", async ({ page }) => {
  await page.goto("/");
  const firstGroup = page.getByRole("group").first();
  await firstGroup.click();
  const secondGroup = page.getByText("Mock Group 2");
  await secondGroup.click();
  await expect(firstGroup).toHaveAttribute("aria-expanded", "false");
});

test("shows task unchecked by default", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mock Group 1").click();
  const uncheckedTask = page.locator("button").filter({ hasText: "Task 2" });

  await expect(uncheckedTask).toHaveAttribute("aria-checked", "false");
});

test("checks task", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Mock Group 1").click();
  const uncheckedTask = page.locator("button").filter({ hasText: "Task 2" });

  await uncheckedTask.click();

  await expect(uncheckedTask).toHaveAttribute("aria-checked", "true");
});

test("progressbar shows initial value", async ({ page }) => {
  await page.goto("/");
  const progressbar = page.getByRole("progressbar");

  await expect(progressbar).toHaveText("72%");
});

test("progressbar recalculates value", async ({ page }) => {
  await page.goto("/");
  const progressbar = page.getByRole("progressbar");
  await page.getByText("Mock Group 1").click();

  const uncheckedTask = page.locator("button").filter({ hasText: "Task 2" });
  await uncheckedTask.click();

  await expect(progressbar).toHaveText("100%");
});
