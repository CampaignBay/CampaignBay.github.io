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
      { text: '🚀 Getting Started', link: '/getting-started/installation' },
    ],

    // Enhanced sidebar with better organization
    sidebar: [
      {
        text: 'Getting Started',
        collapsible: true,
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Dashboard Overview', link: '/getting-started/dashboard-overview' }
        ]
      },
      {
        text: 'Campaign Types',
        collapsible: true,
        items: [
          { text: 'Your First Campaign (Scheduled)', link: '/campaign-types/first-campaign-scheduled' },
          { text: 'Quantity Based Discounts', link: '/campaign-types/quantity-discounts' },
          { text: 'Early Bird Discounts', link: '/campaign-types/earlybird-discounts' },
        ]
      },
      {
        text: 'Managing Your Campaigns',
        collapsible: true,
        items: [
          { text: 'The "All Campaigns" Screen', link: '/managing-campaigns/all-campaigns-screen' },
        ]
      },
      {
        text: 'Reference',
        collapsible: true,
        items: [
          {
            text: 'All Settings',
            link: '/reference/settings',
            // --- This creates the nested submenu for the settings page ---
            items: [
              { text: 'Global Settings', link: '/reference/settings#_1-global-settings' },
              { text: 'Product Settings', link: '/reference/settings#_2-product-settings' },
              { text: 'Cart Settings', link: '/reference/settings#_3-cart-settings' },
              { text: 'Promotion Settings', link: '/reference/settings#_4-promotion-settings' },
              { text: 'Advance Settings', link: '/reference/settings#_5-advance-settings' },
            ]
          }
        ]
      }
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