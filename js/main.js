
document.addEventListener("DOMContentLoaded",function () {

    const projectData = [
        {
            id: "1",
            imgUrl: "img/Projects/JapanCharm.png",
            title: "JapanCharm",
            text: "My final project on my React bootcamp showing best place to visit In japan helping me practice Responsive Web Design, flexbox, Jquerry, Gulp-Sass configuration, work with Api.",
            quote:"I have never been to Japan, but I  watched anime...seems the same",
            link:"https://lokers778.github.io/Japan_Charm/",
        },
        {
            id: "2",
            imgUrl: "img/Projects/HungDuck.png",
            title: "HungDuck",
            text: "Simple guess the word game - the best way to learn is by doing what you love. Its using ES6 vanilla JS,fetching random from API ",
            quote:"maybe it's not a mario game and princess may be in another castle..but i can work in your company",
            link:"https://lokers778.github.io/hung_duck/",
        },
        {
            id: "3",
            imgUrl: "img/Projects/SitOnChair.png",
            title: "SitOnChair",
            text: "My first html/CSS template which i made on my bootcamp. Later added Sass",
            quote:"Dont know why but i should buy a chair",
            link:"https://lokers778.github.io/Sit_On_Chair/",
        },
        {
            id: "4",
            imgUrl: "img/Projects/CollectBread.png",
            title: "CollectBread",
            text: "Simple collect coin game with vanilla JS. Helping me understand object oriented programing ",
            quote:"Like you can see i'm currently on lvl 1 can you help me get my lvl 2 ?",
            link:"https://lokers778.github.io/Colect_Bread/",
        },
        {
            id: "5",
            imgUrl: "img/Projects/programing duck.jpeg",
            title: "Work in progress",
            text: "Other projects will be here soon....",
            quote:"..Sooner than latter",
            link:" https://github.com/lokers778",
        },
    ];

    const printOtherProjects=()=> {
        for (let i = 0; i < projectData.length; i++) {
            console.log(projectData[i])
            let singleProject = document.createElement("div");

            let image = document.createElement("img");
            let description = document.createElement("p");
            let descriptionQuote = document.createElement("span");
            let link = document.createElement("a");
            let otherProjects = document.querySelector('.myProjects .container');
            let singleProjectText = document.createElement("div");
            otherProjects.appendChild(singleProject);
            singleProject.appendChild(link);
            link.appendChild(image);
            singleProject.appendChild(singleProjectText)
            singleProjectText.appendChild(description);
            singleProjectText.appendChild(descriptionQuote);
            image.setAttribute("src", projectData[i].imgUrl);
            image.setAttribute("alt",projectData[i].title);
            link.setAttribute("href", projectData[i].link);
            link.setAttribute("target", "_blank");
            description.innerText = projectData[i].text;
            descriptionQuote.innerText = projectData[i].quote;
        }
    }
printOtherProjects()

});