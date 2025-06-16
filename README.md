This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

------------------------------------

# 🪙 Crypto Explorer

A modern cryptocurrency dashboard built with **Next.js 15+ App Router**, **TypeScript**, and **Tailwind CSS** — fetches market data from the [CoinGecko API](https://www.coingecko.com/en/api) and displays paginated crypto cards with dynamic routing.

## 🚀 Features

- ⚡ Paginated cryptocurrency list from CoinGecko (USD) with client-side data fetching via a custom React hook (`useCryptoList`)  
- 🔍 Dynamic routes for individual coin details (`/crypto/[id]`)  
- 💅 Responsive, accessible UI built with Tailwind CSS and modular components (`CryptoCard`, `Pagination`, etc.)  
- 🌀 Loading skeletons and graceful error fallback UI (`ErrorFallback`) for smooth UX  
- ✅ Follows best practices for **Next.js 15 App Router** with full pagination (Next/Prev) support  

## 🏗 Tech Stack

| Tool             | Purpose                             |
|------------------|-------------------------------------|
| **Next.js 15**   | App Router, server + client routing |
| **React**        | UI logic, component system          |
| **TypeScript**   | Type safety                         |
| **Tailwind CSS** | Styling and responsive layout       |
| **CoinGecko API**| Live market data                    |

---

## 🔁 Data Fetching Strategy

The app currently uses a **custom `useCryptoList` hook** with `useEffect` and native `fetch()` to retrieve data on the client side. This is lightweight and fine for a basic use case.

👉 **Future improvement**: plan to switch to [TanStack React Query](https://tanstack.com/query) to improve data handling, caching, pagination, and dev experience.

---

## 🔄 Loading and Error Handling

### ✅ Server Component Pages (`/crypto/[id]`)
- **Loading**: handled via `app/crypto/[id]/loading.tsx`  
- **Error**: handled via `app/crypto/[id]/error.tsx` with retry (`reset()`)

### ✅ Client Component Page (`/crypto`)
- **Loading**: via `isLoading` from `useCryptoList` → renders `<SkeletonCard />`  
- **Error**: via `error` from hook → renders `<ErrorFallback />`

---

## 📈 Current Pages

| Route             | Purpose                                 |
|-------------------|-----------------------------------------|
| `/crypto`         | Client page with paginated crypto cards |
| `/crypto/[id]`    | Dynamic server-rendered coin details    |

---

## 🧱 Core Components

| Component         | Description                             |
|-------------------|-----------------------------------------|
| `CryptoCard`      | Displays each coin’s price, image, etc. |
| `Pagination`      | Handles next/prev page controls         |
| `SkeletonCard`    | Loading state for crypto list           |
| `ErrorFallback`   | Friendly error UI for client pages      |

---

## 🎯 Future Improvements

- 🧠 **Switch to React Query** for better caching, pagination, and refetching  
- 🌐 **Language support**  
- 🔀 **Sort functionality**  
- 📈 **Search and filter** crypto by name, rank, or volume  
- 🦄 **Framer Motion animations** for page transitions  
- 🧪 **Test suite** (unit + integration with Playwright or Vitest)  
- 🌙 **Dark mode** toggle  
- 🔐 **Wallet Connect** + Web3 support (e.g. "Buy Me a Coin")  

---

## 🧑‍💻 Developer Notes

- Follows modern best practices (App Router, file-based routing, suspense boundaries)  
- `loading.tsx` and `error.tsx` are used **only for server components**  
- All styling is handled with **Tailwind**, responsive out of the box  
- Designed to be easy to scale and switch data fetching layer later  

---

