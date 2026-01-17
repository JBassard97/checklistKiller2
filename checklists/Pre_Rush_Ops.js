async function doPreRushOps(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page
    .locator('[id="53264"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53266"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53267"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53268"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53269"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53270"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53271"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53272"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53273"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53274"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53275"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53276"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53277"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53278"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53279"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53280"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53281"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53282"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53283"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53284"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53285"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53286"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53287"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53288"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page
    .locator('[id="53289"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await submitChecklist();
}

module.exports = doPreRushOps;
