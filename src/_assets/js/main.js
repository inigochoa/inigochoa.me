(function(document) {
  const scrollTopButton = document.getElementById('scrollTopButton')
  if (0 === scrollTopButton.length) {
    return
  }

  scrollTopButton.addEventListener('click', () => window.scroll({ behavior: 'smooth', top: 0 }))

  window.addEventListener('scroll', () => {
    (50 <= window.scrollY)
      ? scrollTopButton.classList.remove('hidden')
      : scrollTopButton.classList.add('hidden')
  })
})(document)
