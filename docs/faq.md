# FAQ (Frequently Asked Questions)

This page contains answers to the most common questions about setting up, configuring, and troubleshooting CampaignBay.

## General Questions

### What are the minimum requirements to use CampaignBay?
To ensure the plugin runs smoothly, your website should meet the following requirements:
-   WordPress Version 5.8 or higher
-   PHP Version 7.0 or higher
-   **WooCommerce** must be installed and activated.
-   **WP-Cron** must be enabled on your server for scheduling features to work automatically.

### Will CampaignBay slow down my website?
CampaignBay has been built from the ground up with performance in mind. On your storefront, it uses a multi-level caching system to store active campaign rules. This means it only needs to query the database periodically, not on every page load, ensuring a fast experience for your customers. You can manage the cache from the **Settings → Global Settings** tab.

### Is the plugin compatible with my theme?
Yes. CampaignBay is designed to be compatible with all modern WordPress themes. It fully supports both **Classic Themes** (like Storefront) and modern **Block Themes** (like Twenty Twenty-Four). We use the recommended hooks and systems to ensure that discount calculations and displays work correctly across both environments. *Please see the specific question below regarding cart notices in block themes.*

## Discount & Campaign Logic

### My discount isn't applying. What should I check first?
This is the most common issue and is usually due to a simple configuration setting. Please run through this checklist:

1.  **Is the Campaign Active?** Go to **Campaigns → All Campaigns** and ensure the campaign's status is `Active`, not `Inactive` or `Expired`.
2.  **Is the Schedule Correct?** If the campaign is `Scheduled`, make sure the current date and time are within the Start and End dates you have set.
3.  **Is the Product Targeted Correctly?** Double-check the "Discount Target" settings in your campaign. If it's targeted to a specific product or category, ensure the product you are viewing is included in that target group.
4.  **Is "Exclude Sale Items" Enabled?** Go to **Settings → Product Settings**. If "Automatically Exclude Sale Items" is checked, your campaign discount will not apply to any product that already has a native WooCommerce sale price.

### Why is only one of my campaigns applying when a product qualifies for two?
This is the intended behavior by default. To prevent unexpected "double discounts," the plugin will only apply the **single best discount** to a product. This is controlled by the "Conflict Resolution" setting under **Settings → Product Settings**. You can learn more about how this works in our **[Discount Engine Guide](./core-concepts/understanding-the-engine.md)**.

### Can customers use a WooCommerce coupon with a CampaignBay discount?
This is controlled by a setting. Navigate to **Settings → Cart Settings** and toggle the **"Allow Stacking with WooCommerce Coupons"** option.
-   **If OFF (Default):** The systems are mutually exclusive. If a CampaignBay discount is active, coupons cannot be applied, and vice-versa.
-   **If ON:** A customer can use a coupon code on top of a price that has already been discounted by CampaignBay.

### For Quantity Discounts, is a fixed discount ($5 off) applied once or to every item?
It is applied to **every single item** that qualifies for the tier. For example, if the rule is "Buy 3 or more, get $5 off" and a customer buys 4 items, they will receive a total discount of $20 ($5 x 4).

### For Early Bird campaigns, what is counted: orders or quantity?
The system counts the number of **successful orders** (`processing` or `completed`). This is the fairest method and prevents a single large purchase from using up all the available Early Bird slots.

### What happens to the Early Bird count if an order is cancelled?
If an order that used an Early Bird slot is later cancelled, refunded, or fails, that "slot" is automatically released and becomes available again. The usage counter is decremented, ensuring the next customer can claim the offer.

## Frontend Display

### Why doesn't the "add more to save" notice appear in my block-based theme?
This is due to a fundamental difference in how classic themes and block themes are built.
-   **Classic Themes** use PHP templates with many specific action hooks that our plugin uses to inject the notice under the product name.
-   **Block Themes** use a self-contained React-based Cart block that does not currently have equivalent hooks for injecting such notices.

Therefore, the inline "add more to save" notice on the cart page is only supported in **classic themes**. We are actively monitoring WooCommerce's development for new hooks that will allow us to bring this feature to block themes in the future.

### Can I customize the messages shown to the customer?
Yes. You can customize the "You save..." message on the product page and the "Add more to save..." message in the cart. These options are available in the **Settings → Product Settings** and **Settings → Cart Settings** tabs, respectively.

## Troubleshooting

### I updated a campaign, but the old discount is still showing. Why?
This is almost always a caching issue. Your site is temporarily showing a stored version of the active campaigns. To fix this, simply navigate to **Settings → Global Settings** and click the **"Clear Discount Cache"** button. This will force the plugin to fetch the latest rules immediately.

### How do I view the plugin's debug logs?
If our support team asks you to check the logs, you can do so easily:
1.  Go to **Settings → Global Settings**.
2.  Ensure the **"Enable Debug Mode"** checkbox is checked.
3.  Click the **"View Logs"** button. This will open a modal showing the most recent events.
