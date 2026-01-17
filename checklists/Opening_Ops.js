async function doOpeningOps(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page
    .locator('[id="180257"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53460"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53461"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53462"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53463"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53464"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53465"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53466"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53467"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53468"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53469"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53470"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53471"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53472"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53473"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53474"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53475"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53477"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53478"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53479"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53480"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53481"]')
    .getByRole("button", { name: "Yes" })
    .click();
  await page
    .locator('[id="53482"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page
    .locator('[id="53483"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page
    .locator('[id="53484"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await submitChecklist();
}

module.exports = doOpeningOps;
