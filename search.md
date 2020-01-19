---
title: Search
layout: default
---

<input id="in_Default" type="text" placeholder="Search.." name="search" autocomplete="off">
<hr/>
<ol id="results-container">ol>
<!-- script pointing to search.js -->
<script src="{{ site.baseurl }}/assets/js/search.js"></script>

<script>
var sjs = SimpleJekyllSearch({
searchInput: document.getElementById('in_Default'),
resultsContainer: document.getElementById('results-container'),
json: '{{ site.baseurl }}/search.json'
})
</script>
