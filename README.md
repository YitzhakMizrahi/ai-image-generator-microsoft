# AI Image Generator - Next.js Application

This project is a [Next.js](https://nextjs.org/) application created using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses Azure Functions for serverless architecture and features custom Google Fonts optimized using [`next/font`](https://nextjs.org/docs/basic-features/font-optimization).

## Prerequisites

- Node.js installed on your local machine
- An Azure account

## Setup and Installation

Follow these steps to get the project up and running:

### 1. Install Dependencies

Navigate to the project's root directory and run one of the following commands to install the necessary dependencies:

```bash
npm i
# or
yarn
# or
pnpm i
```

Then, install the dependencies for Azure Functions:

```bash
cd .\azure\ && npm i
# or
cd .\azure\ && yarn
# or
cd .\azure\ && pnpm i
```

### 2. Set Up Environment Variables

Copy the .env.example file to a new file named .env.local and update the variables accordingly:

```bash
cp .env.example .env.local
```

Copy the local.settings.example.json file to a new file named local.settings.json inside the azure directory and update the variables:

```bash
cd ..\azure\ && cp local.settings.example.json local.settings.json
```

### 4. Start the Development Server

From the root directory, start the development server with one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 5. Start Azure Functions

Start Azure Functions using one of these commands:

```bash
cd .\azure\ && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
