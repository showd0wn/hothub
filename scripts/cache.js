const LRUCache = require('lru-cache')

const ssrCache = new LRUCache({
  length: (n, key) => n.toString().length + key.toString().length,
  max: 100 * 1000 * 1000,
  maxAge: 1000 * 60 * 10,
})

async function renderAndCache(app, req, res, pagePath, queryParams) {
  const key = req.url

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    // Let's cache this page
    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}

module.exports = renderAndCache
