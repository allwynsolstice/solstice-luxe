How to replace the clean placeholders with real photos (local, no hotlinking):

1) Open assets/image_manifest.json and pick the Unsplash link for each file you'd like to replace.
2) Download the photo from Unsplash (click the link, then 'Download' on the page). Save it with the EXACT filename listed:
   - assets/destinations/winter-1.jpg
   - assets/destinations/winter-2.jpg
   - ... etc.
3) Keep the same sizes if possible (approx 1600x900 for destinations, 1400x900 for hero).
4) Commit to GitHub → Vercel redeploys → your live site will use the new local images.

Tip: you can always preview a specific season with ?season=winter (or spring/summer/autumn) and ?debug=1
