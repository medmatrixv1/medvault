MedVault PWA (Figma "Health Tech Platform Design" theme)

Files: index.html (app), sw.js (offline cache), manifest.webmanifest, icons/, fonts/ (self-hosted).
Run locally:  python3 -m http.server 8000   then open http://localhost:8000
Deploy: upload this folder to any static host (Vercel, Netlify, GitHub Pages). Needs HTTPS to install as an app.
Data stays in the browser (localStorage) by default. Optional cloud sync with Supabase is off until configured: see SUPABASE-SETUP.md and supabase-setup.sql.
