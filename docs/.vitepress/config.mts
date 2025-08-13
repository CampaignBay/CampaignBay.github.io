import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CampaignBay Documentation",
  description: "Comprehensive documentation for CampaignBay - Advanced WooCommerce Discount Campaigns",
  
  // Clean up the head to remove potential duplicates if you add meta tags later
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // Example: Add a favicon
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg', // Recommended: Add your logo to the /docs/public/ directory
    
    search: {
      provider: 'local'
    },

    // --- UPDATED NAV ---
    // Simplified for a cleaner user experience. The "Guide" link takes users
    // directly to the start of the documentation.
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started/installation' },
      // The GitHub link is better placed in socialLinks
    ],

    // --- UPDATED SIDEBAR ---
    // This now perfectly matches the file structure and content you have created.
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false, // Keep this section open by default
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'First Campaign', link: '/getting-started/first-campaign' },
        ]
      },
      {
        text: 'User Guides',
        collapsed: false,
        items: [
          { text: 'Dashboard Overview', link: '/guides/dashboard-overview' },
          { text: 'All Campaign Types', link: '/guides/all-campaign-types' },
          { text: 'Managing Campaigns', link: '/guides/managing-campaigns' },
        ]
      },
      {
        text: 'Reference',
        collapsed: false,
        items: [
          { text: 'Settings Configuration', link: '/reference/settings' },
        ]
      },
      // You can uncomment these sections later when you write the corresponding .md files
      // {
      //   text: 'Developer Reference',
      //   items: [
      //     { text: 'Actions & Filters', link: '/developer/hooks' },
      //   ]
      // },
      // {
      //   text: 'Support',
      //   items: [
      //     { text: 'Troubleshooting', link: '/support/troubleshooting' },
      //     { text: 'FAQ', link: '/support/faq' },
      //   ]
      // }
    ],

    socialLinks: [
      // Make sure this link points to your actual GitHub repository
      { icon: 'github', link: 'https://campaignbay.github.io/' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present WP Anchor Bay'
    }
  }
})