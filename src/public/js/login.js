const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
});

async function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const response = await window.fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorContainer = document.getElementById("errorContainer");

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
        Error: username or password are incorrect
      </p>
    `;

    return;
  }

  document.cookie = `access-token=${data.token}; max-age=86400;`;
  window.localStorage.setItem("access-token", data.token);
  window.localStorage.setItem("username", username);

  document.location.href = "/";
}
