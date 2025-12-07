const viewMoreLess = document.getElementById("view-btn")
const posts = document.querySelectorAll(".visibility")

viewMoreLess.addEventListener("click", function() {
    if (viewMoreLess.textContent === "View Less") {
        viewMoreLess.textContent = "View More"
        posts.forEach(i => i.style.display = "none")
    } else {
        viewMoreLess.textContent = "View Less"
        posts.forEach(i => i.style.display = "block")
    }
})

