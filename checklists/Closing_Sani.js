async function doClosingSani(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page
    .locator('[id="53258"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53259"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53260"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53261"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53262"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53263"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="181123"]')
    .getByRole("button", { name: "Yes" })
    .click();

  await submitChecklist();
}

module.exports = doClosingSani;
