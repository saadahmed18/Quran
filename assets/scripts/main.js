document.getElementById("dark-mode").onclick = () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.getElementById("dark-mode").src = "assets/icons/moon.webp";
  } else {
    document.body.classList.add("dark");
    document.getElementById("dark-mode").src = "assets/icons/sun.webp";
  }
};