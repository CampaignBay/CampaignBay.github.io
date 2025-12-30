# Core Concepts: Scheduling & Automation

One of the most powerful features of CampaignBay is its ability to automatically start and stop your campaigns based on a schedule. This "set and forget" system allows you to plan your sales calendar in advance, ensuring your promotions run with precision.

This guide explains how the automation engine works.

## How Scheduling Works: Statuses and Time

The automation is based on the interaction between the **Status** you select and the **Schedule** dates you define when creating or editing a campaign.

### The Core Components

1.  **Select Status:** This is your primary control over the campaign's state. It dictates _how_ the campaign should behave upon saving.
2.  **Schedule:** This checkbox and its associated **Start Time** and **End Time** fields are the triggers for the automation.

### Understanding the Statuses (CRITICAL)

The status you choose has a very specific and immediate effect.

#### `Active`

- **Effect:** **Instantly activates the campaign.**
- **Use Case:** Choose this status only when you want the campaign to start applying discounts **right now**.
- ::: danger Important
  A campaign set to `Active` will run immediately, **ignoring any future "Start Time" you may have set**. The "End Time" will still be respected.
  :::

#### `Inactive`

- **Effect:** Keeps the campaign in a **manual draft mode**.
- **Use Case:** Choose this to save your work on a campaign without it ever running. It will be completely ignored by the discount engine until you manually edit it and change its status.

#### `Scheduled`

- **Effect:** Puts the campaign in a "waiting" state, ready to be activated in the future.
- **Use Case:** This is the **correct status to choose for any campaign that should start at a future date.**
- **Requirement:** If you select `Scheduled`, setting a future "Start Time" is **mandatory**. The campaign will remain in this state until its start time is reached, at which point the system will automatically change its status to `Active`.

#### `Expired`

- **Effect:** This is an automatic status set by the system when an `Active` campaign's "End Time" is reached.
- **Use Case:** You cannot select this manually. It signifies that a campaign has finished its run.

## The Automation Engine: Built for Reliability

CampaignBay uses a robust, two-part system to ensure your campaigns always run on time.

### 1. WordPress Cron Events

When you save a `Scheduled` campaign or an `Active` campaign with an end date, CampaignBay schedules a task (a "cron job") with WordPress. The built-in WordPress Cron system is designed to trigger these tasks at the precise moment they are due, automatically changing your campaign's status.

### 2. The CampaignBay Failsafe

We understand that on some hosting environments, the WordPress Cron system might be disabled. To solve this, CampaignBay includes a powerful **failsafe mechanism** that is always working for you in the background.

On a regular basis, our failsafe system manually checks all campaigns. If it finds any campaign where a scheduled time was missed because its cron job did not run, it will **immediately correct the status**.

::: tip Peace of Mind
This built-in failsafe guarantees that your campaign statuses will always be accurate and your sales will run on time, even if the underlying WordPress Cron system is not functioning on your server.
:::

## Next Steps

Now that you understand how scheduling works, let's explore the powerful targeting options available for all campaign types.

- **[Learn about Targeting &rarr;](./targeting.md)**
