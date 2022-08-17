const rateModal = document.querySelector('.rate')
const thankYouModal = document.querySelector('.thank-you')
const form = document.querySelector('form')
const btn = document.querySelector('button')
const givenRateSpan = document.querySelector('.given-rate span')

function submitForm(e) {
  e.preventDefault();
  const formData = new FormData(form)
  console.log(formData.get('rate'));
  givenRateSpan.textContent = formData.get('rate');
  rateModal.remove();
  thankYouModal.style.display = 'block';
}

document.querySelector('button').addEventListener('click', submitForm)
document.addEventListener('input', () => {
  btn.removeAttribute('disabled')
})