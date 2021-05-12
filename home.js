const textCover = document.querySelector(".welcome-text");
const text = "We Welcome You All To This Amazing Event.Feel At Home And Participate In All The Activities......";

let textCount = 0;

setInterval(function () {
    textCount++;
    if (textCount > text.length) {
        textCount = 0;
    }
    textCover.innerHTML = text.slice(0, textCount);
}, 170);

const guestPhoto = document.querySelector(".part-3-left-photo");
const guestTextName = document.querySelector(".part-3-left-main-para-name");
const guestTextTitle = document.querySelector(".part-3-left-main-para-title");

const guestArray = [

    {
        img: "su.jfif",
        name: "Susan Mubanga",
        title: "Gild President"
    },
    {
        img: "patron.JPG",
        name: "Mr Musuka",
        title: "Patron"
    }
];
let guestCount = 0;

setInterval(function () {
    guestCount++;
    if (guestCount > guestArray.length - 1) {
        guestCount = 0;
    }

    guestPhoto.src = guestArray[guestCount].img;
    guestTextName.innerHTML = guestArray[guestCount].name;
    guestTextTitle.innerHTML = guestArray[guestCount].title;

}, 8000);

const programTitle = document.querySelector(".part-3-right-2-title");
const programName = document.querySelector(".part-3-right-2-name");
const programStatement = document.querySelector(".part-3-right-2-statement");
const programArray = [
    {
        title: "Ms Lucy Namukonda",
        statement: "Opening Prayer",
        footer: "Member"
    },
    {
        title: "Mr Musuka",
        statement: "Opening Remarks",
        footer: "Patron"
    },
    {
        title: "Mr Musuka",
        statement: "swearing in",
        footer: "Patron"
    },
    {
        title: "Mr Martin M Mukalula",
        statement: "Launching of the website..",
        footer: "President"
    },
    {
        title: "Mr Oga Master Mabele",
        statement: "Launching of the webite..",
        footer: "General Secretary"
    },
    {
        title: "Dr Monde",
        statement: "More remarks",
        footer: "Lecturer"
    },
    {
        title: "Mr Siluyele",
        statement: "More remarks",
        footer: "Lecturer"
    },
    {
        title: "Ms Susan Muyoba",
        statement: "More remarks",
        footer: "Gild President"
    },
    {
        title: "Mr Kabwebwe",
        statement: "Announcements of the upcoming programs",
        footer: "Publicity Secretary"
    },
    {
        title: "Mr Shimbetu",
        statement: "Announcements of the upcoming programs",
        footer: "Project Coordinator"
    },
    {
        title: "Mr Musuka",
        statement: "Closing Remarks",
        footer: "Patron"
    }
];

let programCount = 0;

setInterval(function () {
    programCount++;
    if (programCount > programArray.length - 1) {
        programCount = 0;
    }
    programTitle.innerHTML = programArray[programCount].footer;
    programName.innerHTML = programArray[programCount].title;
    programStatement.innerHTML = programArray[programCount].statement;

}, 7000);


const executiveArray = [
    {
        img: "presdo.JPG",
        name: "Martin M Mukalula",
        title: "President"
    },
    {
        img: "vpresido.jpeg",
        name: "Gilbert Lyumbo",
        title: "Vice President"
    },
    {
        img: "master1.jpg",
        name: "oga M Mabele",
        title: "General Secretary"
    },
    {
        img: "finance.jpg",
        name: "Alick Zulu",
        title: "Financial Secretary"
    },
    {
        img: "public.jpeg",
        name: "Goyd Kabwebwe",
        title: "Publicity Secretary"
    },
    {
        img: "committe.jpg",
        name: "Moses Malama",
        title: "Committee Member"
    },
    {
        img: "gift mwila.jfif",
        name: "Gift Mwila",
        title: "Committe Member"
    }
];
const homeSliderCover = document.querySelector(".home-part-2");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const img = document.querySelector(".home-part-2-photo");
const executiveName = document.querySelector(".executive-name");
const executiveTitle = document.querySelector(".executive-title");
let countExecutive = 0;

prevBtn.addEventListener("click", function () {
    countExecutive--;
    if (countExecutive < 0) {
        countExecutive = executiveArray.length - 1;
    }
    img.src = executiveArray[countExecutive].img;
    executiveName.innerHTML = executiveArray[countExecutive].name;
    executiveTitle.innerHTML = executiveArray[countExecutive].title;
});

nextBtn.addEventListener("click", function () {
    countExecutive++;
    if (countExecutive > executiveArray.length) {
        countExecutive = 0;
    }
    img.src = executiveArray[countExecutive].img;
    executiveName.innerHTML = executiveArray[countExecutive].name;
    executiveTitle.innerHTML = executiveArray[countExecutive].title;
});



const seeBtn = document.querySelector(".see-full");
