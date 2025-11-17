This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Called it Tripzy, a project which is a test for Avian Solutions. 

Which interesting about this project is i, a new comer to Nextjs, doing this while learning about it, so i will need your feedback to be a better Dev. 

Thank you for taking your time here and checking it for me! <3

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tech Stack
I'm currently using [Next.js](https://nextjs.org), [Reactjs](https://react.dev).

For CSS, i am using [TailwindCSS](https://tailwindcss.com).

And by access to [React Icons](https://react-icons.github.io/react-icons), we got a lot of icon so we can use in my project.

## Explanation

In Tabs Component:

```
I created an Array of Objects to store data, which will help us to render each tab option.
"tilte" for title of the service.
"component" are the name of the icon component in React Icon i mentioned before.
Those others are for specific CSS rules for each icon based on the "component".
```
Then i am using map() to handle that array, to render each object in the array.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
