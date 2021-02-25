const signUpBtn = document.getElementById("signUpBtn");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signUp();
});

async function signUp() {
  const name = document.getElementById("signUpName").value;
  const lastname = document.getElementById("signUpLastname").value;
  const username = document.getElementById("signUpUsername").value;
  const password = document.getElementById("signUpPassword").value;

  const user = {
    name,
    lastname,
    username,
    password,
  };

  const response = await window.fetch("/signUp/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorContainer = document.getElementById("errorContainer");
    const data = await response.json();

    errorContainer.innerHTML = `
      <p 
        style="display: block;
        width: 100%;
        text-align: center;
        font-size: 1.8rem;
        color: red;
        font-weight: 600;
        margin: 20px 0;"
      >
        Error: ${data.error}
      </p>
    `;

    return;
  }

  document.location.href = "/";
}
