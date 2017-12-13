$(document).ready(function() {

 	var yourChar = "";
	var yourAlly = "";
	var yourEnemy = "";

	var jyn = {
		name: "Jyn Erso",
		hp: 150,
		att: 8,
		source: "assets/images/jyn.jpg",
		text: "#jyntext"
	};

	var cassian = {
		name: "Cassian Andor",
		hp: 125,
		att: 9,
		source: "assets/images/cassian.jpg",
		text: "#cassiantext"
	};

	var k2so = {
		name: "K-2SO",
		hp: 250,
		att: 4,
		source: "assets/images/k2so.jpg",
		text: "#k2sotext"
	};

	var chirrut = {
		name: "Chirrut Imwe",
		hp: 100,
		att: 10,
		source: "assets/images/chirrut.jpg",
		text: "#chirruttext"
	};

	var baze = {
		name: "Baze Malbus",
		hp: 200,
		att: 6,
		source: "assets/images/baze.jpg",
		text: "#bazetext"
	};

	var bodhi = {
		name: "Bodhi Rook",
		hp: 175,
		att: 7,
		source: "assets/images/bodhi.jpg",
		text: "#bodhitext"
	};

	var charname = "";
	var charhp = 0;
	var charatt = 0;
	var charsource = "";
	var chartext = "";

	var totalhp = 0;
	var totalatt = 0;
	var addatt = 0;
	var enemyhp = 0;
	var enemyatt = 0;

	

	function characterInfo(x) {
		if (x == "jyn") {
			charname = jyn.name;
			charhp = jyn.hp;
			charatt = jyn.att;
			charsource = jyn.source;
			chartext = jyn.text;
		} else if (x == "cassian") {
			charname = cassian.name;
			charhp = cassian.hp;
			charatt = cassian.att;
			charsource = cassian.source;
			chartext = cassian.text;
		} else if (x == "k2so") {
			charname = k2so.name;
			charhp = k2so.hp;
			charatt = k2so.att;
			charsource = k2so.source;
			chartext = k2so.text;
		} else if (x == "chirrut") {
			charname = chirrut.name;
			charhp = chirrut.hp;
			charatt = chirrut.att;
			charsource = chirrut.source;
			chartext = chirrut.text;
		} else if (x == "baze") {
			charname = baze.name;
			charhp = baze.hp;
			charatt = baze.att;
			charsource = baze.source;
			chartext = baze.text;
		} else if (x == "bodhi") {
			charname = bodhi.name;
			charhp = bodhi.hp;
			charatt = bodhi.att;
			charsource = bodhi.source;
			chartext = bodhi.text;
		} else {
			charname = "";
			charhp = 0;
			charatt = 0;
			alert("Oops! Something went wrong. Please try again.");
		}
	}

 	function selectCharacter() {
		$("#allygallery").click(function(event) {
	        yourChar = event.target.id;
	        characterInfo(yourChar);
	        alert("You have selected " + charname + " with " + charhp + " HP & " + charatt + " ATT.");
	        document.getElementById("yourchar").src=charsource;
	        $("#yourchartext").empty();
	        $(chartext).clone().appendTo("#yourchartext");
	    });
	}

	function selectAlly() {
		$("#allygallery").click(function(event2) {
	        yourAlly = event2.target.id;
	        characterInfo(yourAlly);
	        alert("You have selected " + charname + " as your ally with " + charhp + " HP & " + charatt + " ATT.");
	        document.getElementById("yourally").src=charsource;
	        $("#yourallytext").empty();
	        $(chartext).clone().appendTo("#yourallytext");
	    });
	}

	selectCharacter();
	selectAlly();

});

