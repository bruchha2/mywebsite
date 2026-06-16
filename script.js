const button = document.getElementById("themeButton");

button.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("light-theme")
            ? "light"
            : "dark"
    );
});

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
}
