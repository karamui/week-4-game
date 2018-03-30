$(document).ready(function() {

	// declaring variables to hold user selections
 	var yourChar = "";
	var yourAlly = "";
	var yourEnemy = "";

	// declaring character objects
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
		hp: 101,
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

	// declaring empty character object placeholder
	var character = {
		title: "",
		name: "",
		hp: 0,
		att: 0,
		source: "",
		text: ""
	};

	// declaring variables to assist with enemy selection
	var fought1 = "";
	var fought2 = "";

	// declaring variables for battle simulation
	var totalhp = 0;
	var totalatt = 0;
	var addatt = 0;
	var enemyhp = 0;
	var enemyatt = 0;
	var stopgame = 0;

	// declaring variables for hp bars
	var yourhpmax = 0;
	var yourattvalue = 0;
	var enemyhpmax = 0;
	var enemyattvalue = 0;

	// concealing victory and defeat screens at start of game
	$("#victory").hide();
	$("#defeat").hide();

	// turning user click input into a character
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

	// selecting a character
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
		        yourhpmax = yourChar.hp;
				totalatt = yourChar.att;
				yourattvalue = (totalatt / 221) * 100;

				$("#yourhpbar").attr({"aria-valuemax": totalhp, "aria-valuenow": totalhp, "style": "width: 100%"});
				$("#yourattbar").attr({"aria-valuenow": totalatt, "style": "width: " + yourattvalue +"%"});
		
				updateText();
		        return;
	        } else {
		        alert("Oops! Looks like you misclicked. Please try again.");
		        selectCharacter();
		    }
	    });
	}

	// selecting an ally
	function selectAlly() {
		$("#allygallery").one("dblclick", function(event2) {
	        yourAlly = event2.target.id;

	        if (yourAlly == yourChar.title && yourAlly != "") {
	        	alert("You cannot be your own ally! Choose someone else to help you!");
	        	selectAlly();
	        } else if (yourAlly == "jyn" || yourAlly == "cassian" || yourAlly == "k2so" || yourAlly == "chirrut" || yourAlly == "baze" || yourAlly == "bodhi") {
	        	characterInfo(yourAlly);
	        	$("#" + yourAlly).addClass("clicked");
	        	yourAlly = character;
		        alert("You have selected " + character.name + " as your ally with " + character.hp + " HP & " + character.att + " ATT.");
		        $("#yourally").attr("src", character.source);
		        $("#yourallytext").empty();
		        $(character.text).clone().appendTo("#yourallytext");

		        totalhp = yourChar.hp + yourAlly.hp;
		        yourhpmax = totalhp;
				totalatt = totalatt + yourAlly.att;
				yourattvalue = (totalatt / 221) * 100;

				$("#yourhpbar").attr({"aria-valuemax": totalhp, "aria-valuenow": totalhp, "style": "width: 100%"});
				$("#yourattbar").attr({"aria-valuenow": totalatt, "style": "width: " + yourattvalue +"%"});
					
				updateText();

				$("#allies").fadeOut(1500);
		        return;
	        } else {
		        alert("Oops! Looks like you misclicked. Please try again.");
		        selectAlly();
		    }
	    });
	}

	// selecting an enemy
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
			        enemyhpmax = yourEnemy.hp;
					enemyatt = yourEnemy.att;
					enemyattvalue = enemyatt / 50 * 100;

					$("#enemyhpbar").attr({"aria-valuemax": enemyhp, "aria-valuenow": enemyhp, "style": "width: 100%"}).removeClass("progress-bar-warning progress-bar-danger").addClass("progress-bar-success");
					$("#enemyattbar").attr({"aria-valuenow": enemyatt, "style": "width: " + enemyattvalue +"%"});

					$("#enemyhp").text(enemyhp);
					$("#enemyatt").text(enemyatt);
			        return;
		    	} else {
		    		alert("You have already defeated this enemy! Choose a new opponent.");
		    		yourEnemy = "";
		    		selectEnemy();
		    	}
	        } else {
		        alert("Oops! Looks like you misclicked. Please try again.");
		        yourEnemy = "";
		        selectEnemy();
		    }
	    });
	}

	// attacking your enemy
	$("#attack").on("click", function battle() {

		// ensuring all roles are filled
		if (yourChar == "") {
			alert("You must select a character!");
		} else if (yourAlly == "") {
			alert("You must choose an ally!");
			totalhp = yourChar.hp;
			totalatt = totalatt;
			enemyhp = yourEnemy.hp;
			enemyatt = yourEnemy.att;
		} else if (yourEnemy == "" || yourEnemy.title == fought1 || yourEnemy.title == fought2) {
			alert("You must choose an enemy!");
			totalhp = totalhp;
			totalatt = totalatt;
			enemyhp = 0;
			enemyatt = 0;
		} else if (stopgame == 0) {
			totalhp = totalhp - enemyatt;
			totalatt = totalatt + addatt;
			enemyhp = enemyhp - totalatt;
			enemyatt = yourEnemy.att;
			addatt = yourChar.att + yourAlly.att;
		} else {
			totalhp = totalhp;
			totalatt = totalatt;
			enemyhp = enemyhp;
			enemyatt = yourEnemy.att;
		}
		
		// results of attack
		if (totalhp <= 0 && yourChar != "" && enemyhp <=0) {
			alert("You have defeated each other! You cannot go on!");
			totalhp = 0;
			enemyhp = 0;
			stopgame = 1;
			updateText();
			$("#defeat").fadeIn(1500);
		} else if (totalhp <= 0 && yourChar != "") {
			alert("You have been defeated by " + yourEnemy.name + "!");
			totalhp = 0;
			stopgame = 1;
			updateText();
			$("#defeat").fadeIn(1500);
		} else if (enemyhp <=0 && totalhp > 0 && fought1 == "" && fought2 == "" && yourEnemy != "") {
			alert("You have defeated " + yourEnemy.name + "! Select a second opponent.");
			enemyhp = 0;
			updateText();
			fought1 = yourEnemy.title;
			selectEnemy();
		} else if (enemyhp <=0 && totalhp > 0 && fought1 != "" && fought2 == "" && yourEnemy != "" && yourEnemy.title != fought1) {
			alert("You have defeated " + yourEnemy.name + "! Select a third opponent.");
			enemyhp = 0;
			updateText();
			fought2 = yourEnemy.title;
			selectEnemy();
		} else if (enemyhp <= 0 && totalhp > 0 && fought1 != "" && fought2 != "" && yourEnemy != "" && yourEnemy.title != fought1 && yourEnemy.title != fought2) {
			alert("You have defeated your final opponent, " + yourEnemy.name + "!");
			enemyhp = 0;
			stopgame = 1;
			updateText();
			$("#enemies").fadeOut(1500);
			$("#victory").fadeIn(1500);
		} else {
			updateText();
		}		
	});

	// use the force to increase your attack (one time use) 
	$("#force").on("click", function battle() {
		if (yourChar != "") {
			alert("The Force is with you! Your weariness has abated and you have discovered an unknown strength within yourself! Your ATT has increased by 50!")
			totalatt = totalatt + 50;
			yourattvalue = (totalatt / 221) * 100;
			$("#yourattbar").attr({"aria-valuenow": totalatt, "style": "width: " + yourattvalue +"%"});
			$("#youratt").text(totalatt);
			$("#force").fadeOut(1500);
		} else {
			alert("You must select a character in order to use The Force!");
		}
	});

	// update stats text
	function updateText() {
		// update stats
		$("#yourhp").text(totalhp);
		$("#youratt").text(totalatt);
		$("#enemyhp").text(enemyhp);
		$("#enemyatt").text(enemyatt);
		$("#yourdamage").text(totalatt);
		$("#enemydamage").text(enemyatt);

		// declaring variables for hp bars
		var yourhpvalue = totalhp / yourhpmax * 100;
		yourattvalue = (totalatt / 221) * 100;
		var enemyhpvalue = enemyhp / enemyhpmax * 100;

		// changing color of your user hp bar
		if (yourhpvalue <= 50 && yourhpvalue > 25) {
			$("#yourhpbar").removeClass("progress-bar-success").addClass("progress-bar-warning");
		} else if (yourhpvalue <= 25) {
			$("#yourhpbar").removeClass("progress-bar-warning").addClass("progress-bar-danger");
		} else {
			$("#yourhpbar").removeClass("progress-bar-warning progress-bar-danger").addClass("progress-bar-success");
		}

		// changing color of enemy hp bar
		if (enemyhpvalue <= 50 && enemyhpvalue > 25) {
			$("#enemyhpbar").removeClass("progress-bar-success").addClass("progress-bar-warning");
		} else if (enemyhpvalue <= 25) {
			$("#enemyhpbar").removeClass("progress-bar-warning").addClass("progress-bar-danger");
		} else {
			$("#enemyhpbar").removeClass("progress-bar-warning progress-bar-danger").addClass("progress-bar-success");
		}

		// updating hp and att bars
		$("#yourhpbar").attr({"aria-valuemax": totalhp, "aria-valuenow": totalhp, "style": "width: " + yourhpvalue + "%"});
		$("#yourattbar").attr({"aria-valuenow": totalatt, "style": "width: " + yourattvalue +"%"});
		$("#enemyhpbar").attr({"aria-valuemax": enemyhp, "aria-valuenow": enemyhp, "style": "width: " + enemyhpvalue + "%"});
		$("#enemyattbar").attr({"aria-valuenow": enemyatt, "style": "width: " + enemyattvalue +"%"});
	}

	// running the game
	selectCharacter();
	selectAlly();
	selectEnemy();

	// restarting the game after winning
	$("#victory").one("click", function restart() {
		location.reload();
		window.scrollTo(0, 0);
	});

	// restarting the game after losing
	$("#defeat").one("click", function restart() {
		location.reload();
		window.scrollTo(0, 0);
	});
}); 