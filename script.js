/* ============================================================
   script.js — Your Name Finance & Consulting
   ============================================================ */

/* ── NAVIGATION ── */
function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

/* ── BLOG MODAL ── */
function openPost(readmePath, title) {
  const overlay = document.getElementById('blog-modal-overlay');
  const content = document.getElementById('blog-modal-content');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  content.innerHTML = '<p class="blog-loading">Loading…</p>';

  fetch(readmePath)
    .then(r => { if (!r.ok) throw new Error(); return r.text(); })
    .then(md => { content.innerHTML = parseMarkdown(md); })
    .catch(() => {
      content.innerHTML =
        '<h1>' + title + '</h1><hr/>' +
        '<p style="color:var(--ink-muted);font-style:italic;margin-top:1rem;">' +
        'README not found at <code>' + readmePath + '</code>.<br/>' +
        'Create that file relative to index.html and it will load here automatically.' +
        '</p>';
    });
}

function closeModal() {
  document.getElementById('blog-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on backdrop click
document.getElementById('blog-modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

/* ── MINIMAL MARKDOWN PARSER ── */
function parseMarkdown(md) {
  let html = md
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm,  '<h2>$1</h2>')
    .replace(/^# (.+)$/gm,   '<h1>$1</h1>')
    .replace(/^---$/gm, '<hr/>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^\> (.+)$/gm, '<blockquote>$1</blockquote>');

  const blocks = html.split(/\n\n+/);
  return blocks.map(function(block) {
    const t = block.trim();
    if (!t) return '';
    if (/^<(h[1-6]|hr|blockquote|ul|ol|li)/.test(t)) return t;
    const lines = t.split('\n');
    const liItems = lines
      .filter(l => /^[-*] /.test(l))
      .map(l => '<li>' + l.replace(/^[-*] /, '') + '</li>');
    if (liItems.length === lines.length) return '<ul>' + liItems.join('') + '</ul>';
    return '<p>' + t.replace(/\n/g, ' ') + '</p>';
  }).join('\n');
}
