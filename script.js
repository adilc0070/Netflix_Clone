function signIn() {
    alert("currently not functioning");
}

function getEmail() {
    let email = document.getElementsByClassName("email-inp")[0].value;
    if (email) {
        let atposition = email.indexOf("@");
        let dotposition = email.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
            alert("Please enter a valid e-mail address");
        } else {
            alert("Your email submitted");
        }
    } else {
        alert("Please enter your email");
    }
}
function getEmail() {
    let email = document.getElementsByClassName("email-inp")[0].value;
    if (email) {
        let atposition = email.indexOf("@");
        let dotposition = email.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
            alert("Please enter a valid e-mail address");
        } else {
            alert("Your email submitted");
        }
    } else {
        alert("Please enter your email");
    }
}