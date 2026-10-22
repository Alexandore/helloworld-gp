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

    // Switch för trafikljus

    const trafficLight = "gul";

    switch (trafficLight) {
        case "grön":
            console.log("Kör") 
            break;
        case "gul":
            console.log("Gör dig redo") 
            break;
        case "röd":
            console.log("Stanna!") 
            break;

        default: 
            console.log("Okänd signal")
    }

    const dagensVäder = "sol";

    switch (dagensVäder) {
        case "sol":
            console.log("glöm inte solglasögon!")
            break;
        case "regn":
            console.log("ta med ett paraply!")
            break;
        case "snö":
            console.log("ta på dig varm jacka!")
            break;

        default:
            console.log("kolla väderappewn igen.")
    }

    // for loop

    console.log("1")
    console.log("2")
    console.log("3")
    console.log("4")
    console.log("5")

    for (let i = 1; i > 6; i++) {
        console.log(i)
    }

    // i++
    //i = i + 1
    // i--
   // i = i - 1

    //

    const frukt = ["banan", "äpple", "körsbär"]

    for (let i = 0; i < frukt.length; i++) {
        console.log(frukt[i])
    }

    // While/for loop med console.log

    let energi = 3;

    while (energi > 0) {
        console.log("Sprang ett varv! energi kvar: " + energi);
        energi--; //minskar energi med 1 efter varje varv!
    }
    console.log("Slut på energi! Måste vila.")

    let energy = 3

    for (let i = energy; i > 0; i--) {
        console.log("Slut på energy! Måste vila.")
    }

    // array med olika objekt

    let elever = [
        {name: "Alex", poang: 85 },
        {name: "sarah", poang: 1000 },
        {name: "axel", poang: 10 },
    ]

    for (let i = 0; i < elever.length; i++) {
        console.log(elever[i]);
    }

    //

    for (let i = 5; i >= 1; i--) {
        if (i === 3) {
            console.log(i + " - halvvägs kvar")
        } else {
            console.log("Sekunder kvar: " + i)
        }
    }

    console.log("LIFTOFF!")