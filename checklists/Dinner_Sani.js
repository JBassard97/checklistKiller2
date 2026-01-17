async function doDinnerSani(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page
    .locator('[id="180255"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53232"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53233"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53235"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page
    .locator('[id="53236"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53237"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53238"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="195886"]')
    .getByRole("button", { name: "Yes" })
    .click();

  await submitChecklist();
}

module.exports = doDinnerSani;
