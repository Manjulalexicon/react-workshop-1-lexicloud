# LexiCloud Landing Page

A modern, responsive landing page built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **lucide-react**. This project recreates the provided HTML design by using reusable React components and props while following good frontend development practices.

---

## 🚀 Technologies Used

- React 19
- Vite
- TypeScript
- Tailwind CSS
- lucide-react

---

## 📁 Project Structure

```text
react-workshop-1-lexicloud
│
├── public
│
├── src
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── Features.tsx
│   │   ├── Stats.tsx
│   │   ├── PricingCard.tsx
│   │   ├── Pricing.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CallToAction.tsx
│   │   └── Footer.tsx
│   │
│   ├── data
│   │   └── data.ts
│   │
│   ├── types
│   │   └── index.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# Components Created

## 1. Navbar

**Purpose**

Displays the website logo, navigation links, and the Get Started button.

---

## 2. Hero

**Purpose**

Introduces the company with a headline, description, call-to-action buttons, and a cloud icon.

---

## 3. Features

**Purpose**

Displays all available business features.

This component loops through the feature data and renders reusable FeatureCard components.

---

## 4. FeatureCard

**Purpose**

Displays a single feature including:

- Icon
- Title
- Description

This component is reusable and receives data through props.

---

## 5. Stats

**Purpose**

Displays company statistics including:

- Clients
- Uptime
- Experts
- Countries

---

## 6. Pricing

**Purpose**

Displays all pricing plans.

It maps through the pricing data and renders PricingCard components.

---

## 7. PricingCard

**Purpose**

Displays a single pricing plan including:

- Plan name
- Price
- Included features
- Button

---

## 8. Testimonials

**Purpose**

Displays customer testimonials.

It maps over testimonial data and renders TestimonialCard components.

---

## 9. TestimonialCard

**Purpose**

Displays a customer's review and name.

---

## 10. CallToAction

**Purpose**

Encourages users to start using the platform.

Contains:

- Heading
- Description
- Button

---

## 11. Footer

**Purpose**

Displays company information and contact details.

---

# Props Used

## FeatureCard

Receives:

```tsx
feature
```

Example:

```tsx
<FeatureCard feature={feature} />
```

---

## PricingCard

Receives:

```tsx
plan
```

Example:

```tsx
<PricingCard plan={plan} />
```

---

## TestimonialCard

Receives:

```tsx
testimonial
```

Example:

```tsx
<TestimonialCard testimonial={testimonial} />
```

---

# Why Props Were Used

Props were used to make components reusable and dynamic.

Instead of creating multiple identical components manually, one reusable component was created and different data objects were passed through props.

Benefits include:

- Less code duplication
- Better maintainability
- Easier updates
- Improved scalability
- Cleaner project structure

---

# How Components Work Together

The application starts in **App.tsx**.

App.tsx imports and renders all page sections in the following order:

1. Navbar
2. Hero
3. Features
4. Stats
5. Pricing
6. Testimonials
7. CallToAction
8. Footer

Some components receive data from `data.ts` and display it by mapping over arrays and passing each object to reusable child components using props.

---

# Data Management

The project stores reusable data inside:

```text
src/data/data.ts
```

The following arrays are maintained:

- features
- statistics
- pricingPlans
- testimonials

Keeping data separate from UI makes the application easier to maintain.

---

# TypeScript

TypeScript interfaces are used to define the structure of the application data.

Interfaces include:

- Feature
- PricingPlan
- Testimonial

Using TypeScript improves type safety and reduces runtime errors.

---

# Responsive Design

The application uses Tailwind CSS utility classes to create a responsive layout.

Examples include:

- Responsive Grid
- Flexbox
- Mobile Navigation
- Responsive Padding
- Responsive Typography

---

# How to Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Learning Outcomes

This project demonstrates:

- React Components
- Functional Components
- Component Composition
- Reusable Components
- Props
- TypeScript Interfaces
- Array Mapping
- Responsive Design
- Tailwind CSS
- Project Organization
- Git Version Control

---

# Author

**Manjula**

GitHub:
https://github.com/Manjulalexicon

LinkedIn:
https://www.linkedin.com/in/manjula-natarajan-256228282/

---

## Thank You