//Written by Erick Serra
let cpf = document.getElementById("cpfInput");
let phoneNumber = document.getElementById("celularInput");
let email = document.getElementById("emailInput");

//CPF Mask
cpf.addEventListener('input', () => {
    cpf.value = cpf.value.replace(/\D/g, '');

    let cpfInputLength = cpf.value.length;

    if (cpfInputLength > 3 && cpfInputLength <= 6) {
        cpf.value = cpf.value.slice(0, 3) + "." + cpf.value.slice(3);
    } else if (cpfInputLength > 6 && cpfInputLength <= 9) {
        cpf.value = cpf.value.slice(0, 3) + "." + cpf.value.slice(3, 6) + "." + cpf.value.slice(6);
    } else if (cpfInputLength > 9) {
        cpf.value = cpf.value.slice(0, 3) + "." + cpf.value.slice(3, 6) + "." + cpf.value.slice(6, 9) + "-" + cpf.value.slice(9, 11);
    }
});

//Phone Number Mask
phoneNumber.addEventListener('input', () => {
    phoneNumber.value = phoneNumber.value.replace(/\D/g, '');

    let phoneNumberLength = phoneNumber.value.length;

    if (phoneNumberLength > 0 && phoneNumberLength <= 2) {
        phoneNumber.value = "(" + phoneNumber.value.slice(0, 2);
    } else if (phoneNumberLength > 2 && phoneNumberLength <= 3) {
        phoneNumber.value = "(" + phoneNumber.value.slice(0, 2) + ") " + phoneNumber.value.slice(2) + " ";
    } else if (phoneNumberLength > 3 && phoneNumberLength <= 7) {
        phoneNumber.value = "(" + phoneNumber.value.slice(0, 2) + ") " + phoneNumber.value.slice(2, 3) + " " + phoneNumber.value.slice(3, 7);
    } else if (phoneNumberLength > 7) {
        phoneNumber.value = "(" + phoneNumber.value.slice(0, 2) + ") " + phoneNumber.value.slice(2, 3) + " " + phoneNumber.value.slice(3, 7) + "-" + phoneNumber.value.slice(7, 11);
    }
});

function submit() {
    let preDefinedCpf = /^[\d]{3}.[\d]{3}.[\d]{3}-[\d]{2}$/ig;
    let cpfValue = cpf.value;
    let preDefinedPhoneNumber = /^\(+[\d]{2}\)+\ +[\d]+\ +[\d]{4}-[\d]{4}$/ig;
    let phoneNumberValue = phoneNumber.value;
    let preDefinedEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ig;
    let emailValue = email.value;

    alert("CPF: " + (preDefinedCpf.test(cpfValue)));
    alert("Telefone: " + (preDefinedPhoneNumber.test(phoneNumberValue)));
    alert("E-mail: " + (preDefinedEmail.test(emailValue)));
}