# The Dashboard

The CampaignBay Dashboard is your command center for monitoring the performance and activity of all your discount campaigns. It's designed to give you a quick, at-a-glance overview of your key metrics and a deeper insight into what's working best for your store.

### Main Navigation & Date Filtering

The header provides the main navigation for the plugin and the primary date filter that controls the data displayed in the charts and KPI cards below.

![Dashboard Header Navigation](./public/dashboard-header.png)

- **Navigation:** Quickly jump between the `Dashboard`, `Campaigns` list, and `Settings`.
- **Add Campaign:** The primary button to start creating a new campaign.

![Dashboard Title and Date Filter](./public/dashboard-title-and-filter.png)

- **Date Filter:** Choose a time period to analyze your campaign performance. You can select pre-defined ranges like "Last 7 Days" or "Last 30 Days," or specify a custom date range. This filter affects all KPI cards and charts on the page.

## Key Performance Indicators (KPIs)

These four cards at the top of the page give you the most important metrics for a quick health check of your promotional activities.

![Dashboard KPI Cards](./public/dashboard-kpis.png)

1.  **Active Campaigns:** A live count of all campaigns that currently have the "Active" status. This number is not affected by the date filter. The "View All Campaigns" link will take you directly to the main campaign list.
2.  **Total Discounted Amount:** The total monetary value of all discounts applied to successful orders. The percentage below shows the trend compared to the previous equivalent period (e.g., if you select "Last 7 Days," it compares to the 7 days prior).
3.  **Discounted Orders:** The total number of unique orders that had at least one CampaignBay discount applied.
4.  **Sales from Campaigns:** The total revenue (including product prices, taxes, and shipping) from all orders that included a CampaignBay discount. This metric helps you understand the overall value of the orders your campaigns are driving.

## Performance Charts

### Daily Discount Value Trends

This powerful chart gives you a visual representation of your campaign performance over time, helping you identify which days had the most discount activity.

![Daily Discount Value Trends Chart - Bar View](./public/dashboard-trends-chart-bar.png)

- **Interactive Legend:** This chart is fully interactive. You can **hide or show data streams by clicking on their labels** in the legend at the top. This allows you to focus on the specific metrics that matter most to you.

  - **Discount Value ($):** The total sum of discounts given out each day.
  - **Original Order Value ($):** What the total value of the discounted orders _would have been_ without your campaigns. This helps you visualize the scale of the orders receiving discounts.
  - **Discounted Order Value ($):** The final, actual revenue from these orders after discounts were applied.

- **Toggle Chart Type:** You can switch between a **Bar** chart and a **Line** chart for your preferred visualization.

  ![Line/Bar Toggle Switch](./public/dashboard-trends-toggle.png)

  The line chart view is excellent for spotting trends over a longer period.

  ![Daily Discount Value Trends Chart - Line View](./public/dashboard-trends-chart-line.png)

### Top Performing Campaigns

This chart helps you instantly identify which specific campaigns are providing the most value by showing the total discount amount attributed to each.

![Top Performing Campaigns Chart](./public/dashboard-top-campaigns-chart.png)

The donut chart shows a breakdown of the total discount value attributed to your top 5 campaigns during the selected time period. Hover over a segment to see the exact value.

### Top Performing Types

This is a strategic chart that shows you which _kind_ of campaign is most effective for your store.

![Top Performing Campaign Types Chart](./public/dashboard-top-types-chart.png)

This chart breaks down the total sales from campaigns by their type (`scheduled`, `quantity`, `earlybird`). It helps you answer important questions like, "Do my Quantity discounts generate more overall revenue than my Scheduled sales?" so you can refine your marketing strategy.

## Actionable Widgets

The final section of the dashboard is focused on operational awareness and recent changes.

### Live & Upcoming Campaigns

These widgets provide immediate operational awareness, showing you what's running now and what's scheduled to start soon.

![Live and Upcoming Campaigns Widgets](./public/dashboard-live-upcoming.png)

- **Live Campaigns:** This list shows all campaigns that are currently in the `Active` state. It provides the campaign name, type, and its scheduled ending time so you know what's running at a glance.
- **Upcoming Campaigns:** This lists the next few campaigns that have a status of `Scheduled`, showing you what's coming up in your promotional calendar and when it's set to begin.

### Recent Activity

This widget provides a quick audit trail of the most recent administrative actions taken on your campaigns.

![Recent Activity Log](./public/dashboard-activity-log.png)

It shows a timestamped list of when campaigns were created or updated, and by which user. Clicking "View Full Activity Log" will take you to a more detailed history page.

## Next Steps

Now that you're familiar with the Dashboard, let's dive into the Core Concepts that power the plugin.

- **[Learn about the Discount Engine &rarr;](./core-concepts/understanding-the-engine.md)**
