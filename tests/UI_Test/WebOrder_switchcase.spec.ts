import fs from "fs";
import { test, expect } from "@playwright/test";

// Reads the JSON file and saves it
const objects = fs.readFileSync("./tests/TestData/Switch.json", "utf-8");
const orders = JSON.parse(objects);

test("Create Order - All Scenario", async ({ page }) => {
  // Login
  await page.goto("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx");
  await page.getByLabel("Username:").fill("Tester");
  await page.getByLabel("Password:").fill("test");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(
    "http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx"
  );

  // Navigate to order page
  await page.getByRole("link", { name: "Order" }).first().click();
  await expect(page).toHaveURL(/Process\.aspx/);

  // Order Scenarios
  for (const order of orders) {
    await page.locator("//input[@value='Reset']").click();


    if (order.Product) await page.locator("#ctl00_MainContent_fmwOrder_ddlProduct").selectOption(order.Product);
    if (order.Quantity !== undefined) await page.locator("#ctl00_MainContent_fmwOrder_txtQuantity").fill(order.Quantity);
    if (order.Customer !== undefined) await page.locator("#ctl00_MainContent_fmwOrder_txtName").fill(order.Customer);
    if (order.Street !== undefined) await page.locator("#ctl00_MainContent_fmwOrder_TextBox2").fill(order.Street);
    if (order.City !== undefined) await page.locator("#ctl00_MainContent_fmwOrder_TextBox3").fill(order.City);
    if (order.Zip !== undefined) await page.locator("#ctl00_MainContent_fmwOrder_TextBox5").fill(order.Zip);
    if (order.Card !== undefined) {
      await page.locator("#ctl00_MainContent_fmwOrder_TextBox6").fill(order.Card);
      // Select card type if needed (default to first option for demo)
      await page.locator("#ctl00_MainContent_fmwOrder_cardList_0").click();
    }
    if (order.Expire !== undefined) await page.locator("#ctl00_MainContent_fmwOrder_TextBox1").fill(order.Expire);

    await page.locator("#ctl00_MainContent_fmwOrder_InsertButton").click();

    // ✅ Switch for validation
    const result = order.Result.trim();
    switch (result) {
      case "New order has been successfully added.":
        await expect(
          page.locator("//strong[normalize-space()='New order has been successfully added.']")
        ).toHaveText("New order has been successfully added.");
        break;
      case "Field 'Quantity' cannot be empty.":
        await expect(
          page.locator("#ctl00_MainContent_fmwOrder_RequiredFieldValidator1")
        ).toHaveText(result);
        break;
      case "Field 'Customer name' cannot be empty.":
        await expect(
          page.locator("#ctl00_MainContent_fmwOrder_RequiredFieldValidator2")
        ).toHaveText(result);
        break;
      case "Field 'Street' cannot be empty.":
        await expect(
          page.locator("#ctl00_MainContent_fmwOrder_RequiredFieldValidator3")
        ).toHaveText(result);
        break;
      case "Field 'City' cannot be empty.":
        await expect(
          page.locator("#ctl00_MainContent_fmwOrder_RequiredFieldValidator4")
        ).toHaveText(result);
        break;
      case "Field 'Zip' cannot be empty.":
        await expect(
          page.locator("#ctl00_MainContent_fmwOrder_RequiredFieldValidator5")
        ).toHaveText(result);
        break;
      case "Field 'Card Nr' cannot be empty.":
        await expect(
          page.locator("#ctl00_MainContent_fmwOrder_RequiredFieldValidator6")
        ).toHaveText(result);
        break;
      case "Field 'Expire date' cannot be empty.":
        await expect(
          page.locator("#ctl00_MainContent_fmwOrder_RequiredFieldValidator7")
        ).toHaveText(result);
        break;
      case "Invalid format. Only digits allowed.":
        await expect(
          page.locator("#ctl00_MainContent_fmwOrder_rev1")
        ).toHaveText(result);
        break;
      default:
        throw new Error(`Unexpected result: ${order.Result}`);
    }
  }

  // Logout verification
  await page.getByRole("link", { name: "Logout" }).click();
  await expect(page.locator("#ctl00_MainContent_login_button")).toBeVisible();
});