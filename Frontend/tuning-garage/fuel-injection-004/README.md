# ⚙️ Fuel Injection — 004

_A React + Context API Product Explorer_

An interactive **React-powered product listing application** that fetches live product data from an external API and renders dynamic routes with detailed views.

This project focuses on **routing, global state management, API integration, and component-based architecture** — simulating how modern frontend applications handle real-world data.

---

## 🚀 Project Overview

Fuel Injection — 004 is a dynamic product explorer built using:

- React Router for multi-page navigation
- Context API for global state management
- Axios for API requests
- Bootstrap for styling

The application fetches product data from a public API and allows users to:

- Browse products
- Navigate between pages
- View detailed product descriptions
- Move back using programmatic navigation

This reflection emphasizes how frontend applications connect to APIs and distribute data across multiple components.

---

## 🛠️ Technologies Used

- **React** — Component-based UI
- **React Router DOM** — Routing & navigation
- **Context API** — Global state management
- **Axios** — HTTP requests
- **Bootstrap** — UI styling
- **Fake Store API** — External product data source
- **Git & GitHub** — Version control

---

## ✨ Key Features

- Global product state using Context Provider
- API-based dynamic product fetching
- Multi-route navigation system
- Dynamic route parameters
- Programmatic navigation (Go Back button)
- Conditional rendering for loading state
- Active navigation highlighting
- Bootstrap card-based UI layout

---

## 📌 Core Concepts Implemented

### 1️⃣ Context API for Global State

Product data is fetched once and stored inside a Context Provider.

All components access shared data without prop drilling.

This demonstrates centralized state distribution in React applications.

---

### 2️⃣ API Integration with Axios

Data is fetched from an external REST API.

The response is stored in state and distributed across components.

This shows how frontend apps consume backend services.

---

### 3️⃣ React Router Architecture

The application includes multiple routes:

- Home
- About
- Service
- Blog
- Dynamic category detail route

Dynamic routing allows rendering product details based on URL parameters.

---

### 4️⃣ Dynamic Route Parameters

Each product detail page is rendered using route parameters.

This demonstrates how React Router extracts URL data and renders corresponding content.

---

### 5️⃣ Programmatic Navigation

The “Go Back” button uses navigation hooks to redirect users programmatically.

This mimics real-world UX patterns in dashboard and e-commerce applications.

---

### 6️⃣ Conditional Rendering

When data is not yet available, a loading state is shown.

This improves user experience and prevents rendering errors.

---

## 🧠 What I Learned

Through this project, I strengthened my understanding of:

- Managing global state using Context
- Handling asynchronous API calls
- Structuring multi-page React applications
- Using dynamic routes effectively
- Avoiding prop drilling
- Building scalable frontend architecture

This reflection represents a transition from static UI builds to **data-driven React applications**.

---

## 📂 Project Structure

Fuel Injection — 004 follows a modular architecture:

- Entry point with BrowserRouter
- Context Provider wrapping the application
- Central routing configuration
- Reusable navigation component
- Page-based component separation
- Utility folder for API configuration

---

## 🎯 Purpose of This Reflection

Fuel Injection — 004 focuses on **real-world frontend structure**.

Unlike simple UI projects, this build:

- Connects to external APIs
- Shares state globally
- Uses dynamic routing
- Separates concerns cleanly

It reflects how production-level React applications are structured.

---

## 📷 Project Preview

https://github.com/user-attachments/assets/5efc6662-d762-4654-95d1-fcf35427fd7a

---

## 🔥 Part of

**Fuel Injection Series** — A structured frontend learning path focused on building scalable, API-driven React applications.

---

## 📬 Feedback

Suggestions, improvements, or feature ideas (like adding product filtering, search functionality, pagination, or cart integration) are welcome.

Feel free to fork ⭐, star ⭐, or open an issue.
