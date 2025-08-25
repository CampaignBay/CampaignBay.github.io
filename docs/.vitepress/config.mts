import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CampaignBay Documentation",
  description: "Comprehensive documentation for CampaignBay - Advanced WooCommerce Discount Campaigns",
  
  // Enhanced head configuration
  head: [
    ['link', { rel: 'icon', href: '/logo-2.png' }],
    ['meta', { name: 'theme-color', content: '#3a86ff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/medium-zoom/dist/style.css' }],
    ['script', { src: 'https://unpkg.com/medium-zoom/dist/medium-zoom.min.js' }],
    ['style', {}, `
      /* Custom styles for medium-zoom integration */
      img {
        cursor: zoom-in;
        transition: opacity 0.3s ease;
      }
      
      img:hover {
        opacity: 0.9;
      }
      
      /* Dark theme compatibility */
      [data-theme="dark"] .medium-zoom-overlay {
        background-color: rgba(0, 0, 0, 0.9) !important;
      }
      
      [data-theme="light"] .medium-zoom-overlay {
        background-color: rgba(255, 255, 255, 0.9) !important;
      }
      
      /* Ensure proper spacing for zoomed images */
      .medium-zoom-image--opened {
        max-width: 90vw;
        max-height: 90vh;
        z-index: 1000;
      }
    `],
    ['script', {}, `
      document.addEventListener('DOMContentLoaded', function() {
        if (typeof mediumZoom !== 'undefined') {
          mediumZoom('img', {
            background: 'var(--vp-c-bg)',
            scrollOffset: 0,
            margin: 24
          });
        }
      });
      
      // Re-initialize on route changes
      if (typeof window !== 'undefined') {
        let currentPath = window.location.pathname;
        const observer = new MutationObserver(function() {
          if (window.location.pathname !== currentPath) {
            currentPath = window.location.pathname;
            setTimeout(function() {
              if (typeof mediumZoom !== 'undefined') {
                mediumZoom('img', {
                  background: 'var(--vp-c-bg)',
                  scrollOffset: 0,
                  margin: 24
                });
              }
            }, 100);
          }
        });
        
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    `]
  ],

  // Enhanced theme configuration
  themeConfig: {
    // Logo configuration
    logo: 'logo-2.png',
    
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
          { text: 'Targeting & Conditions', link: '/core-concepts/targeting-and-conditions' },
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
              { text: 'Quantity Discounts', link: '/campaigns/quantity-discounts' },
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
  lastUpdated: true,

  // Vite configuration for medium-zoom
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    },
    optimizeDeps: {
      include: ['medium-zoom']
    }
  }
})