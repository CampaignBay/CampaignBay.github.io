# Global Settings

The global settings page allows you to configure the default behavior for all your campaigns. You can find it under **Campaigns > Settings**. The settings are organized into several tabs for clarity.

## Global Settings Tab

This tab contains general options for the entire plugin, including performance and debugging.

![CampaignBay Global Settings Page](/settings-global.png)

-   **Enable Discount Add-on:** A master switch to temporarily disable all discount campaigns across your store.
-   **Default Rule Priority:** Sets a default priority number for new rules. Lower numbers indicate higher priority and will be applied first.
-   **Discount Calculation Mode:** Choose whether to calculate discounts before or after tax is applied.
-   **Decimal Places for Discount Values:** Sets the number of decimal places for rounding discount values.
-   **Enable Discount Caching:** Improves performance by caching discount rule calculations. It's recommended to keep this enabled and clear the cache if rules don't seem to apply immediately after a change.
-   **Enable Debug Mode:** Show detailed error messages and logging for troubleshooting (only visible to administrators).

## Product Settings Tab

This tab controls how discounts are calculated and displayed on individual product and shop pages.

![CampaignBay Product Settings Page](/settings-product.png)

-   **Display Discounted Price:** When enabled, products with an active campaign will show a strikethrough price (e.g., `~~$50.00~~ $40.00`).
-   **Product Page Discount Message Format:** Customize the message shown on the product page for discounted items. Use placeholders like `{percentage_off}` and `{amount_off}`.
-   **Enable Quantity Discounts Table on Product Page:** Shows a table on the product page outlining the different pricing tiers for bulk purchases.
-   **Automatically Exclude Sale Items from Campaigns:** A crucial setting to prevent "double-dipping." If a product is already on a native WooCommerce sale, our campaigns will ignore it.
-   **Handle Multiple Product Discounts:** This setting determines which "Simple Discount" (Scheduled or Earlybird) wins if a product is eligible for more than one. `Apply Highest Discount` is recommended.

## Cart Settings Tab

This tab controls how discounts behave in the shopping cart during checkout.

![CampaignBay Cart Settings Page](/settings-cart.png)

-   **Allow Stacking with WooCommerce Coupons:** If checked, your campaign discounts can be combined with standard WooCommerce coupons.
-   **Allow Stacking with Other Discount Campaigns:** This is the master switch for campaign stacking. See our guide on [Stacking and Priority](../advanced/stacking-and-priority.md) for details.
-   **You Saved Message Format:** Customize the format of the total savings message displayed in the cart.
-   **Show "Next Discount" Progress Bar in Cart:** For Quantity Discounts, this will display an upsell message directly under the product in the cart (e.g., "Add 2 more to get 20% off!").
-   **"Next Discount" Message Format:** Customize the text of the upsell message using placeholders like `{remaining_amount}` and `{discount_percentage}`.
-   **Display Applied Discount Details in Cart Summary:** When enabled, a detailed breakdown of which campaigns were applied will be shown in the cart totals area.