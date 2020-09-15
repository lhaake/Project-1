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
    for (let i = 0; i < projectsArray.length; i += 1) {
        let $projectsSection = $(".projects-container");
        $projectsSection.append(projectsArray[i].title)
        $projectsSection.append(projectsArray[i].image).css("background-image", "url()")
        $projectsSection.append(projectsArray[i].description)
        console.log(projectsArray[i])
    }

    // projectsArray.forEach( project => {
    //     // let $projectsCol = $(".col-sm .projects");
    //     const $div = $("<div>")
    //     $div.append(project)
    // })
            
}

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
