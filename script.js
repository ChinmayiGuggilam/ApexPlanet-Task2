// Password Match Validation
function validateRegister() {

    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration Successful!");
    window.location.href = "login.html";
    return true;
}

// Show/Hide Password
function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// Dummy Login Function
function loginUser() {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    document.getElementById("loginMsg").innerText = "Login Successful!";

    // Optional redirect after 2 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}

// AJAX Username Check
function checkUsername() {
    const username = document.getElementById("username").value;

    fetch("check_user.php?username=" + username)
        .then(response => response.text())
        .then(data => {
            document.getElementById("userMsg").innerHTML = data;
        });
}