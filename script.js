/* ============================================================
   script.js — Your Name Finance & Consulting
   ============================================================
   HOW TO RUN LOCALLY:

     Python 3:  python -m http.server 8000
     Node:      npx serve .
     VS Code:   Right-click index.html → "Open with Live Server"

   Then open: http://localhost:8000

   TO ADD A BLOG POST:
   1. Create posts/your-slug/README.md
   2. Copy a .blog-card in index.html, set href="post.html?slug=your-slug"
   ============================================================ */

/* ── NAVIGATION ── */
function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  window.scrollTo(0, 0);
}