const backBtn = document.querySelector('.back-event');

backBtn.addEventListener('click', function () {
    window.history.back();
});

const announcementBtn = document.querySelector(".announcementsBtn");
const eventBtn = document.querySelector(".eventsBtn");
const postBtn = document.querySelector(".postsBtn");
const updateBtn = document.querySelector(".updatesBtn");

announcementBtn.addEventListener("click", function () {
    active(announcementBtn);
    inActive([eventBtn, postBtn, updateBtn]);
});
eventBtn.addEventListener("click", function () {
    active(eventBtn);
    inActive([announcementBtn, postBtn, updateBtn]);
});
postBtn.addEventListener("click", function () {
    active(postBtn);
    inActive([eventBtn, announcementBtn, updateBtn]);
});
updateBtn.addEventListener("click", function () {
    active(updateBtn);
    inActive([eventBtn, postBtn, announcementBtn]);
});

function active(elem) {
    elem.classList.add("active");
}

function inActive(elem) {
    elem.forEach(item => item.classList.remove("active"));
}


function platform(menu) {
    const all = document.querySelectorAll("div .all");
    console.log(all)
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
    document.getElementById(menu).style.display = "block";
}

document.getElementById("link").click();