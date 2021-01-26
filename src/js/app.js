import Form from './form.js'

window.addEventListener('DOMContentLoaded', () => {
    Array.from(document.querySelectorAll('form')).forEach(form => Form.init(form))
});
