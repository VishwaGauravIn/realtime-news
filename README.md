# Realtime News
#### What is it?
Just a simple sample website made with NextJS and CSS that shows realtime news.

#### Topics covered
- NextJS basics
- Routing
- Creating API
- Server side fetching from API
- Array Mapping
- NextJS SEO (static and dynamic)
- Modular CSS
- Dynamic Pathing
- Git/GitHub (obvious)
- Environmental Variables
- Server Deployments

**If you are copying this project, please give credits :)**
---

### How to Use it ?
All the steps are same as a typical NextJS project but you need to
**For running Locally**
- **Step 1 :** Go to https://newsapi.org/ and get an API key.
- **Step 2 :** create '.env.locale' file in the root directory
- **Step 3 :** add ``` NEXT_PUBLIC_NEWS_KEY=YOUR_NEWSAPI_KEY ``` line in .env.local
- **Step 4 :** Restart the server so that your environment variables are added to the project

**For Deployment on Vercel/Netlify/GitHub Pages etc**
- **Step 1 :** Go to https://newsapi.org/ and get an API key. (no need to create if you already have)
- **Step 2 :** While deploying, just add the environment variable and its value and you are good to go.


<details>
  <summary>NextJS setup</summary>
  <p>
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
    </p>
</details>
