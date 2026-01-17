const validTemp = require("../helpers.js");

async function doLunchTemps(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page.locator('[id="53098"]').getByRole("spinbutton").fill("55");
  await page.locator('[id="53099"]').getByRole("spinbutton").fill(validTemp());
  await page.locator('[id="53101"]').getByRole("spinbutton").fill(validTemp());
  await page.locator('[id="53102"]').getByRole("spinbutton").fill(validTemp());
  await page
    .locator('[id="53103"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page
    .locator('[id="53104"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page.locator('[id="53105"]').getByRole("spinbutton").fill(validTemp());
  await page.locator('[id="53106"]').getByRole("spinbutton").fill(validTemp());
  await page.locator('[id="53107"]').getByRole("spinbutton").fill(validTemp());
  await page.locator('[id="53108"]').getByRole("spinbutton").fill("0");
  await page.locator('[id="53109"]').getByRole("spinbutton").fill(validTemp());

  await submitChecklist();
}

module.exports = doLunchTemps;
