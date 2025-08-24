# Early Bird Discounts

Early Bird discounts are a powerful psychological tool that creates urgency and FOMO (Fear Of Missing Out) by offering tiered discounts based on order volume. This campaign type rewards the earliest customers most generously, creating a compelling reason to buy now rather than later.

**Example:** "First 50 orders get 30% off, next 100 orders get 20% off, then 10% off for everyone else!"

## How It Works

Early Bird discounts use sophisticated order tracking to automatically adjust pricing based on how many orders have already been placed. The plugin's Order Manager tracks successful sales and applies the appropriate discount tier in real-time.

### Core Logic

The plugin uses the Order Manager to track the number of successful sales (processing or completed orders) that have utilized the campaign. This "usage count" is then compared against the tiers (e.g., "First 100 orders," "Next 200 orders") to determine which discount, if any, a new customer is eligible for.

**Key Features:**

- **Real-time Order Tracking**: Automatically counts successful orders as they're placed
- **Tiered Discount Structure**: Multiple discount levels based on order volume
- **Automatic Price Updates**: Product prices adjust automatically as order limits are reached
- **Urgency Creation**: Drives immediate action through limited availability

## Use Cases

- **Product Launches:** Create excitement and urgency for new product releases
- **Flash Sales:** Drive immediate action with time-sensitive, limited-quantity offers
- **VIP Customer Rewards:** Offer exclusive early access to loyal customers
- **Inventory Management:** Move products quickly with diminishing returns strategy
- **Event-based Promotions:** Create urgency around specific dates or events

## Configuration Steps

### 1. Select the Campaign Type

From the "Add Campaign" screen, select **"Early Bird Discount"** from the "SELECT DISCOUNT TYPE" dropdown.

### 2. Configure Common Fields

Set the **Campaign Title**, **Target** (e.g., "Specific Products"), and **Campaign Duration** just as you would for other campaign types. Early Bird campaigns work best when targeting specific products or categories rather than the entire store.

### 3. Define the Early Bird Tiers

This is the core of the Early Bird discount. You will define one or more pricing tiers based on order volume. Each tier represents a range of orders and the discount that applies within that range.

Let's break down the fields for a single tier:

- **First (Min):** The minimum number of orders that must be placed for this tier to apply.
- **to (Max):** The maximum number of orders for this tier. **Important:** Leave this field blank on your last tier to represent "and up."
- **orders, get (Value):** The discount value for customers who place orders within this range.
- **Type (% or Fixed):** Choose whether the discount is a percentage or a fixed amount.
- **+ Add another tier:** Click this button to add more pricing levels to create a more granular discount structure.

### Example Scenario & Setup

Let's say we want to create the following Early Bird structure:

- First 50 orders: 30% off
- Next 100 orders: 20% off
- All remaining orders: 10% off

Your tier configuration would look like this:

- **Tier 1:** Min `1`, Max `50`, Value `30`, Type `%` (Percentage)
- **Tier 2:** Min `51`, Max `150`, Value `20`, Type `%` (Percentage)
- **Tier 3:** Min `151`, Max `(blank)`, Value `10`, Type `%` (Percentage)

## Advanced Configuration Options

### Campaign Stacking

When "Allow Campaign Stacking" is enabled, Early Bird discounts work in combination with other campaign types:

1. **First**: The best Scheduled discount is applied to the base price
2. **Then**: The Early Bird discount is calculated and applied on top
3. **Finally**: Quantity discounts and WooCommerce coupons can be applied (if enabled)

This creates powerful combination offers that maximize customer savings and drive conversions.

### Order Tracking Accuracy

The plugin tracks orders with high accuracy:

- **Processing Orders**: Counted immediately when payment is processed
- **Completed Orders**: Verified and counted for final accuracy
- **Failed Orders**: Automatically excluded from the count
- **Refunded Orders**: Can be configured to reduce the count if needed

## How It Appears on the Product Page

Early Bird discounts automatically update product pricing in real-time:

- **Price Display**: Shows the current applicable discount price
- **Urgency Messaging**: Can display messages like "Only X orders left at this price!"
- **Tier Information**: Shows customers what discount they'll receive
- **Dynamic Updates**: Prices change automatically as order limits are reached

## How It Works in the Cart

The plugin automatically applies the correct Early Bird discount based on the current order count:

- **Real-time Calculation**: Discounts are calculated when the cart is loaded
- **Automatic Application**: No manual intervention required
- **Order Count Updates**: Discounts adjust as new orders are placed
- **Cart Integration**: Seamlessly integrates with WooCommerce cart functionality

## Performance & Optimization

Early Bird discounts are optimized for performance:

- **Efficient Order Counting**: Uses optimized database queries for order tracking
- **Intelligent Caching**: Campaign results are cached to improve page load times
- **Background Updates**: Order counts are updated in the background to avoid delays

## Troubleshooting

**Common Issues:**

1. **Discounts Not Applying**: Check that the campaign is active and the product is within the target scope
2. **Wrong Tier Applied**: Verify tier configuration and check current order count
3. **Order Count Inaccurate**: Check order statuses and ensure proper tracking is enabled

**Debug Tools:**

- Use the "View Logs" feature in settings to troubleshoot calculation issues
- Check campaign status and current order count in the admin dashboard
- Verify order tracking settings and configuration

## Best Practices

**Creating Effective Early Bird Campaigns:**

1. **Set Realistic Limits**: Base tier limits on your actual inventory and sales capacity
2. **Create Urgency**: Use compelling messaging to drive immediate action
3. **Monitor Performance**: Track conversion rates and adjust tiers as needed
4. **Combine Strategies**: Use Early Bird discounts with other campaign types for maximum impact

## What's Next?

Now that you understand how to create urgency with Early Bird discounts, let's explore how to manage and optimize all your campaigns effectively.

**➡️ Next Step: [Learn About Campaign Management](/managing-campaigns/all-campaigns-screen)**
