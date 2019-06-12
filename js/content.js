const skipGuide = () => {
  const currUrl = window.document.location.href
  if (currUrl === 'https://weibo.com/nguide/interests') {
    window.document.location.href = 'https://weibo.com/home'
  }
}
window.onload = () => {
  skipGuide()
  const logo = document.querySelector('#plc_top > div > div > div.gn_logo > a')
  console.log(logo.href)
  const logoUrl = '?topnav=1&wvr=6&mod=logo'
  logo.href = logo.href.replace(logoUrl, '?is_new=1&leftnav=1')
}
