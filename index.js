const refs = {
  button: document.querySelector('.button'),
  inputFirst: document.querySelector('#first'),
  inputSecond: document.querySelector('#second'),
  select: document.querySelector('.select'),
  form: document.querySelector('.search-form'),
}

refs.form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (
    refs.inputFirst.value.trim() === '' ||
    refs.inputSecond.value.trim() === ''
  ) {
    return alert('Please enter something!')
  }
})

refs.button.addEventListener('click', (e) => {
  e.preventDefault()
  if (
    refs.inputFirst.value.trim() === '' ||
    refs.inputSecond.value.trim() === ''
  ) {
    return alert('Please enter something!')
  }

  let sel = refs.select.value

  if (sel === '/') {
    let sum = Number(refs.inputFirst.value) / Number(refs.inputSecond.value)
    alert(Math.round(sum))
  }
  if (sel === '+') {
    let sum = Number(refs.inputFirst.value) + Number(refs.inputSecond.value)
    alert(Math.round(sum))
  }
  if (sel === '-') {
    let sum = Number(refs.inputFirst.value) - Number(refs.inputSecond.value)
    alert(Math.round(sum))
  }
  if (sel === '*') {
    let sum = Number(refs.inputFirst.value) * Number(refs.inputSecond.value)
    alert(Math.round(sum))
  }
})
