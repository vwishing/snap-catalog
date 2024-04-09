/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 */

// const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
// let titles = [
//     "Fresh Prince of Bel Air",
//     "Curb Your Enthusiasm",
//     "East Los High"
// ];

let sports = [
    {name: "Basketball", icons: ["Michael Jordan", "Kobe Byrant", "Lebron James"], imgURL: "https://images.unsplash.com/photo-1612768875331-0447b960fa40?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", photoCredit: "https://unsplash.com/@solarfri"},
    {name: "Football", icons: ["Tom Brady", "Jerry Rice", "Jim Brown"], imgURL: "https://images.unsplash.com/photo-1602187956602-576d568cd959?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", photoCredit: "https://unsplash.com/@cianleach"},
    {name: "Soccer", icons: ["Lionel Messi", "Pele", "Diego Maradona"], imgURL: "https://images.unsplash.com/photo-1569531955323-33c6b2dca44b?q=80&w=2792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", photoCredit: "https://unsplash.com/@alexazabache"},
    {name: "Baseball", icons: ["Babe Ruth", "Willie Mays", "Hank Aaron"], imgURL: "https://images.unsplash.com/photo-1623947453126-3652fc16b2b0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", photoCredit: "https://unsplash.com/@kirkthornton"},
    {name: "Hockey", icons: ["Wayne Gretzky", "Bobby Orr", "Mario Lemieux"], imgURL: "https://images.unsplash.com/photo-1545652034-ff9abf03cf70?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", photoCredit: "https://unsplash.com/@markusspiske"}
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < sports.length; i++) {
        let sport = sports[i].name;
        //  console.log(sport)
        //  console.log(newSport)

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        // let imageURL = "";
        // if (i == 0) {
        //     imageURL = FRESH_PRINCE_URL;
        // } else if (i == 1) {
        //     imageURL = CURB_POSTER_URL;
        // } else if (i == 2) {
        //     imageURL = EAST_LOS_HIGH_POSTER_URL;
        // }

        // IMG URL
        let cardImg = sports[i].imgURL;
        // console.log(cardImg);

        //PHOTO CREDIT
        let cardCred = sports[i].photoCredit;
        // console.log(cardCred);

        // ICONS ARRAY
        let singleIcons = sports[i].icons;
        // console.log(singleIcons)
        let result = singleIcons.reduce( (prev, curr) => prev +', '+ curr )
        console.log(result)

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, sport, cardImg, cardCred, result); // Edit sport title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

    function editCardContent(card, newSport, newImageURL, newCredit, newList) {
    card.style.display = "block";

    //HEADER
    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newSport;

    // IMG
    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newSport + " Poster";

    // PHOTO CREDIT
    const cardCredit= card.querySelector("a");
    // console.log(cardCredit)
    cardCredit.href = "" + newCredit;


    // LIST OF ICONS
    const peopleList = card.querySelector("#myList");
    peopleList.textContent = "" + newList;

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    // console.log("new card:", newSport, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

//removes first card
function removeFirstCard() {
    sports.shift(); // Remove first item in sport array
    showCards(); // Call showCards again to refresh
}

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    sports.pop(); // Remove last item in sport array
    showCards(); // Call showCards again to refresh
}
