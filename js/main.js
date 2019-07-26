
document.addEventListener("DOMContentLoaded",function () {

    const projectData = [
        {
            id: "1",
            imgUrl: "img/Projects/Duckfolio.png",
            title: "Duckfolio",
            text: "Duckfolio is my simple React portfolio project, helping me understand basic of React like state or props. This will contain 5 app (currently only 3 working) to show my understanding. In one section i will link my another projects and in another i will give little description about me my knowledge state ot future plans.",
            quote:"Prepare rubber ducks .... bath time is coming",
            link:"https://lokers778.github.io/Duckfolio/",
        },
        {
            id: "2",
            imgUrl: "img/Projects/JapanCharm.png",
            title: "JapanCharm",
            text: "My final project on my React bootcamp showing best place to visit In japan helping me practice Responsive Web Design, flexbox, Jquerry, Gulp-Sass configuration, work with Api.",
            quote:"I have never been to Japan, but I  watched anime...seems the same",
            link:"https://lokers778.github.io/Japan_Charm/",
        },
        {
            id: "3",
            imgUrl: "img/Projects/HungDuck.png",
            title: "HungDuck",
            text: "Simple guess the word game - the best way to learn is by doing what you love. Its using ES6 vanilla JS,fetching random from API ",
            quote:"maybe it's not a mario game and princess may be in another castle..but i can work in your company",
            link:"https://lokers778.github.io/hung_duck/",
        },
        {
            id: "4",
            imgUrl: "img/Projects/SitOnChair.png",
            title: "SitOnChair",
            text: "My first html/CSS template which i made on my bootcamp. Later added Sass",
            quote:"Dont know why but i should buy a chair",
            link:"https://lokers778.github.io/Sit_On_Chair/",
        },
        {
            id: "5",
            imgUrl: "img/Projects/CollectBread.png",
            title: "CollectBread",
            text: "Simple collect coin game with vanilla JS. Helping me understand object oriented programing ",
            quote:"Like you can see i'm currently on lvl 1 can you help me get my lvl 2 ?",
            link:"https://lokers778.github.io/Colect_Bread/",
        },
        {
            id: "6",
            imgUrl: "img/Projects/programing duck.jpeg",
            title: "Work in progress",
            text: "Other projects will be here soon....",
            quote:"..Sooner than latter",
            link:" https://github.com/lokers778",
        },
    ];

    const myDescription=[
        "I started learning programing in summer,2018. I'd was playing with unity and unreal with blueprints then i realize that i dont understand what i doing just watching courses and expecting this will work. I started learning from html, css and i loved it (latter come JS and almost kill that love but this is another story). Coding website, creating layout made me feel from the first time for a long time that this is what i want to do in my future , i am able to give my time and sleep for this. So for a long time i was going to college and learning on almost every evening. When i decide this is not enough and sometimes its harder than it should because i dont have time i started thinking about bootcamp.. and there i am",
        "In 2019 I started CodeLab bootcampL\n" +
        "In 2019 I successfully finished Coders Lab IT SCHOOL\n" +
        "In 2014 I finished High School\n" +
        "Since 2015 I study Biotechnology on Poznań University of Life Sciences. Only defence my Engineer's Thesis left",
        "23.03.2019-10.05.2019 Waiter in restaurant\n" +
        "20.09.2018-31.12.2018 Barman in restaurant",
        "This year i want to practice front-end technology, and get better with my English-Speaking skills. I have hope to get more experience and increase my work speed. In future i would love to know backed understanding communication between backend and frontend, and get EITCA computer graphics diploma",
        "From kid i'm fascinated with computer games, fantasy, animals.. when i got older i love them all even better but i added to this group some anime/ manga , travels, jogging and programing."];

    const printOtherProjects=()=> {
        for (let i = 0; i < projectData.length; i++) {
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

    const changeDescriptionTab=()=>{
      let  buttonTabs = document.querySelectorAll("button")
        for(let i=0;i<buttonTabs.length;i++){
            buttonTabs[i].addEventListener("click",()=>{
                let description =document.querySelector("body > section.aboutMe > div > div.info > p")
                description.classList.add("animated")
                for(let i=0;i<buttonTabs.length;i++){
                    buttonTabs[i].setAttribute("disabled","true");
                }
                setTimeout(()=>{description.innerText=myDescription[i]
                    description.classList.remove("animated")
                    description.classList.add("animatedOut")
                   ; }, 2000);
            setTimeout(()=>{description.innerText=myDescription[i]
                description.classList.remove("animatedOut")
                for(let i=0;i<buttonTabs.length;i++){
                    buttonTabs[i].removeAttribute("disabled");
                }
                ; }, 4000);
        })
        }

    }

    printOtherProjects();
    changeDescriptionTab();

});