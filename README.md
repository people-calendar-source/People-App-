# People & Talent Hub

Internal collection of Wemolo People & Talent tools and calculators, unified in a single app with a category-based sidebar. Built as static HTML/CSS/JS — no build step, no dependencies, hosted via GitHub Pages.

**Live:** https://people-calendar-source.github.io/People-App-/

## Structure

```
index.html                       ← App shell (sidebar, home page, iframe logic) — rarely needs editing
tools-config.js                  ← The list of tools & categories shown in the app — edit THIS to add/remove tools
urlaubsrechner.html               ← Vacation Calculator
document-splitter-renamer.html    ← Document Splitter & Renamer
vsop-equity-calculator.html       ← VSOP Equity Calculator
shares-calculator.html            ← Shares Calculator
company-car-calculator.html       ← Company Car Calculator
```

Each tool is a fully self-contained `.html` file. The shell (`index.html`) loads the selected tool into an iframe, so tools never interfere with each other's code or styling.

## How it works

- `index.html` reads `tools-config.js` on load and builds the sidebar (with collapsible categories) and the home page cards automatically.
- Clicking a tool lazy-loads its `.html` file into an iframe — nothing loads until you actually open it.
- All 6 category sections (`Legal & Compliance`, `Performance & Reward`, `Development`, `Employee Transitioning`, `Engagement`, `Analytics`) mirror our Notion structure. Empty categories show "Coming soon" until a tool is added.

## Adding a new tool

1. Build the tool as a single, self-contained `.html` file (no external local dependencies).
2. Upload it to this repo (root folder, no subfolder).
3. Open `tools-config.js`, find the right category (or add a new one), and add an entry:

   ```js
   {
     id: "my-tool",
     label: "My New Tool",
     file: "my-tool.html",
     icon: "file",
     description: "One short sentence about what it does."
   }
   ```

   Available icons: `folder`, `trending`, `graduation`, `repeat`, `check`, `barchart`, `calendar`, `file`, `coins`, `users`.

4. Commit. The sidebar and home page update automatically — **`index.html` never needs to be touched.**

## Deployment

- Hosted via **GitHub Pages** (Settings → Pages → Deploy from branch `main`, folder `/root`).
- Every commit to `main` triggers an automatic rebuild (usually live within 1–2 minutes).
- Repo is public — this is intentional, since the underlying formulas (VSOP/equity math, German company car tax rules, vacation calculation logic) are based on public regulations, not confidential business data.

## Design system

All tools share the same visual language: Wemolo purple (`#5046E8`), Albert Sans typeface, white cards on light grey background (`#F2F2F3`), rounded pill inputs. When building a new tool, match this style for consistency.
