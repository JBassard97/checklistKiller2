async function doLunchSani(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page
    .locator('[id="180254"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53217"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53218"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53219"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page
    .locator('[id="53220"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53222"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53223"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53227"]')
    .getByRole("button", { name: "Yes" })
    .click();

  await submitChecklist();
}

module.exports = doLunchSani;
