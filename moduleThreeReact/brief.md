# React product card rendering

## Note
Make sure the you have run `yarn install` or `npm install` in this folder!

## Start up the dev environment

- `yarn start` if in this folder
- `npm run dev:react` if you are in the root. 


## Instructions 
The previous two modules have formed the base for this evaluation, the goal will be to render a set of dynamic products requested from shopify's storefront api,
using the product cards, grid and also manipulations we have worked through previously.

In `App.js` you will find it is wired up to pull in a set of data from the `blubolt-demo.myshopify.com` site. Specifically the skateboard collection. 

In the App.js, use your product card structure and render these into a responsive grid manipulating the data as needed. 

Once you have this rendering, there are 4 buttons at the top of the provided app. 
Make these work with your data handling. 


## Hints

- You will need to destructure, and make use of react hooks for usestate.
- For limiting the number of products returned check the count variable.
- Use what you know about array methods from module 2

## Note
  - We suggest making granular components and rendering as need be. 
  - We are looking for succint approaches to minor api data handling and consumption.
  - We are looking for clean error free code, and semantic markup.
