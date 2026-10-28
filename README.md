# wdd430-portfolio

A personal portfolio site built with Next.js (App Router), TypeScript and Tailwind CSS for WDD 430, Week 01.

## Live site
Vercel URL: **PASTE-YOUR-VERCEL-URL-HERE**

## Pages
- `/` Home: portfolio projects shown as cards
- `/about` About: bio and skill cards
- `/api/hello` API route returning JSON: `{ "message": "Hello from Next.js API!" }`

## Project structure
```
app/
  layout.tsx          root layout (Header, children, Footer)
  page.tsx            home page
  about/page.tsx      about page
  api/hello/route.ts  GET endpoint
components/
  Header.tsx          navigation (Home, About)
  ProjectCard.tsx     one project, typed props, optional link
  ProjectList.tsx     maps projects to ProjectCard
  Footer.tsx          copyright with current year
  SkillCard.tsx       custom component: a skill category and its skills
```
All components are Server Components styled with Tailwind CSS.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

```bash
npm run lint
npm run build
```

## Tech
Next.js 16, React 19, TypeScript, Tailwind CSS 4, ESLint. Deployed on Vercel.

## Author
Onwude James Uchenna
