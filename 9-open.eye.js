function showPassword() {
  const passwordInput = document.querySelector("#password");

  console.log('hello world')

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
