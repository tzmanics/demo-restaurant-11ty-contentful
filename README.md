# ( ˘▽˘)っ♨ Eleventy + Contentful
ContentfullBelly Restaurant Site!

This demo uses a build plugin to grab data from [Contentful](https://www.contentful.com/) and showcases it using [Eleventy](https://www.11ty.dev/). Learn more about it [in this awesome blog post](https://www.netlify.com/blog/2021/10/25/learning-to-future-proof-sites-using-headless-cms-and-different-ssgs/).

### Check it out live here: [https://demo-restaurant-11ty-contentful.netlify.app](https://demo-restaurant-11ty-contentful.netlify.app)

### And use this button to deploy it & add your Contenful env vars via the Netlify UI

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tzmanics/demo-restaurant-11ty-contentful&utm_source=github&utm_medium=11ty-contentfullbelly-tzm&utm_campaign=devex)

### oooor Create or link your project with the Netlify CLI

- Create or link a Netlify project
  
  `netlify create` || `netlify link`

- Add the Contentful Space ID
  
  `netlify env:set CONTENTFUL_SPACE_ID XXX`

- Add the Contentful Content Delivery API access token
  
  `netlify env:set CONTENTFUL_CONTENT_API_TOKEN XXX`

- Run Netlify Build to prime your build with the data (this will use your centrally managed env vars)
  
  `netlify build`

- 🎊 You now have data to build against and run it locally
  
  `netlify dev`

