const formSubscribe = document.getElementById('form-subscribe');
const subscribeEmailInput = document.getElementById('email-subscribe');

formSubscribe.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formSubscribe.checkValidity()) {
        formSubscribe.reportValidity();
        return;
    }

    console.log({ email: subscribeEmailInput.value });
    formSubscribe.reset();
});
