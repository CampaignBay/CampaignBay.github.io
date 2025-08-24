import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CampaignBay Documentation",
  description: "Comprehensive documentation for CampaignBay - Advanced WooCommerce Discount Campaigns",
  
  // Enhanced head configuration
  head: [
    ['link', { rel: 'icon', href: './images/logo-2.svg' }],
    ['meta', { name: 'theme-color', content: '#3a86ff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],

  // Enhanced theme configuration
  themeConfig: {
    // Logo configuration
    logo: './images/logo-2.svg',
    
    // Enhanced search
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search docs...',
                buttonAriaLabel: 'Search docs'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
      }
    },

    // Enhanced navigation
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '🚀 Getting Started', link: '/installation' },
    ],

    // Enhanced sidebar with better organization
    sidebar: [
      { text: 'Introduction', link: '/installation' },
      { text: 'Dashboard', link: '/dashboard' },
      {
        text: 'Core Concepts',
        items: [
          { text: 'The Discount Engine', link: '/core-concepts/understanding-the-engine' },
          { text: 'Scheduling & Automation', link: '/core-concepts/scheduling-and-automation' },
        ]
      },
      {
        text: 'Campaigns', // This is now a collapsible group
        items: [
          { text: 'All Campaigns', link: '/campaigns/' }, // The main list view
          {
            text: 'Campaign Types',
            items: [
              { text: 'Scheduled Discounts', link: '/campaigns/scheduled-discounts' },
              { text: 'Quantity Discounts', link: '/campaigns/quantity-discents' },
              { text: 'Early Bird Discounts', link: '/campaigns/early-bird-discounts' },
            ]
          }
        ]
      },
      { text: 'Settings', link: '/settings' },
      { text: 'FAQ', link: '/faq' },
    ],


    // Enhanced social links
    socialLinks: [
      { icon: 'github', link: 'https://campaignbay.github.io/' }
    ],

    // Enhanced footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present WP Anchor Bay'
    },

    // Enhanced site title
    siteTitle: 'CampaignBay Docs'
  },

  // Enhanced markdown configuration
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
    toc: { level: [1, 2, 3] },
    config: (md) => {
      // Add custom markdown plugins if needed
    }
  },

  // Enhanced appearance
  appearance: 'dark',
  
  // Enhanced last updated
  lastUpdated: true
})