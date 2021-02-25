const logOutBtn = document.getElementById("logOutBtn");

logOutBtn.addEventListener("click", (e) => {
  window.localStorage.removeItem("access-token");
  window.localStorage.removeItem("username");
  document.cookie = "access-token=; max-age=0;";

  document.location.reload();
});
