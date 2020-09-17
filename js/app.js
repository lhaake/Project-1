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

    // Using forEach() to append each project to page 
    projectsArray.forEach((project, index) => {

        const $projectDiv = $("<div>");
        const $titleText = $("<h3>");
        const $descriptionText = $("<p>");
        const $img = $("<img>");
        $projectDiv.append($titleText);
        $projectDiv.append($img);
        $projectDiv.append($descriptionText);
        $projectDiv.addClass(`proj-div-${index}`)
        $("article").append($projectDiv).addClass("projects-container");

        $titleText.append(project.title).addClass(`proj-title-${index}`);
        $img.append(project.image).attr("src", project.image).addClass(`proj-img-${index}`);
        $descriptionText.append(project.description).addClass(`proj-description-${index}`);
        console.log(project);
    })
}


// Using AJAX to pull data

$.ajax({ url: sheetAsJSON })
    .then(data => {
        //return a new array of objects using .map
        const projects = data.feed.entry.map(project => {
            return {
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
