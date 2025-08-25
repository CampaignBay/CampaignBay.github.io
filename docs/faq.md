# FAQ (Frequently Asked Questions)

This page contains answers to the most common questions about setting up and using CampaignBay.

### Why isn't my discount showing up on the product page?

This is usually caused by one of a few common issues. Please check the following:

1.  **Is the Campaign Active?** Go to the "All Campaigns" page and ensure the campaign's status is `Active`, not `Inactive` or `Expired`.
2.  **Is the Schedule Correct?** If the campaign is `Scheduled`, make sure the current date and time are within the Start and End dates you have set. Remember that all times are based on your WordPress timezone setting.
3.  **Is the Product Targeted Correctly?** Double-check the "Discount Target" settings in your campaign. If it's targeted to a specific product or category, ensure the product you are viewing is included in that target group.
4.  **Is "Exclude Sale Items" Enabled?** Go to **Settings → Product Settings**. If "Automatically Exclude Sale Items" is checked, your campaign discount will not apply to any product that already has a native WooCommerce sale price.

### Why did my scheduled campaign not start on time?

CampaignBay relies on a WordPress system called WP-Cron to automate schedules. On low-traffic websites, WP-Cron may not be triggered at the exact moment a campaign is due to start.

Our plugin has a **built-in failsafe** that manually checks and corrects campaign statuses periodically, so your campaign should activate shortly after the scheduled time once your site receives a visitor. For mission-critical sales, we recommend setting up a server-level cron job for maximum reliability.

[Learn more about Scheduling & Automation here.](./core-concepts/scheduling-and-automation.md)

### Can I use CampaignBay discounts with a WooCommerce coupon?

Yes, but it is controlled by a global setting.

- Navigate to **Settings → Cart Settings**.
- If **"Allow Stacking with WooCommerce Coupons"** is enabled, both discount types can be used together.
- If it is disabled, they are mutually exclusive. If one type of discount is in the cart, the other cannot be applied.

### Does CampaignBay work with variable products?

Yes. When you target a variable product (either by selecting it directly or through its category/tag), the discount will be available for **all of its variations**. When a customer selects a variation on the product page, the price will update to show the campaign discount if one applies.

### Will this plugin slow down my site?

CampaignBay has been built with performance in mind. On the frontend, it uses a multi-level caching system (transients) to store the list of active campaigns. This means it only needs to query the database for campaigns periodically, not on every page load, ensuring a fast experience for your customers. You can manage the cache from the **Settings → Global Settings** tab.
