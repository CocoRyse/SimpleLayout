function init(form) {
    const action = form.action;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let formData = new FormData(form);
        let request = new XMLHttpRequest();
        request.open("POST", action);

        request.onload = () => {
            if (request.status === 200) {
                let response = JSON.parse(request.response);
                Array.from(form.querySelectorAll('div')).forEach(input => {
                    input.style.opacity = '0';
                    input.style.pointerEvents = 'none'
                });
                let messageField = form.parentNode.querySelector('.message-field');
                messageField.innerHTML = `<h2>${response.response}</h2>`;
                messageField.style.opacity = '1';
            } else {
                console.log(request.status);
            }
        };

        request.send(formData);
    })
}

export default {
    init: init
}