import { expect, test } from "@playwright/test";

test("OverlappingIssue", async ({ page }) => {
  await page.goto("./iframe.html?id=overlappingissue--playwright-test");

  // SUCCESS! This is expected to throw the error because the button is behind the element.
  await expect(
    page.getByRole("button", { name: "Click" }).click({ timeout: 1000 }),
  ).rejects.toThrowError();

  await expect(page.getByTestId("count")).toHaveText("0");
});
