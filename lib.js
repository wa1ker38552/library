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

async function requestRaw(url) {
  const _ = await fetch(url)
  return _
}

function animateOpenModal(m) {
  m.style.display = ""
  m.style.opacity = "1"
  m.style.background = "rgba(0, 0, 0, 0.8)"
  m.style.animation = "fade-in 0.3s"
  m.children[0].style.animation = "move-up 0.3s"
}

function animateCloseModal(m) {
  setTimeout(function() {
    m.style.display = "none"
  }, 301)
  m.children[0].style.animation = "move-down 0.3s"
  m.style.animation = "fade-out 0.3s"
  m.style.opacity = 0
}

class time {
  // time related things
  static sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
  }
}

class random {
  // basically the random module in python
  static choice(list) {
      return list[Math.floor(Math.random() * list.length)]
  }

  static randint(a, b) {
      return Math.floor(Math.random() * (b - a + 1)) + a
  }
}

class requests {
  async get(url) {
    return request(url)
  }
}

const getRelativeTime = (date) => {
  const units = [
    { name: 'year', value: 31536000000 },
    { name: 'month', value: 2592000000 },
    { name: 'day', value: 86400000 },
    { name: 'hour', value: 3600000 },
    { name: 'minute', value: 60000 },
    { name: 'second', value: 1000 }
  ]
  
  const diff = date - new Date()
  
  for (const unit of units) {
      const value = Math.round(diff / unit.value)
      if (value) return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(value, unit.name)
  }
  
  return 'just now'
};