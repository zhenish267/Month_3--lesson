//* form el
const form = document.getElementById('form');

//* validation
const validate = {
    email: str => {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return re.test(str)
    },
    phone: str => {
        const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return re.test(str)
    }
};

//* submit
form.onsubmit = e => {
    e.preventDefault();

    //* fields
    const email = form.querySelector('[name="email"]').value;
    const phone = form.querySelector('[name="phone"]').value;

    //* check values
    const emailExists = validate.email(email);
    const phoneExists = validate.phone(phone);

    (emailExists && phoneExists) ? alert('Success!') : alert('Error!');

    form.reset();
};