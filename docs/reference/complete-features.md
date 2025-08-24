# Complete Feature Overview

This document provides a comprehensive overview of CampaignBay's complete feature set, including core discount types, targeting rules, calculation logic, and administrative tools.

[[toc]]

## 1.0 Introduction

CampaignBay is a powerful and flexible discount management plugin for WooCommerce. It allows store owners to create a variety of automated and targeted promotional campaigns to drive sales and engage customers. This document outlines the complete feature set of the plugin, including its core discount types, targeting rules, calculation logic, and administrative tools.

## 2.0 Campaign Types

CampaignBay supports three distinct types of promotional campaigns, each designed for a specific marketing goal.

### 2.1 Scheduled Discount

**Description**: This is the foundational discount type, ideal for creating traditional sales events like "Black Friday," "Summer Clearance," or weekend flash sales. It applies a direct price reduction (either a fixed amount or a percentage) to eligible products.

**Core Logic**: This campaign type is primarily time-based. It relies on the Scheduling & Automation system to control its active period.

**Use Cases**:

- Holiday sales and seasonal promotions
- Weekend flash sales
- Product launch events
- Store-wide clearance sales

### 2.2 Quantity Based Discount

**Description**: This campaign type allows you to create tiered pricing structures that reward customers for purchasing in bulk. It incentivizes larger order values by reducing the per-item cost as the quantity in the cart increases.

**Core Logic**: It uses a set of "tiers," each with a minimum and maximum quantity. When the quantity of a product in the cart falls within a tier's range, the corresponding discount (fixed amount per item or percentage) is applied.

**Use Cases**:

- Wholesale pricing for bulk orders
- Encouraging customers to stock up on consumables
- Moving excess inventory through bulk discounts
- Increasing average order value (AOV)

### 2.3 Early Bird Discount

**Description**: This is a powerful tool for creating urgency and FOMO (Fear Of Missing Out). It offers tiered discounts based on the number of orders that have already successfully used the campaign, rewarding the earliest customers most generously.

**Core Logic**: The plugin uses the Order Manager to track the number of successful sales (processing or completed orders) that have utilized the campaign. This "usage count" is then compared against the tiers (e.g., "First 100 orders," "Next 200 orders") to determine which discount, if any, a new customer is eligible for.

**Use Cases**:

- Product launches with limited early-bird pricing
- Flash sales with diminishing returns
- VIP customer rewards
- Creating urgency for time-sensitive offers

## 3.0 Targeting & Conditions

Campaigns can be precisely targeted to specific products or customers.

### 3.1 Product Targeting

You can define the scope of a campaign to apply to:

- **Entire Store**: The discount applies to all products in the shop
- **Specific Products**: Select one or more individual products. The discount will only apply to them
- **Specific Categories**: Select one or more product categories. The discount will apply to all products within those categories

### 3.2 Product Exclusion

**Exclude Sale Items**: A global setting in the "Product Settings" tab. When enabled, CampaignBay will not apply any discounts to a product that already has a native WooCommerce "Sale Price" set. This prevents unintentional "double-discounting."

### 3.3 Price-Based Filtering (Developer Feature)

The plugin includes backend logic to filter the main shop page based on price range. This is activated by adding URL parameters (e.g., `?min_price=100&max_price=200`). This provides a foundation for theme developers to build visual price slider widgets.

## 4.0 Pricing & Cart Logic

This section details the precise order and rules by which discounts are calculated and applied in the cart.

### 4.1 Discount Application Hierarchy & Stacking

The plugin's behavior changes based on the "Allow Campaign Stacking" setting.

#### 4.1.1 If "Allow Campaign Stacking" is DISABLED (Default Behavior)

The Pricing Engine gathers all applicable campaigns for a product (Scheduled, Quantity, Early Bird).

It calculates the final price offered by each of these campaigns.

It then applies only the single best discount based on the "Conflict Resolution" setting (Apply Highest Discount or Apply Lowest Discount). Only one campaign's discount is ever applied to a single product.

#### 4.1.2 If "Allow Campaign Stacking" is ENABLED (Corrected Logic)

Discounts are applied in a specific, layered order:

**Step 1: Calculate Best Simple Discount**
The engine first looks at all applicable Scheduled and Early Bird campaigns. It treats these as "simple" discounts. It finds the single best price from this group and applies it to the product's base price. This result becomes the new, temporarily discounted price.

**Step 2: Apply Quantity Discount on Top**
After the best simple discount has been determined, the engine then checks for any applicable Quantity Based Discounts. If the cart quantity meets a tier's criteria, the quantity discount is calculated and applied on top of the already discounted price from Step 1.

**Step 3: Apply WooCommerce Coupon**
Finally, if the "Allow Stacking with WooCommerce Coupons" setting is also enabled, a native WooCommerce coupon can be applied on top of all the previously calculated campaign discounts.

### 4.2 Coupon Stacking Control

A global setting (`cart_allowWcCouponStacking`) provides two-way control over interactions with native WooCommerce coupons.

**If Disabled**: If a CampaignBay discount is active in the cart, the user is blocked from applying a WooCommerce coupon, and a clear error message is displayed. Conversely, if a WooCommerce coupon is already in the cart, CampaignBay discounts will not be applied.

**If Enabled**: Both discount types can co-exist, subject to the hierarchy described in 4.1.2.

### 4.3 Discount Breakdown in Totals

A global setting (`cart_showDiscountBreakdown`) controls the display in the cart totals. When enabled, a separate, named line item is added for each campaign that contributed to the savings (e.g., "Summer Sale: -$15.00"), providing maximum clarity to the customer.

## 5.0 Scheduling & Automation

### 5.1 Automated Statuses

Campaigns can have a status of **Scheduled**, **Active**, or **Expired**. The plugin uses the built-in WordPress Cron (WP-Cron) system to automatically transition campaigns between these statuses.

### 5.2 Scheduling Logic

When an admin saves a campaign with the status set to Scheduled and provides future start and/or end dates, the Scheduler class creates cron jobs.

- At the start time, a cron job fires and changes the status to Active
- At the end time, a cron job fires and changes the status to Expired

### 5.3 Scheduling Failsafe

The plugin includes a failsafe mechanism that runs periodically. It manually checks all Active and Scheduled campaigns to correct their status if a WP-Cron event was missed due to low site traffic, ensuring high reliability.

## 6.0 Frontend Display & User Experience

### 6.1 Price Display

Automatically shows a strikethrough regular price and the new, lower campaign price on shop and product pages for simple and tiered discounts.

### 6.2 "Sale!" Badge

Products discounted by active campaigns will correctly display the standard WooCommerce "Sale!" badge.

### 6.3 Customizable "Save" Message

A customizable message (e.g., "You save {amount_off}!") can be displayed on single product pages.

### 6.4 Dynamic Cart Notices

For Quantity discounts, an inline message appears under the cart item prompting the user to add more to reach the next discount tier.

**Theme Compatibility Note**: This specific feature is compatible with classic WooCommerce themes that use the standard cart template. It is not currently compatible with the block-based Cart experience in block themes.

## 7.0 Plugin Administration

### 7.1 Modern React Interface

A fast and intuitive admin interface for managing all campaigns and settings.

### 7.2 "All Campaigns" List

A fully interactive data table with:

- **Filtering**: Filter campaigns by Status and Discount Type
- **Sorting**: Sort columns by Campaign Name, Status, Start Date, and End Date
- **Search**: Instantly find campaigns by title

### 7.3 Bulk Actions

Select multiple campaigns to change their status (Activate, Deactivate) or delete them simultaneously.

### 7.4 Logging and Debugging

- A dedicated "View Logs" modal in the settings to view the plugin's debug log in real-time
- A "Clear Logs" button to easily manage log files

### 7.5 Activity Tracking

The system automatically logs all key administrative actions (Campaign Created, Updated, Activated, Deactivated, Deleted) for a clear audit trail, which is visible on the main Dashboard.

## 8.0 Advanced & Technical Features

### 8.1 Auto-Updater

A built-in system to deliver plugin updates directly to the user's WordPress dashboard from a private API.

### 8.2 WooCommerce REST API Integration

All discount logic is correctly applied to orders created programmatically via the WooCommerce REST API, ensuring consistency for headless stores or third-party system integrations.

### 8.3 PSR-4 Modern Codebase

The plugin is built on a professional, namespaced PHP codebase using the PSR-4 autoloading standard for high maintainability and compatibility.

### 8.4 Activation Safeguards

The plugin checks for critical dependencies (WooCommerce active, WP-Cron enabled) upon activation to prevent errors and guide the user.

## 9.0 Performance & Optimization

### 9.1 Discount Caching

The plugin includes intelligent caching mechanisms to store campaign query results, significantly improving page load times on shop and product pages.

### 9.2 Automatic Cache Management

Cache is automatically cleared whenever campaigns are modified, ensuring customers always see the most current pricing.

### 9.3 Efficient Database Queries

Optimized database queries ensure minimal impact on site performance, even with multiple active campaigns.

## 10.0 Integration & Compatibility

### 10.1 WooCommerce Compatibility

Fully compatible with all WooCommerce versions and follows WooCommerce coding standards and best practices.

### 10.2 Theme Compatibility

Designed to work seamlessly with both classic and modern WordPress themes, with fallback support for various theme structures.

### 10.3 Plugin Compatibility

Built to coexist peacefully with other WooCommerce plugins and extensions, with configurable conflict resolution options.

---

## 🚀 **Next Steps**

Now that you understand the complete feature set of CampaignBay, explore these resources:

- **[Installation Guide](/getting-started/installation)** - Get started with CampaignBay
- **[First Campaign Tutorial](/campaign-types/first-campaign-scheduled)** - Create your first discount campaign
- **[Settings Reference](/reference/settings)** - Configure plugin behavior
- **[Dashboard Overview](/getting-started/dashboard-overview)** - Master the admin interface

---

_CampaignBay transforms your WooCommerce store into a powerful, automated sales machine. Start creating campaigns that drive results today!_
