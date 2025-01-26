document.getElementById("dark-mode").onclick = () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.getElementById("dark-mode").src = "assets/icons/moon.webp";
  } else {
    document.body.classList.add("dark");
    document.getElementById("dark-mode").src = "assets/icons/sun.webp";
  }
};
let menu = document.getElementById("menu");
fetch("https://api.alquran.cloud/v1/quran")
  .then((response) => response.json())
  .then((quranData) => {
    let data = ``;
    for (let i = 0; i < quranData.data.surahs.length; i++) {
      data += `<li>
      <span>${quranData.data.surahs[i].number}</span>
      <a id="${i + 1}" href="#">${quranData.data.surahs[i].name}</a>
      </li>`;
    }
    menu.innerHTML = data;
    document.getElementById("1").onclick = () => {
      console.log("saad");
    };
  });
