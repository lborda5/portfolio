# Your Personal Portfolio

A free, single-page portfolio site (plain HTML/CSS/JS, no build step, no frameworks)
inspired by the structure of https://filippocastellani.github.io/Portfolio/ — a sidebar
profile card, tabbed navigation (About / Resume / Projects / Publications / Contact),
timeline-style resume, project cards, and a contact form.

## 1. Customize the content

Open `index.html` in any text editor and replace the placeholder text (marked with
`[brackets]` or generic labels like "Your Name") with your own information:

- Sidebar: your name, title, email, location, and social links (LinkedIn, GitHub, resume link).
- **About** tab: your intro paragraph(s) and the four "interested in" cards.
- **Resume** tab: education, experience, and skills. Put your real resume PDF at
  `assets/files/resume.pdf` (the download button already links there).
- **Projects** tab: one card per project. Replace `project-img-placeholder` divs with
  real `<img>` tags pointing at images in `assets/images/projects/`.
- **Publications** tab: papers, posters, or talks — delete this whole `<article>` block
  (and its navbar link) if it doesn't apply to you.
- **Contact** tab: your email/LinkedIn, and the form. The form currently points at a
  placeholder Formspree endpoint (see step 3).

Replace `assets/images/avatar-placeholder.svg` with a real photo of yourself (any
`.jpg`/`.png` works — just update the `src` and `alt` in the `<figure class="avatar-box">`
tag).

## 2. Preview it locally

No install needed — just open `index.html` directly in a browser, or run a tiny local
server from this folder so relative paths behave exactly like they will online:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## 3. (Optional) Make the contact form actually send email

The form currently posts to `https://formspree.io/f/yourFormId`, which won't work until
you set up a real endpoint. [Formspree](https://formspree.io) has a free tier (50
submissions/month): sign up, create a form, and paste your real form ID into the
`action` attribute in the Contact section of `index.html`. Alternatively, just delete
the `<form>` and keep the "Feel free to reach out via email" text above it.

## 4. Deploy for free with GitHub Pages

1. Create a free GitHub account if you don't have one, and create a new **public**
   repository (e.g. `portfolio`).
2. Push these files to it:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to the repo's **Settings → Pages**, and under "Build and deployment"
   set Source to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. After a minute or two, your site will be live at:
   `https://YOUR_USERNAME.github.io/portfolio/`
   (Settings → Pages will show you the exact URL once it's ready.)

Any time you push a new commit, GitHub Pages automatically redeploys — no extra steps.

### Custom domain (optional, not free)

If you later buy a domain (e.g. from Namecheap or Google Domains), you can point it at
GitHub Pages by adding a `CNAME` file with your domain name and configuring DNS — GitHub's
Pages documentation walks through this exact process.

## File structure

```
index.html              main page (all 5 tabs live here)
assets/css/style.css    all styling (dark theme, responsive)
assets/js/script.js     tab-switching + mobile "show contacts" toggle
assets/images/          avatar, favicon, project images
assets/files/           put resume.pdf here
```
