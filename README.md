<<<<<<< HEAD
# Ateeq Ur Rehman: Personal Portfolio Website

A multi-page static portfolio website built with plain HTML, CSS and JavaScript. There is no framework, no build step and no dependencies, apart from Google Fonts (Fraunces and Inter), which fall back to system fonts if offline.

## Run it locally

1. Extract the zip.
2. Double-click `index.html` to open it in your browser.

Optional local server (recommended for testing):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `about.html` | About |
| `education.html` | Education |
| `skills.html` | Skills |
| `projects.html` | Projects (with category filters) |
| `learning.html` | Currently Learning |
| `journey.html` | Journey (internship, teaching, society) |
| `interests.html` | Interests |
| `contact.html` | Contact (email, social links, form) |
| `cv.html` | CV (printable, Save as PDF) |

Every page also has an **"Ask about Ateeq"** chat button (bottom right), described below.

## Folder structure

```
index.html, about.html, ... cv.html
style.css        all styles (colors are CSS variables at the top)
script.js        mobile menu, scroll reveal, project filter, contact form, CV print
netlify/functions/chat.js   secure server-side proxy for the AI assistant (holds the API key logic)
netlify.toml     Netlify settings
assets/
  profile.jpg            profile photo shown on the Home page
  sketch.png             pencil-sketch portrait (full size)
  favicon-64.png         browser tab icon (circular pencil sketch)
  favicon.ico            fallback tab icon
  apple-touch-icon.png   icon for phones when saved to the home screen
```

## Common edits

- **Profile photo:** replace `assets/profile.jpg` (square image, about 600x600 px).
- **Browser tab icon (sketch):** replace `assets/favicon-64.png`, `assets/favicon.ico` and `assets/apple-touch-icon.png`.
- **Colors:** edit the variables at the top of `style.css` (`--accent`, `--warm`, `--bg`, and so on). Dark mode values are in the `prefers-color-scheme: dark` block right below.
- **Text and projects:** edit the relevant `.html` file directly. Look for orange `[Placeholder: ...]` text and fill in the real details (project results, MCB internship tasks, ZDS responsibilities).
- **Add a project:** copy an existing `<article class="card proj rv" ...>` block in `projects.html`. Set `data-cat` to `ml`, `web`, `app` or `con` so the filter works. Status badge options are Built, In Progress and Concept.
- **GitHub / demo buttons:** add `<a class="btn sm" href="...">GitHub</a>` inside the project card once you have a repository or live link.

## CV

`cv.html` is a printable CV built from the same information as the website. Click **Download CV (PDF)** and choose **Save as PDF** in the print window. If you want a ready-made PDF file, save it as `assets/Ateeq_Ur_Rehman_CV.pdf` and link to it.

## Contact form

The form opens the visitor's email app with the message filled in (a `mailto:` link to sunbulbroter@gmail.com). To receive messages directly from the page, use a form service such as Formspree: set the form's `action` to your endpoint and remove the `submit` handler in `script.js`.

## AI assistant ("Ask about Ateeq")

A chat button on every page lets visitors ask questions about you. It uses the Gemini API and is limited to facts about you. Off-topic questions get a short polite refusal, and unknown details point to your email.

**Important: the API key is never stored in the website files.** Putting a key in front-end code would let anyone copy it from the browser and use it. Instead the browser talks to `netlify/functions/chat.js`, which adds the key on the server.

Setup:
1. Deploy the site on **Netlify from a GitHub repository** (or with the Netlify CLI). Drag-and-drop deploys do not include functions, and GitHub Pages cannot run them.
2. In Netlify go to *Site configuration, then Environment variables* and add `GEMINI_API_KEY` with your key. Redeploy.
3. Optional: add `GEMINI_MODEL` (default `gemini-2.5-flash`) to change the model.
4. Local testing: copy `.env.example` to `.env`, add the key, and run `npx netlify dev`. `.env` is already in `.gitignore`.

To change what the assistant knows, edit the FACTS section at the top of `netlify/functions/chat.js`. If you open the site as plain files, the chat shows a polite "not available" message, and everything else works normally.

Keep your key private: if it was ever pasted into a public place, create a new one in Google AI Studio and use that instead. Set a usage quota there too.

## Deploy (free)

**Netlify (needed for the AI assistant):** push the folder to GitHub, then "Import from Git" in Netlify.
**GitHub Pages / Netlify drag-and-drop:** the website works, but the AI assistant will not.

## Notes

- Fully responsive with a mobile menu, and no horizontal scrolling.
- Animations are subtle and switch off automatically for users who prefer reduced motion.
- Contact: sunbulbroter@gmail.com
=======
# PersonalPortfolio
>>>>>>> 91bd8ca9de76c7177f57ba539a1711d583a4ca19
