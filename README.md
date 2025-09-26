# Solstice Luxe — v28

Static site prepared for GitHub → Vercel.

## Deploy (Quick)
1. Push this folder to a GitHub repo (`main` or `master`).
2. In Vercel: **Add New → Project**, import this repo.
   - Framework preset: **Other**
   - Build command: *(leave blank)*
   - Output directory: *(leave blank)*
3. Deploy — Vercel will serve `index.html` from the repo root.

## Notes
- `vercel.json` enables clean URLs and long cache for assets in `/assets/`.
- `.gitignore` excludes `.vercel/` and OS junk.
