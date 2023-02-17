// https://education.launchcode.org/intro-to-professional-web-dev/chapters/data-and-variables/exercises.html


// Declaración de variables principales
var shuttleSpeed = 17500;
var namespaceShuttle = 'Determination';
var distancetoMars = 225000000;
var distancetoMoon  = 384400;
var milesperKM = 0.621;


// Calculo de la mision espacial
var milestoMars = distancetoMars * milesperKM;
var hourstoMars = milestoMars / shuttleSpeed;
var daystoMars = hourstoMars / 24;

var milestoMoon = distancetoMoon * milesperKM;
var hourstoMoon = milestoMoon / shuttleSpeed;
var daystoMoon = hourstoMoon / 24;

// type of de todas las variables
console.log(typeof shuttleSpeed);
console.log(typeof namespaceShuttle);
console.log(typeof distancetoMars);
console.log(typeof distancetoMoon);
console.log(typeof milesperKM);

// Print de los resultados

console.log(namespaceShuttle + " will take " + daystoMars + " days to reach mars ");
console.log (namespaceShuttle + " will take " + daystoMoon + " days to reach the mooon ");