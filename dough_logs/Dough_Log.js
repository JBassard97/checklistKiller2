async function doDoughLog(page, sleep, submitChecklist) {
  const today = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
  });

  const logAmountMap = {
    Monday: 2,
    Tuesday: 2,
    Wednesday: 2,
    Thursday: 2,
    Friday: 2,
    Saturday: 2,
    Sunday: 2,
  };

  await page.getByText("Periodic").click();

  for (let i = 1; i <= logAmountMap[today]; i++) {
    if (i === 1) {
      await page.getByRole("heading", { name: "Dough Log" }).click();
    } else {
      await page
        .locator("cards-stats")
        .filter({ hasText: "Dough Log" })
        .getByRole("button")
        .click();

      await page.getByRole("heading", { name: "Start New" }).click();
    }
    await page
      .locator('[id="275553"]')
      .getByRole("textbox", { name: "Input Text" })
      .fill(i.toString());
    await page
      .locator('[id="275554"]')
      .getByRole("textbox", { name: "Input Text" })
      .fill("1-390876");
    await page.locator('[id="275555"]').getByRole("spinbutton").fill("75");
    await sleep(1000);
    await page.locator('[id="275556"]').getByRole("spinbutton").fill("75");
    await sleep(1000);
    await page.getByRole("button", { name: "Calculate" }).click();
    await sleep(1000);
    await page
      .locator('[id="275574"]')
      .getByRole("textbox", { name: "Input Text" })
      .fill("1-390876");
    await page
      .locator('[id="275575"]')
      .getByRole("textbox", { name: "Input Text" })
      .fill("9");
    await page.locator('[id="275576"] fa-layers svg').click();
    await page.locator('[id="1"] span').first().click();
    await page
      .getByText("Dough Temperature °")
      .getByRole("spinbutton")
      .fill("85");
    await page
      .locator('[id="275578"]')
      .getByRole("textbox", { name: "Input Text" })
      .fill("9:30");

    await sleep(1000);
    await page.getByRole("button", { name: "Submit" }).click();
    await sleep(1000);
    await page.getByRole("button", { name: "Back" }).click();
    await sleep(1000);
  }
}

module.exports = doDoughLog;
