# Stacking and Priority

How CampaignBay handles multiple competing discounts is one of its most powerful features. The behavior is controlled by the **Allow Stacking with Other Discount Campaigns** option in the **Cart Settings**.

For the purpose of these rules, we define three distinct **Campaign Types**:
1.  **Simple Discount:** The "best of" any applicable `Scheduled Discount` or `Earlybird Discount`. A product can only receive one Simple Discount.
2.  **Quantity Discount:** A tiered discount based on the quantity of an item in the cart.
3.  **BOGO Discount:** A "Buy X, Get Y" offer. (Coming Soon)

## Scenario 1: Stacking is DISABLED

This is the default and safest mode. The plugin's goal is to give the customer the single best deal for each product, preventing discounts from combining in unexpected ways.

The logic is applied on a **per-product basis**:

1.  For each item in the cart, the plugin calculates the final price it would get from its best **Simple Discount**.
2.  It then calculates the price it would get from its best **Quantity Discount**.
3.  It compares these two prices and applies **only the one that results in the lower final price** for that specific item.
4.  This means in a single cart, one product's final price could be the result of a Scheduled Sale, while another's is the result of a Quantity Discount, because each was the best deal for that specific product.

## Scenario 2: Stacking is ENABLED

When stacking is enabled, the plugin applies discounts sequentially in a predictable "Discount Waterfall." This allows you to combine promotions, for example, applying a quantity discount on top of an already-discounted sale price.

The order of operations is always:

1.  **Base Price:** The product's price.
2.  **Apply Simple Discount:** The best of all applicable `Scheduled` or `Earlybird` discounts is calculated and applied. This creates a new, lower "sale price".
3.  **Apply Quantity Discount:** If a `Quantity Discount` also applies, its discount percentage or fixed amount is calculated based on the new "sale price" from the step above, not the original base price.

### Example Waterfall

- A product's Base Price is **$100**.
- A **Scheduled Sale** of 20% off is active. The price becomes $80.
- A **Quantity Discount** for buying 5+ items offers an additional 10% off.
- The 10% Quantity Discount is applied to the **$80** price, not the $100 price. The discount is $8.
- The final price for the item in the cart is **$72**.