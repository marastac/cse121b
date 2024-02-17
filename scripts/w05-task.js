/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;
    
    article.appendChild(h3);
    article.appendChild(img);
    
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();
  displayTemples(templeList);
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = () => {
  const filter = document.getElementById("filtered").value;
  switch(filter) {
    case "utah":
      templeList.sort((a, b) => (a.location > b.location) ? 1 : -1);
      break;
    case "notutah":
      templeList.sort((a, b) => (a.location > b.location) ? -1 : 1);
      break;
    case "older":
      templeList.sort((a, b) => (new Date(a.dedicatedDate) > new Date(b.dedicatedDate)) ? 1 : -1);
      break;
    case "all":
      
     break;
    default:
      break;
  }
  reset();
  displayTemples(templeList);
};

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => { 
  sortBy(templeList);
});

getTemples();
