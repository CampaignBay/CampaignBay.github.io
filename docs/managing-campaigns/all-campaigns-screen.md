# The "All Campaigns" Screen

The "All Campaigns" screen is your central hub for managing, organizing, and reviewing all the discounts you have created. You can access it by navigating to **Campaigns > All Campaigns** in your WordPress admin menu.

This screen is designed to give you both a high-level overview of all your promotions and the tools to quickly find and manage specific ones.

![A full screenshot of the "All Campaigns" list table, showing the filters at the top, the table with several example campaigns, and the footer with pagination.](./../images/managing-01-full-view.png)

## Filtering and Searching

To quickly find specific campaigns, especially if you have a large number of them, use the powerful controls located at the top of the table.

![A detailed screenshot highlighting the filter dropdowns ("Filter by Status," "Filter by Discount") and the search box on the right.](./../images/managing-02-filters.png)

-   **Filter by Status:** This dropdown allows you to show only campaigns with a specific status. This is useful for quickly seeing all of your currently `Active` promotions or reviewing `Expired` ones.
-   **Filter by Discount:** This dropdown lets you isolate campaigns of a specific type. For example, you can use it to see all your `Quantity` discounts at once.
-   **Search Campaign:** This is a live search box. Start typing a name or keyword, and the list will update to show only campaigns with a matching title.
-   **Apply Button:** After selecting a status or discount type from the dropdowns, click the **"Apply"** button to update the table with your filtered results.

## The Campaign List Table

The main part of the screen is the list table, which provides key information about each campaign at a glance. Many of the column headers are clickable, allowing you to sort the entire table.

-   **Checkbox:** Used to select one or more campaigns for bulk actions.
-   **Campaign Name:** The title of your campaign. Clicking this will take you directly to the edit screen for that campaign.
-   **Status:** A colored pill showing the current state of the campaign:
    -   **Active:** The campaign is currently live and applying discounts.
    -   **Scheduled:** The campaign is set to start at a future date.
    -   **Expired:** The campaign's end date has passed, or its usage limit has been reached.
    -   **Inactive (Draft):** The campaign is saved but is not active or scheduled.
-   **Discount Type:** The core logic of the campaign (e.g., Scheduled, Quantity, Early Bird).
-   **Target:** Which products the campaign applies to (e.g., Entire Store, Specific Category, etc.).
-   **Value:** The discount value. For tiered discounts, this typically shows the value of the first tier.
-   **Start/End Date:** The scheduled duration of the campaign. This will be blank for campaigns that are not scheduled.
-   **Usage:** The total number of times the campaign has been successfully applied to a completed order.
-   **Action:** A menu with quick actions for that specific row. Clicking the three-dots icon will reveal options like "Edit" and "Delete".

## Bulk Actions

You can perform actions on multiple campaigns at once using the bulk action tools. This is a huge time-saver for managing seasonal sales or cleaning up old campaigns.

![A screenshot showing several campaigns selected with checkboxes. The "Bulk Actions" dropdown is open, showing options like "Activate," "Deactivate," and "Delete." The footer showing the selected count is also visible.](./../images/managing-03-bulk-actions.png)

There are two ways to perform bulk actions:

1.  **Select Campaigns:** Use the checkboxes in the first column to select the campaigns you want to modify. You can use the checkbox in the table header to select all campaigns on the current page.
2.  **Choose an Action:**
    -   **From the Top:** Select an action from the "Bulk Actions" dropdown at the top of the table (e.g., "Activate," "Deactivate," "Delete") and click **"Apply"**.
    -   **From the Bottom:** Once you select at least one item, a footer will appear. You can click the trash can icon in the footer to bulk delete all selected items (a confirmation will be required).

## What's Next?

You are now an expert in creating and managing campaigns. The final piece of the puzzle is to understand the global settings that control the default behavior for all your campaigns.

**➡️ Next Step: [Learn About All Settings](../reference/settings.md)**