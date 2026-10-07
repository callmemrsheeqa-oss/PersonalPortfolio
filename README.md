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

Every page also has a **"Muavin tell about Ateeq"** chat button (bottom right), described below.

## Folder structure

```
index.html, about.html, ... cv.html
style.css        all styles (colors are CSS variables at the top)
script.js        mobile menu, scroll reveal, project filter, contact form, CV print
config.js        backend URL for Muavin
cloudflare/worker.js   Muavin backend for GitHub Pages (Cloudflare Worker)
netlify/functions/chat.js   Muavin backend for Netlify
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

## Muavin (AI assistant)

Every page has a **"Muavin tell about Ateeq"** chat button (bottom right). Muavin uses the Gemini API and answers only questions about you. Off-topic questions get a short polite refusal, and unknown details point to your email. Edit what Muavin knows in the FACTS section of `cloudflare/worker.js` (and the same text in `netlify/functions/chat.js` if you use Netlify).

**The API key must never be placed in the website files.** Anything in front-end code can be copied by any visitor. Muavin talks to a small backend that keeps the key secret. GitHub Pages cannot run a backend, so this is why Muavin does not work on GitHub Pages alone. Use one of these two options:

### Option A: GitHub Pages + free Cloudflare Worker (recommended if your site is on GitHub Pages)
1. Create a free account at dash.cloudflare.com, then go to *Workers & Pages, Create, Create Worker*. Name it `muavin` and click Deploy.
2. Click *Edit code*, delete the sample code, paste the whole content of `cloudflare/worker.js`, and click Deploy.
3. Go to the Worker's *Settings, Variables and Secrets*. Add a **Secret** named `GEMINI_API_KEY` with your key. Optionally add a text variable `ALLOWED_ORIGIN` set to your site, e.g. `https://yourname.github.io` (no trailing slash and no path).
4. Open your Worker URL (like `https://muavin.yourname.workers.dev`) in the browser. You should see `{"ok":true,"configured":true}`.
5. Open `config.js` and set `window.MUAVIN_ENDPOINT = 'https://muavin.yourname.workers.dev';`. Upload the changed file to GitHub.

### Option B: Netlify (from a GitHub repository)
1. Import the repository in Netlify (drag-and-drop does not include functions).
2. Add the environment variable `GEMINI_API_KEY` in *Site configuration, Environment variables*, then redeploy. Leave `config.js` as it is.

Optional for both: `GEMINI_MODEL` (default `gemini-2.5-flash`).

### Troubleshooting
- Chat says "Muavin is not available": press F12, open Console, send a message and read the warning. A 404 or 405 means no backend is connected yet (check `config.js`). A 500 means the secret is missing. A 502 means Google rejected the request (check the key and model).
- If the Worker health page shows `"configured":false`, the secret name must be exactly `GEMINI_API_KEY`.
- `index.html` must be at the **root** of the GitHub repository, not inside an extra `site` folder.
- If your key was ever pasted in a public place, create a new one in Google AI Studio and set a usage quota.

## Deploy (free)

**GitHub Pages:** upload the files to the repository root and enable Pages (Settings, then Pages). Muavin needs Option A above.
**Netlify:** import from GitHub. Muavin works with Option B.

## Notes

- Fully responsive with a mobile menu, and no horizontal scrolling.
- Animations are subtle and switch off automatically for users who prefer reduced motion.
- Contact: sunbulbroter@gmail.com
