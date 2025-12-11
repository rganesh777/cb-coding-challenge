# CB Coding Challenge

## How to Run this App

Go into the App Folder: cb coding challenge

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

## Features

- **Table View:** Displays incident details (Icon, name, date, priority, location)
- **Location Filtering:** Filter incidents by location
- **Sorting:** Incidents sorted by priority (asc) and datetime (desc), with duplicates removed
- **Responsive Design:** list view for screens < 600px
- **Hover Effects:** Background color changes when you hover the incidents

## Architecture

- **Component Structure:** Separate components for Incidents, Incident, and IncidentHeader
- **Type Safety:** Dedicated types file for all TypeScript interfaces
- **Utility Functions:** Centralized utility functions for API calls and helpers
- **Performance:** React.memo optimization to prevent unnecessary re-renders
- **Error Handling:** try-catch blocks for all API calls
- **Efficient Data Fetching:** Location data mapped once at parent level to avoid redundant API calls

## Build & Deployment

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy to:

- **Vercel** or **Netlify** (recommended) (Have used Netlify in my previous Company)
  1. Push code to GitHub
  2. Connect repo to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
  3. Auto-deploys on every push to main branch

**Free with GitHub Pages:**

- Update `vite.config.ts` with base path, then push to `gh-pages` branch

**Traditional Hosting:**

- Upload `dist/` folder to your server and configure to serve `index.html` for all routes

## Future Improvements

- Add unit tests for all components - Must.
- Current CSS is placed in App.css because the project is small and simple. For larger applications, it's better to use more scalable styling solutions such as utility frameworks (e.g., Tailwind CSS) or CSS-in-JS libraries.
- Favicon needs to be updated.
- Implement loading states during API calls
- Accessibility improvements (ARIA labels, keyboard navigation)

- Search functionality - filter incidents by name or priority
- Multi filters - allow filtering by multiple priorities
- Can also add sort by option if required.
- Pagination - handle large incident lists efficiently
- Incident details modal - click to view full incident information
- E2E tests - add Cypress or Playwright tests
- Performance monitoring - analytics and error tracking
