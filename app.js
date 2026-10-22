console.log("alex");

let age = 16;
let hasTicket = true;
let withAdult = true;

/* && betyder och, || betyder eller*/
if (age >= 15 && hasTicket == true || withAdult === true) /*om han är 15 uppåt så är det true */ {
    console.log("Välkommen in i BIO");
} else {
    console.log("gå och köp ticket");
}

// = --> tilldela nytt värde
// == --> kolla om (värdet) är truthy
// === --> kollar om (värdet) och (datatypen) är truthy
const isLoggedIn = true;
const userRole = "admin";

if (isLoggedIn == true) {

    if (userRole === "admin") {
        console.log("Välkommen till Adminpanelen!")
    } else {
        console.log("Välkommen vanliga användare!")
    } 
} else {
        console.log("Du måste logga in först!")
    }