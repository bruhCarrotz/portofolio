/* ============================================================
   posts.js — Blog post registry
   ============================================================

   HOW TO ADD A POST:
   1. Add an entry to the POSTS array below (slug, title, description, date, tag)
   2. Create the file:  posts/<slug>.html
      — This is a content fragment only, no <html>/<head>/<body> tags.
      — Start with an <h1> and a .post-meta div, then your content.
      — You have full HTML: images, callout boxes, tables, embeds — anything goes.

   EXAMPLE post file (posts/my-first-post.html):

      <h1>My First Post</h1>
      <div class="post-meta">
        <span>May 2026</span>
        <span class="blog-tag">Payments</span>
      </div>
      <hr/>
      <p>Your content here.</p>
      <blockquote>Callout quote.</blockquote>
      <div class="callout"><strong>Note:</strong> Use .callout for highlighted boxes.</div>

   ============================================================ */

var POSTS = [

  {
    slug:        "example-post",
    title:       "An Example Post",
    description: "A demo showing how HTML-based posts work — edit or delete this entry.",
    date:        "May 2026",
    tag:         "Meta"
  },

  // Add more posts here ↓
  // {
  //   slug:        "emv-contactless-explainer",
  //   title:       "How EMV Contactless Actually Works",
  //   description: "A plain-language walkthrough of the tap-to-pay transaction flow.",
  //   date:        "Apr 2026",
  //   tag:         "Payments"
  // },

];
