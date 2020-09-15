// Test on the console
console.log("app.js")
console.log("Testing!")
console.log("This is $", $)


// Create variables for sheet
let sheetUrl = "https://docs.google.com/spreadsheets/d/1GozbvSSln3rtpnqxqOF7xpyThqbDv532YxUGB41sd5o/edit?usp=sharing";
let sheetID = "1GozbvSSln3rtpnqxqOF7xpyThqbDv532YxUGB41sd5o";
let sheetAsJSON = "https://spreadsheets.google.com/feeds/list/1GozbvSSln3rtpnqxqOF7xpyThqbDv532YxUGB41sd5o/od6/public/values?alt=json";

// Create function that adds Projects to DOM

const render = (projectsArray) => {
    console.log("Testing the projectsArray", projectsArray)
    // Using forEach()
    projectsArray.forEach(project => {
        const $projectDiv= $("<div>");
        const $titleText = $("<h3>");
        const $descriptionText = $("<p>");
        const $img = $("<img>");

        $projectDiv.append($titleText);
        $projectDiv.append($img);
        $projectDiv.append($descriptionText);
        $projectDiv.addClass("proj-div")
        $("article").append($projectDiv).addClass("projects-container");

        $titleText.append(project.title).addClass("proj-title");
        $img.append(project.image).attr("src", project.image).addClass("proj-img");
        $descriptionText.append(project.description).addClass("proj-description");
        console.log(project);
    })
    // $projectSection[0].addClass("proj-div1")
    // $projectSection[1].addClass("proj-div2")
    // $projectSection[2].addClass("proj-div3")
    // $projectSection[3].addClass("proj-div4")

}

// $("article").append($projectSection);

// $projectSection.append(project.title).addClass("card-title")
// $projectSection.append(project.image).addClass("card-img-top")
// $projectSection.append(project.description).addClass("card-text")
// console.log(project)

// (project.title).addClass("card-title")
// (project.image).addClass("card-img-top")
// (project.description).addClass("card-text")


/* <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div> */




// For Loop to Append Projects 
// for (let i = 0; i < projectsArray.length; i += 1) {
//     // const $projectsSection = $(".projects-container");

//     // creating a div for each Project / Iteration / time through loop of ProjectsArray
//     const $projectDisplay = $("<div>")

//     // Adding div to main
//     $("main").append($projectDisplay)

//     // Adding each Project to the page as a new div
//     $projectDisplay.append(projectsArray[i].title)
//     $projectDisplay.append(projectsArray[i].image).css("padding", "50px")
//     $projectDisplay.append(projectsArray[i].description)

//     console.log(projectsArray[i])
// }
            


// Using AJAX to pull data

$.ajax({ url: sheetAsJSON })
    .then( data => {
        //return a new array using .map
        const projects = data.feed.entry.map( project => {
            return  {
                title: project.gsx$title.$t,
                image: project.gsx$image.$t,
                description: project.gsx$description.$t
            }
       
        })
    
        render(projects)
        console.log("This is the data, Title: ", data.feed.entry[0].gsx$title.$t)
        console.log("This is the data, Image: ", data.feed.entry[0].gsx$image.$t)
        console.log("This is the data, Description: ", data.feed.entry[0].gsx$description.$t)
        console.log("Testing the projects", projects)
    })
