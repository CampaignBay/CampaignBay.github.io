# Campaign Type: Early Bird Discount

An **Early Bird Discount** is a powerful marketing tool designed to create urgency and drive rapid sales by rewarding your first customers. The discount is based on the total number of **successful orders** that have already used the campaign.

This is the perfect campaign type for scenarios like:

- "50% off for the first 100 customers!"
- "Launch Special: The first 50 orders get $20 off, the next 100 get $10 off."
- Creating a flash sale with a limited number of available slots.

::: warning Important: Order vs. Quantity
An Early Bird discount is based on the number of **orders**, not the quantity of items purchased. If one customer buys 100 items in a single transaction, it only counts as **one** use toward the campaign's limit.
:::

This guide will walk you through every field required to set up this campaign type.

## Step 1: Set Core Campaign Details

To begin, navigate to **CampaignBay → Add Campaign**. The first step is to define the campaign's name, its core logic, and its initial state.

![Core Campaign Details for Early Bird Discount](./../public/early-bird-core-details.png)

- **Campaign Title:** Give your campaign a clear and descriptive name. This is essential for identifying it later. Example: `New Product Launch Offer`.

- **Select Discount Type:** From the dropdown menu, choose **`EarlyBird Discount`**. This will reveal the specific fields needed for a sales-based tiered campaign.

- **Select Status:**
  - **Active:** Choose this if you want the campaign to be live on your site (either immediately or on a future schedule).
  - **Inactive:** Choose this to save the campaign as a draft.

## Step 2: Set the Discount Target

This crucial step defines which products in your store are eligible for the early bird discount.

![Discount Target](./../public/scheduled-target.png)

The **DISCOUNT TARGET** dropdown provides powerful options to control the scope of your campaign, such as applying it to the entire store, specific products, or categories.

::: info Learn More About Targeting
The "Discount Target" setting is a powerful feature shared by all campaign types. We've created a dedicated guide to explain all of its options and conditional fields in detail.

**[Read the Full Guide: Targeting & Conditions &rarr;](../core-concepts/targeting-and-conditions.md)**
:::

## Step 3: Define Discount Tiers For First Sales

This is the core of the Early Bird Discount. Here you will define the tiers based on the number of successful orders.

![Define Early Bird Tiers](./../public/early-bird-tiers.png)

- **For First:** This defines the range of sales for this tier. The system automatically handles the ranges based on the order of your tiers.
- **Sales (e.g., 1 - 10):** Enter the upper limit of sales for this tier. For example, entering `10` here means this tier applies to the first 10 sales.
- **give:** The numeric value of the discount.
- **% / $ (Mode):** The type of discount to apply (Percentage or Fixed Currency amount).
- **+ Add another tier:** Click this to add multiple levels of Early Bird offers.

### How Tiers Work

The tiers work sequentially from top to bottom.

**Example Tier Setup:**

- **Tier 1:** For First `Sales (1 - 100)`, give `50` `%`
- **Tier 2:** For First `Sales (1 - 250)`, give `25` `%`

**In this scenario:**

- Orders 1 through 100 will receive a 50% discount.
- Orders 101 through 250 will receive a 25% discount.
- Order 251 and beyond will receive no discount from this campaign.

## Step 4: Set Other Configurations (Optional)

This section provides additional rules for your campaign.

![Other Configurations](./../public/scheduled-other-configs.png)

- **Exclude Sale Items:** Check this box if you do not want this campaign's discount to apply to products that are already on sale in WooCommerce. This is useful for preventing "double discounting."

- **Enable Usage Limit:** Check this box to set a maximum number of times this campaign can be used across your entire store. Once the limit is reached, the campaign will automatically become inactive.

## Step 5: Set the Schedule (Optional)

For a Scheduled Discount, setting the duration is essential. This section controls when your campaign will automatically start and end.

![Campaign Schedule](./../public/scheduled-schedule.png)

- **Start Time / End Time:** Use the date and time pickers to set the exact moment for the campaign to activate and expire.

::: tip Timezone Information
All dates and times are based on the timezone you have configured in your main WordPress settings under **Settings → General → Timezone**. The system automatically handles all UTC conversions for you.
:::

::: info Learn More About Automation
The status of your campaign is closely tied to the scheduling system, which uses WordPress Cron to automate activation and expiration.

**[Read the Full Guide: Scheduling & Automation &rarr;](../core-concepts/scheduling-and-automation.md)**
:::

## Step 6: Define Display Configurations (Optional)

This section allows you to customize how the discount is communicated to the customer on the product page.

![Display Configurations](./../public/scheduled-display-configs.png)

- **Display As Regular Price:** This setting is for display purposes only. It changes the visual price on the product page.

- **Discount Message Format:** Enter a custom message to be displayed on the product page when this discount is active. You can use placeholders like `{percentage_off}` and `{amount_off}`.

## Step 7: Save the Campaign

Once you have configured all the options, click the **Save Campaign** button at the top right of the page. After saving, you will be redirected back to the "All Campaigns" list.

## Next Steps

Next, learn how to create campaigns that offer "Buy One, Get One" style deals.

- **[Creating a BOGO Discount &rarr;](./bogo-discounts.md)**
