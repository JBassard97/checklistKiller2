async function doPepTest(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page.getByRole("textbox", { name: "Input Text" }).fill("5");
  await page.getByRole("spinbutton").fill("485");
  await page
    .locator('[id="53345"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53346"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53347"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53348"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53349"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53350"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="180253"]')
    .getByRole("button", { name: "Yes" })
    .click();

  await submitChecklist();
}

module.exports = doPepTest;
