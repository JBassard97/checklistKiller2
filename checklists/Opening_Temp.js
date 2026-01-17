const validTemp = require("../helpers.js");

async function doOpeningTemps(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page.locator('[id="53442"]').getByRole("spinbutton").fill("55");
  await page.locator('[id="53443"]').getByRole("spinbutton").fill(validTemp());
  await page.locator('[id="53445"]').getByRole("spinbutton").fill(validTemp());
  await page.locator('[id="53446"]').getByRole("spinbutton").fill(validTemp());
  await page
    .locator('[id="53447"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page
    .locator('[id="53448"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page.locator('[id="53449"]').getByRole("spinbutton").fill(validTemp());
  await page.locator('[id="53450"]').getByRole("spinbutton").fill(validTemp());
  await page.locator('[id="53451"]').getByRole("spinbutton").fill(validTemp());
  await page.locator('[id="53452"]').getByRole("spinbutton").fill("0");
  await page.locator('[id="181121"]').getByRole("spinbutton").fill(validTemp());

  await submitChecklist();
}

module.exports = doOpeningTemps;
