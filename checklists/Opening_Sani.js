async function doOpeningSani(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page
    .locator('[id="181122"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53453"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53454"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53455"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page
    .locator('[id="53456"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53457"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53458"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53459"]')
    .getByRole("button", { name: "Yes" })
    .click();

  await submitChecklist();
}

module.exports = doOpeningSani;
