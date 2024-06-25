const formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

window.addEventListener('load', function () {
    const storedData = JSON.parse(this.localStorage.getItem(localStorageKey));
    if (storedData) {
        Array.from(form.elements).forEach(function(element) {
            if (element.name && storedData[element.name]) {
                element.value = storedData[element.name];
                formData[element.name] = storedData[element.name];
            }
        });
    }
});

form.addEventListener('input', function (event) {
    if (event.target.name === 'email' || event.target.name === 'message') {
        formData[event.target.name] = event.target.value.trim();
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    };
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let allFieldsFilled = true;
    Array.from(form.elements).forEach(function (element) {
        if (element.name && element.value.trim() === '') {
            allFieldsFilled = false;
            alert('Fill please all fields');
            return;
        }
    });

    if (allFieldsFilled) {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        form.reset();
        formData.email = ''; //але мені ще треба подумати, як зробити, щоб не очищати
        formData.message = ''; //кожне поле окремо (якщо, наприклад, буде 100 полів).
    }
});




