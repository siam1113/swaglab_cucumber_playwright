const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("I am on the login page for valid login", async function () {
  let page = global.page;
  await page.goto("https://www.saucedemo.com/");
});

When("I enter username and password", async function () {
  let page = global.page;
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
});

Then("I should be on the home page", async function () {
  let page = global.page;
  await page.waitForSelector("#inventory_container");
});

Given("I am on the login page for invalid login", async function () {
  await page.goto("https://www.saucedemo.com/");
});

When("I enter invalid username and password", async function () {
  await page.fill("#user-name", "standard_use");
  await page.fill("#password", "secret_sauc");
  await page.click("#login-button");
});

Then("I should be in home page", async function () {
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});
