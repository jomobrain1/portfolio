import { myapp } from "./app.js";
import  {filter} from "./filter.js"
import { fetchItems } from "./fetchItems.js";
import { includes_urls } from "./url.js";
filter()

let mainhome = document.querySelector("#mainhome");
let mainheader = document.querySelector("#mainheader");
let mainabout = document.querySelector("#mainabout");
let mainskills = document.querySelector("#mainskills");
let mainqualifications = document.querySelector("#mainqualifications");
let mainservices = document.querySelector("#mainservices");
let mainportfolio = document.querySelector("#mainportfolio");
let mainnewproject = document.querySelector("#mainnewproject");
let maincontact = document.querySelector("#maincontact");
let mainfooter = document.querySelector("#mainfooter");
let portfolioheader=document.querySelector("#portfolioheader")

Promise.all(includes_urls.map((url) => fetch(url).then((resp) => resp.text()))).then(
  (texts) => {
    mainheader.innerHTML = texts[0];
    mainhome.innerHTML = texts[1];
    mainabout.innerHTML = texts[2];
    mainskills.innerHTML = texts[3];
    mainqualifications.innerHTML = texts[4];
    mainservices.innerHTML = texts[5];
    mainportfolio.innerHTML = texts[6];
    mainnewproject.innerHTML = texts[7];
    maincontact.innerHTML = texts[8];
    mainfooter.innerHTML = texts[9];
    portfolioheader.innerHTML=texts[10]
    const parser=new DOMParser()
    const doc=parser.parseFromString(texts[6],"text/html")
    eval(doc.querySelector("script").textContent)
  }
);


setTimeout(() => {
 fetchItems()
 myapp() 
},700);