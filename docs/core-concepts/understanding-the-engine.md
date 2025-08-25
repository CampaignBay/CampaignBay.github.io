# Core Concepts: The Discount Engine

The heart of CampaignBay is its powerful pricing engine. To get the most out of the plugin, it's helpful to understand the rules and logic it uses to apply discounts. This guide explains how the engine prioritizes campaigns and handles stacking.

## The Calculation Flow

When a customer views a product or updates their cart, the CampaignBay engine performs a series of steps in a specific order:

1.  **Gathers Candidates:** It finds all `Active` campaigns that are applicable to a product based on its targeting rules (e.g., the product is in a targeted category).
2.  **Checks Exclusions:** It checks global settings, like "Exclude Sale Items," to remove any campaigns that shouldn't apply.
3.  **Determines the Best Discount:** It evaluates all remaining "candidate" campaigns to find the best possible price for the customer.
4.  **Applies Discounts:** It applies the final calculated discounts to the products in the cart.

## Conflict Resolution: Finding the Best Discount

What happens when multiple campaigns apply to the same product? For example, a "10% Off All T-Shirts" campaign and a "20% Off Store-Wide" sale.

This is controlled by the **Conflict Resolution** setting.

![Product Exclusion & Prioritization Settings](./../public/settings-product-exclusion.png)

- **Apply Highest Discount (Default):** This is the most common setting. The engine will calculate the final price for every applicable campaign and apply only the one that gives the customer the **biggest saving** (i.e., the lowest final price). In the example above, the 20% store-wide discount would be applied.

- **Apply Lowest Discount:** This is a less common setting. The engine will apply only the campaign that gives the customer the **smallest saving**.

## Stacking: Combining Multiple Discounts

Stacking allows you to layer different _types_ of discounts on top of each other for even more powerful promotions. This is controlled by the stacking settings in the "Cart Settings" tab.

![Cart Discount Options](./../public/settings-cart-options.png)

### 1. Stacking with WooCommerce Coupons

- **`Allow Stacking with WooCommerce Coupons`:** This setting controls the interaction with native WooCommerce coupons.
  - **If OFF (Default):** The systems are mutually exclusive. If a CampaignBay discount is active, coupons cannot be applied, and vice-versa.
  - **If ON:** A customer can use a coupon code on top of a price that has already been discounted by CampaignBay.

### 2. Stacking Campaign Types

- **`Allow Stacking with Other Discount Campaigns`:** This setting controls how different _types_ of CampaignBay campaigns interact.
  - **If OFF (Default):** Only the single best discount from any applicable campaign (Scheduled, Quantity, etc.) will be applied to a product.
  - **If ON:** Discounts are applied in a specific, layered order:
    1.  **First, the best "Simple" discount is applied.** The engine looks at all applicable `Scheduled` and `Early Bird` campaigns and applies the single best one.
    2.  **Then, a "Quantity" discount is applied.** If a `Quantity` campaign also applies, its discount is calculated based on the _already discounted price_ from the first step.

::: warning Stacking Example
Imagine a $100 product.

- A **Scheduled** sale offers 10% off (new price: $90).
- A **Quantity** discount for buying 3+ offers 20% off.

If stacking is **ON** and the customer buys 3, the final price will be **$72**.
($100 -> $90 from the scheduled sale -> $72 from the quantity discount applied to the $90 price).
:::

Understanding these core rules will help you build complex and predictable discount strategies for your store.
