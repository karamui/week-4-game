$(document).ready(function() {

 	var yourChar = "";
	var yourAlly = "";
	var yourEnemy = "";

	var jyn = {
		title: "jyn",
		name: "Jyn Erso",
		hp: 150,
		att: 8,
		source: "assets/images/jyn.jpg",
		text: "#jyntext"
	};

	var cassian = {
		title: "cassian",
		name: "Cassian Andor",
		hp: 125,
		att: 9,
		source: "assets/images/cassian.jpg",
		text: "#cassiantext"
	};

	var k2so = {
		title: "k2so",
		name: "K-2SO",
		hp: 250,
		att: 4,
		source: "assets/images/k2so.jpg",
		text: "#k2sotext"
	};

	var chirrut = {
		title: "chirrut",
		name: "Chirrut Imwe",
		hp: 100,
		att: 10,
		source: "assets/images/chirrut.jpg",
		text: "#chirruttext"
	};

	var baze = {
		title: "baze",
		name: "Baze Malbus",
		hp: 200,
		att: 6,
		source: "assets/images/baze.jpg",
		text: "#bazetext"
	};

	var bodhi = {
		title: "bodhi",
		name: "Bodhi Rook",
		hp: 175,
		att: 7,
		source: "assets/images/bodhi.jpg",
		text: "#bodhitext"
	};

	var darthvader = {
		title: "darthvader",
		name: "Darth Vader",
		hp: 350,
		att: 50,
		source: "assets/images/darth-vader.jpg",
		text: "#darthvadertext"
	};

	var orsonkrennic = {
		title: "orsonkrennic",
		name: "Orson Krennic",
		hp: 300,
		att: 25,
		source: "assets/images/orson-krennic.jpg",
		text: "#orsonkrennictext"
	};

	var deathtroopers = {
		title: "deathtroopers",
		name: "Death Troopers",
		hp: 500,
		att: 15,
		source: "assets/images/death-troopers.jpg",
		text: "#deathtrooperstext"
	};

	var character = {
		title: "",
		name: "",
		hp: 0,
		att: 0,
		source: "",
		text: ""
	};

	var fought1 = "";
	var fought2 = "";

	var totalhp = 0;
	var totalatt = 0;
	var addatt = 0;
	var enemyhp = 0;
	var enemyatt = 0;

	$("#victory").hide();
	$("#defeat").hide();

	function characterInfo(x) {
		if (x == "jyn") {
			character = jyn;
		} else if (x == "cassian") {
			character = cassian;
		} else if (x == "k2so") {
			character = k2so;
		} else if (x == "chirrut") {
			character = chirrut;
		} else if (x == "baze") {
			character = baze;
		} else if (x == "bodhi") {
			character = bodhi;
		} else if (x == "darthvader") {
			character = darthvader;
		} else if (x == "orsonkrennic") {
			character = orsonkrennic;
		} else if (x == "deathtroopers") {
			character = deathtroopers;
		} else {
			character = {
			name: "",
			hp: 0,
			att: 0
			};
		}
	}

 	function selectCharacter() {
		$("#allygallery").one("click", function(event) {
	        yourChar = event.target.id;

	        if (yourChar == "jyn" || yourChar == "cassian" || yourChar == "k2so" || yourChar == "chirrut" || yourChar == "baze" || yourChar == "bodhi") {
	        	characterInfo(yourChar);
	        	$("#" + yourChar).addClass("clicked");
	        	yourChar = character;
		        alert("You have selected " + character.name + " as your character. You have " + character.hp + " HP & " + character.att + " ATT.");
		        $("#yourchar").attr("src", character.source);
		        $("#yourchartext").empty();
		        $(character.text).clone().appendTo("#yourchartext");
		        $("#chartitle").text("Select an Ally");

		        totalhp = yourChar.hp;
				totalatt = yourChar.att;
		
				updateText();
		        return;
	        }
	        else {
		        alert("Oops! Looks like you misclicked. Please try again.");
		        selectCharacter();
		    }
	    });
	}

	function selectAlly() {
		$("#allygallery").one("dblclick", function(event2) {
	        yourAlly = event2.target.id;

	        if (yourAlly == yourChar.title && yourAlly != "") {
	        	alert("You cannot be your own ally! Choose someone else to help you!");
	        	selectAlly();
	        }
	        else if (yourAlly == "jyn" || yourAlly == "cassian" || yourAlly == "k2so" || yourAlly == "chirrut" || yourAlly == "baze" || yourAlly == "bodhi") {
	        	characterInfo(yourAlly);
	        	$("#" + yourAlly).addClass("clicked");
	        	yourAlly = character;
		        alert("You have selected " + character.name + " as your ally with " + character.hp + " HP & " + character.att + " ATT.");
		        $("#yourally").attr("src", character.source);
		        $("#yourallytext").empty();
		        $(character.text).clone().appendTo("#yourallytext");

		        totalhp = yourChar.hp + yourAlly.hp;
				totalatt = yourChar.att + yourAlly.att;
					
				updateText();

				$("#allies").hide();
		        return;
	        }
	        else {
		        alert("Oops! Looks like you misclicked. Please try again.");
		        selectAlly();
		    }
	    });
	}

	 function selectEnemy() {
		$("#enemygallery").one("click", function(event3) {
	        yourEnemy = event3.target.id;

	        if (yourEnemy == "darthvader" || yourEnemy == "orsonkrennic" || yourEnemy == "deathtroopers") {

	        	if (yourEnemy != fought1 && yourEnemy != fought2) {
		        	characterInfo(yourEnemy);
		        	$("#" + yourEnemy).addClass("clicked");
		        	yourEnemy = character;
			        alert("You have selected " + character.name + " as your enemy. Your enemy has " + character.hp + " HP & " + character.att + " ATT.");
			        $("#yourenemy").attr("src", character.source);
			        $("#yourenemytext").empty();
			        $(character.text).clone().appendTo("#yourenemytext");
			        
			        enemyhp = yourEnemy.hp;
					enemyatt = yourEnemy.att;

					//$("enemyhpbar").attr({"aria-valuemax": enemyhp, "aria-valuenow": enemyhp, "style": "width: 100%"});

					$("#enemyhp").text(enemyhp);
					$("#enemyatt").text(enemyatt);
			        return;
		    	}
		    	else {
		    		alert("You have already defeated this enemy! Choose a new opponent.");
		    		selectEnemy();
		    	}
	        }
	        else {
		        alert("Oops! Looks like you misclicked. Please try again.");
		        selectEnemy();
		    }
	    });
	}

	$("button").on("click", function battle() {

		totalhp = totalhp - enemyatt;
		totalatt = totalatt + addatt;
		enemyhp = enemyhp - totalatt;
		addatt = yourChar.att + yourAlly.att;

		if (yourChar == "") {
			alert("You need to select a character!");
		} else if (yourAlly == "") {
			alert("You need to choose an ally!");
			totalatt = yourChar.att;
		} else if (yourEnemy == "") {
			alert("You need to choose an enemy!");
			enemyhp = 0;
			enemyatt = 0;
		}
		
		if (totalhp <= 0 && yourChar != "" && enemyhp <=0) {
			alert("You have defeated each other! You cannot go on!");
			totalhp = 0;
			enemyhp = 0;
			updateText();
			$("#defeat").show();
		}
		else if (totalhp <= 0 && yourChar != "") {
			alert("You have been defeated by " + yourEnemy.name + "!");
			totalhp = 0;
			updateText();
			$("#defeat").show();
		}
		else if (enemyhp <=0 && totalhp > 0 && fought1 == "" && fought2 == "" && yourEnemy != "") {
			alert("You have defeated " + yourEnemy.name + "! Select a second opponent.");
			enemyhp = 0;
			updateText();
			fought1 = yourEnemy.title;
			selectEnemy();
		}
		else if (enemyhp <=0 && totalhp > 0 && fought1 != "" && fought2 == "" && yourEnemy != "") {
			alert("You have defeated " + yourEnemy.name + "! Select a third opponent.");
			enemyhp = 0;
			updateText();
			fought2 = yourEnemy.title;
			selectEnemy();
		}
		else if (enemyhp <= 0 && totalhp > 0 && fought1 != "" && fought2 != "" && yourEnemy != "") {
			alert("You have defeated your final opponent, " + yourEnemy.name + "!");
			enemyhp = 0;
			updateText();
			$("#enemies").hide();
			$("#victory").show();
		}	
		else {
			updateText();
		}		
	});

	function updateText() {
		$("#yourhp").text(totalhp);
		$("#youratt").text(totalatt);
		$("#enemyhp").text(enemyhp);
		$("#enemyatt").text(enemyatt);
		$("#yourdamage").text(totalatt);
		$("#enemydamage").text(enemyatt);
	}

	selectCharacter();
	selectAlly();
	selectEnemy();

	$("#victory").one("click", function restart() {
		location.reload();
	});

	$("#defeat").one("click", function restart() {
		location.reload();
	});

});