function dquery(q) {
  return document.querySelector(q) // literally just a wrapper but i get to type less words
}

function dcreate(tag, className=null, innerHTML=null) {
  const e = document.createElement(tag)
  if (className) {e.className = className}
  if (innerHTML) {e.innerHTML = innerHTML}
  return e
}

async function request(url) {
  const _ = await fetch(url)
  return await _.json()
}
