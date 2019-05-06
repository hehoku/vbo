const skipGuide = () => {
  const currUrl = window.document.location.href
  if (currUrl === 'https://weibo.com/nguide/interests') {
    window.document.location.href = 'https://weibo.com/home'
  }
}
window.onload = () => {
  skipGuide()
}
