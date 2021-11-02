( ˘▽˘)っ♨ Eleventy + Contentful == ContentfulLBelly!

This demo uses a build plugin to grab data from Contentful and showcases it using Eleventy. Learn more about it [in this awesome blog post](https://www.netlify.com/blog/2021/10/25/learning-to-future-proof-sites-using-headless-cms-and-different-ssgs/).

Check it out live here: [https://demo-restaurant-11ty-contentful.netlify.app](https://demo-restaurant-11ty-contentful.netlify.app)

Or use this button & add your Contenful Env Vars via the Netlify UI

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tzmanics/demo-restaurant-11ty-contentful&utm_source=github&utm_medium=ng-prerender-tzm&utm_campaign=devex)

# oooor Create or link your project with the Netlify CLI
netlify create
# or
netlify link

# Add the Contentful Space ID
netlify env:set CONTENTFUL_SPACE_ID XXX

# Add the Contentful Content Delivery API access token
netlify env:set CONTENTFUL_CONTENT_API_TOKEN XXX

# Run Netlify Build to prime your build with the data
# This will use your centrally managed env vars
netlify build

# You now have data to build against
netlify dev

