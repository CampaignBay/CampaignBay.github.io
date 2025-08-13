# All Settings Explained

The main settings for CampaignBay can be found by navigating to **Campaigns > Settings**. This area allows you to configure the global, default behavior of the plugin. The settings are organized into several tabs.

[[toc]]

## Global Settings

This tab contains the master controls for the entire plugin.

![A screenshot of the "Global Settings" tab.](./../images/settings-01-global.png)

-   **Enable Discount Add-on:** This is the master switch. If you turn this off, all CampaignBay campaigns will be temporarily disabled site-wide without you having to deactivate them individually.
-   **Default Rule Priority:** Determines which discount applies if multiple campaigns are valid for the same product. A lower number (e.g., `10`) runs before a higher number (`20`). This is rarely needed but useful for advanced setups.
-   **Discount Calculation Mode:** Choose whether discounts are calculated on the product price before or after tax has been added.
-   **Decimal Places for Discount Values:** Sets the number of decimal places for calculated discount amounts.
-   **Enable Discount Caching:** Recommended for performance. This caches the results of active campaign queries to speed up page loads. The cache is automatically cleared when you save a campaign.
-   **Debugging & Logging:** Contains tools for troubleshooting, including the "View Logs" and "Clear Logs" buttons.

## Product Settings

This tab controls how discounts are displayed on your single product and shop pages.

![A screenshot of the "Product Settings" tab.](./../images/settings-02-product.png)

-   **Show Discounted Price on Product Page:** When enabled, this will show a "sale price" format, with the original price crossed out and the new, lower price displayed (e.g., <del>$50</del> $40). If disabled, only the final price will be shown.
-   **Product Page Discount Message Format:** Customize the "You save..." message that appears on the product page. You can use placeholders like `{percentage_off}` and `{amount_off}`.

-   **Automatically Exclude Sale Items from Campaigns:** A crucial safety feature. When enabled, CampaignBay will not apply any discounts to a product that is already on a native WooCommerce sale. This prevents "double discounting."
-   **Handle Multiple Product Discounts:** If two campaigns apply to the same product, this setting determines the outcome:
    -   *Apply Highest Discount:* The customer gets the best deal (lowest final price). **(Recommended)**
    -   *Apply Lowest Discount:* The customer gets the smallest deal.
    -   *Apply Based on Priority:* Uses the "Default Rule Priority" number to decide.

## Cart Settings

This tab controls how discounts interact with the WooCommerce cart.

![A screenshot of the "Cart Settings" tab.](./../images/settings-03-cart.png)

-   **Allow Stacking with WooCommerce Coupons:**
    -   If **enabled**, customers can use a coupon code *in addition* to an automatic campaign discount.
    -   If **disabled**, your plugin will prevent a coupon from being applied if a campaign discount is already active, and vice versa.
-   **'Next Discount' Progress Bar in Cart:** When a customer has a quantity-based discount item in their cart but hasn't reached the next tier, this enables a helpful notice (e.g., "Add 2 more to get 20% off!").
-   **'Next Discount' Message Format:** Customize the text for the progress bar notice. Use placeholders like `{remaining_quantity}` and `{discount_value}`.
-   **Display Applied Discount Details in Cart Summary:** When enabled, this adds a line item to the "Cart Totals" section for each active campaign, showing the customer a clear breakdown of their savings.

## Promotion Settings

This tab controls optional, site-wide promotional elements.

![A screenshot of the "Promotion Settings" tab.](./../images/settings-04-promotion.png)

-   **Enable Top/Bottom Promotional Bar:** Activates a simple banner at the top or bottom of your site to announce a sale. You can customize the colors, text, and an optional link.
-   **Enable Custom Sale Badges:** Allows you to override the default WooCommerce "Sale!" badge with custom text, colors, and shapes for products discounted by your campaigns.

## Advance Settings

This tab contains tools for data management and custom code.

![A screenshot of the "Advance Settings" tab.](./../images/settings-05-advance.png)

-   **Delete All Plugin Data on Uninstall:** If you check this box, all your campaigns, settings, and log data will be **permanently deleted** from your database when you uninstall the plugin. Use with caution.
-   **Export / Import Campaign Rules:** These tools allow you to download a backup of all your campaigns or import them to another site.
-   **Custom CSS / JavaScript:** Add custom CSS or JavaScript snippets to modify the plugin's appearance or behavior without editing plugin files directly.