let objet = {
	name: "Nico",
	campus: "R2DWILD"
}

module.exports = objet;
var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `${objet.name}, ${objet.campus}`,
	e : "oO",
	T : "U "
}));