# Next.js + Redux Toolkit + TypeScript + Tailwind CSS

A production-ready setup demonstrating how to integrate **Redux Toolkit** with **Next.js (App Router)** using **TypeScript** and **Tailwind CSS**. This project follows current best practices, including typed hooks, client-only providers, and scalable folder structure.

---

## 🚀 Tech Stack

* **Next.js** (App Router)
* **TypeScript**
* **Redux Toolkit (RTK)**
* **React Redux**
* **Tailwind CSS**

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout (Redux + Tailwind setup)
│   ├── page.tsx          # Example page using Redux state
│   └── globals.css       # Tailwind CSS imports
│
├── lib/
│   ├── store.ts          # Redux store configuration
│   ├── hooks.ts          # Typed Redux hooks
│   ├── providers/
│   │   └── ReduxProvider.tsx
│   ├── features/
│   │   └── counter/
│   │       └── counterSlice.ts
│   └── services/         # (Optional) RTK Query APIs
│
├── tailwind.config.ts
├── postcss.config.js
└── package.json
```

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🧠 Redux Toolkit Setup

### Store Configuration

Redux store is configured using `configureStore` and fully typed.

**`src/lib/store.ts`**

* Combines reducers
* Exports `RootState` and `AppDispatch` types

---

### Typed Redux Hooks (Recommended)

To avoid repetitive typing across components:

**`src/lib/hooks.ts`**

* `useAppDispatch`
* `useAppSelector`

These hooks should be used instead of `useDispatch` and `useSelector` directly.

---

### Redux Slice Example

**Counter Slice** demonstrates standard Redux Toolkit patterns:

* `createSlice`
* Immutable logic using Immer
* Strongly typed state and actions

**Location:**

```
src/lib/features/counter/counterSlice.ts
```

---

## 🔌 Redux Provider (Client Component)

Redux must run on the client in Next.js App Router.

**`src/lib/providers/ReduxProvider.tsx`**

* Uses `"use client"`
* Wraps the app with `<Provider store={store} />`

This provider is injected at the root layout level.

---

## 🌐 Root Layout Setup

**`src/app/layout.tsx`**

Responsibilities:

* Import `globals.css`
* Wrap application with `ReduxProvider`

This ensures Redux and Tailwind are available throughout the app.

---

## 🎨 Tailwind CSS Setup

### Tailwind Configuration

Ensure `content` includes the App Router paths:

```
./src/app/**/*.{js,ts,jsx,tsx,mdx}
./src/components/**/*.{js,ts,jsx,tsx}
./src/lib/**/*.{js,ts,jsx,tsx}
```

### Global Styles

**`src/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind is imported **once** at the root layout.

---

## 🧪 Example Usage

Redux state is accessed only inside **client components**.

**`src/app/page.tsx`**

* Reads state using `useAppSelector`
* Dispatches actions using `useAppDispatch`
* Styled using Tailwind utility classes

---

## ⚠️ Important Rules

1. Redux logic runs **only in client components**
2. Always use typed hooks
3. Tailwind requires `globals.css` to be imported in `layout.tsx`
4. Restart the dev server after Tailwind config changes
5. Prefer **RTK Query** for API data

---

## 📡 Optional: RTK Query

RTK Query can be added for API calls:

* Create API slice in `lib/services/`
* Add API reducer and middleware to the store
* Use auto-generated hooks in components

---

## ✅ When to Use Redux

Use Redux when:

* State is shared across many pages
* Business logic is complex
* Predictable state management is required

Avoid Redux when:

* State is local to a single component
* Server Components or props are sufficient

---

## 📄 License

This project is for learning and development purposes. You may adapt and reuse the structure freely.

---

## ✨ Author

Built as a reference implementation for **Next.js + Redux Toolkit + TypeScript** following modern best practices.
