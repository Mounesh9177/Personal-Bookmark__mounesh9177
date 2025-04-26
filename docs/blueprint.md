# **App Name**: Bookmark Butler

## Core Features:

- Bookmark Display: Display bookmarks in a grid or list format, with clickable titles that open the URL in a new tab.
- Add Bookmark Form: Form to add new bookmarks with title, URL (validated), and category selection. Categories include at least three options.
- Filtering and Theme Toggle: Allow users to filter bookmarks by category with an 'All' option.  Implement a toggle for light/dark mode.

## Style Guidelines:

- Primary color: Neutral white/light gray for light mode, dark gray/black for dark mode.
- Secondary color: Muted blue/green for highlights and accents.
- Accent: Teal (#008080) for interactive elements.
- Clean, minimalist layout with clear separation of content.
- Simple, outline-style icons for actions and categories.
- Subtle transitions and animations for a smooth user experience.

## Original User Request:
You'll be creating a fun little Personal Bookmark Manager app! We picked this project because
it's both practical and a great learning opportunity.
With this app, users should be able to:
1. See all their saved bookmarks in a nice list or grid 📋
2. Add new bookmarks (with a URL and title) ➕
3. Remove bookmarks they don't want anymore 🗑
4. Filter bookmarks by category/tag 🏷
5. Switch between light and dark mode (because who doesn't love dark mode?) 🌓

Technologies 🛠
● Next.js: A React framework that enables functionality like server-side rendering and
generating static websites ⚛️
● TypeScript: A strongly typed programming language that builds on JavaScript 📝
● Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces
🎨

Requirements 📋
1. Data Structure 🏗
Create a TypeScript interface for your bookmark data structure:
interface Bookmark {
id: string;
title: string;
url: string;
category: string;
createdAt: Date;
}

2. Pages/Components to Create 🧩
Home Page (app/page.tsx) 🏠
● Display a list of bookmarks
● Include filtering functionality
● Implement a toggle for light/dark mode
Add Bookmark Form ➕
● Form to add new bookmarks with the following fields:
○ Title (required)
○ URL (required, must be a valid URL)

○ Category (dropdown with at least 3 options)

Bookmark List Component 📑
● Display bookmarks in a card or list format
● Each bookmark should show:
○ Title (clickable, opens URL in new tab)
○ URL (truncated if too long)
○ Category
○ Delete button

Bookmark Filter Component 🔍
● Allow filtering by category
● Include an "All" option to show all bookmarks
3. State Management 🧠
Since this is a small application, use React's useState and useEffect hooks for state
management.
● Store bookmarks in state 📊
● Implement functions for adding and deleting bookmarks ✏️
● Save bookmarks to localStorage to persist data between sessions 💾
4. Styling with Tailwind CSS 🎨
● Create a responsive design that works on both mobile and desktop 📱💻
● Implement a light/dark mode toggle 🌓
● Style your components using Tailwind CSS utilities ✨
● Make the UI clean and user-friendly 😊
5. Type Safety with TypeScript 🛡
● Ensure all components and functions are properly typed 📝
● Use TypeScript features like interfaces, types, and generics where appropriate 🧰
● Handle potential null/undefined values properly ⚠️
  