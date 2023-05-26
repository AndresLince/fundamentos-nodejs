const { frutas, dinero } = require('./frutas');
const cowsay = require("cowsay");

frutas.forEach(item => {
    console.count(item);
});

console.log(cowsay.say({
    text: "Hola amigos de bluuweb",
    e: "oO",
    T: "U "
}));

console.log(dinero);
