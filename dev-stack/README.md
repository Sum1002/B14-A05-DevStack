# Dev Stack Builder

Explore popular development technologies and build a stack that fits your next project. Browse tools across frontend, backend, databases, languages, styling, and DevOps, then add your picks to a personal stack.

##  Features

- **Technology library:** Browse technology cards with descriptions, categories, ratings, difficulty levels, and badges.
- **Personal stack builder:** Add technologies to a stack, review your selections, remove individual items, or clear the list.
- **Responsive interface:** Explore the site on mobile, tablet, and desktop, with a shared orange-to-pink-to-violet brand gradient.

##  Built With

- React 19
- JavaScript (ES modules)
- Vite
- Tailwind CSS
- JSON technology data



## React Questions

### 1. What is JSX, and why is it used in React?
JSX lets us describe the page UI in JavaScript using HTML-like syntax. React turns it into elements to display.

### 2. What is the difference between props and state?
Props are values passed into a component by its parent. State is data the component remembers and can update.

### 3. What does the `useState` hook do, and where is it used here?
`useState` stores changing data and lets React re-render when it changes. `App` uses it for the selected stack, and `Navbar` uses it for the mobile menu.

### 4. What does the `useEffect` hook do, and why is it used to load the JSON data?
`useEffect` runs side effects after a component renders. `TechnologyList` uses it to fetch the technology JSON when the list loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
Keys help React tell list items apart between renders, so it can update the correct items efficiently. The technology cards use each technology’s `id`.

### 6. What is conditional rendering? Show one place it is used.
Conditional rendering shows UI based on a condition. The stack panel displays an empty message when the stack has no items, and the technology list displays a spinner while loading.

### 7. How does a parent pass data to a child, and how can a child send something back?
A parent passes data through props. In this project, `App` passes the stack and its setter to `TechnologyList`; the child calls the setter to update the parent’s stack.
