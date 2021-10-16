var notification;
var hasread = false;
function checkNotificationPromise() {
	try {
		Notification.requestPermission().then();
	} catch (e) {
		return false;
	}

	return true;
}

function askNotificationPermission() {
	// function to actually ask the permissions
	function handlePermission(permission) {
		// set the button to shown or hidden, depending on what the user answers
		if (
			Notification.permission === "denied" ||
			Notification.permission === "default"
		) {
			notificationBtn.style.display = "block";
		} else {
			notificationBtn.style.display = "none";
		}
	}

	// Let's check if the browser supports notifications
	if (!("Notification" in window)) {
		console.log("This browser does not support notifications.");
	} else {
		if (checkNotificationPromise()) {
			Notification.requestPermission().then((permission) => {
				handlePermission(permission);
			});
		} else {
			Notification.requestPermission(function (permission) {
				handlePermission(permission);
			});
		}
	}
}

askNotificationPermission();
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

document.onkeydown = function (e) {
	if (event.keyCode == 123) {
		return false;
	}

	if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
		return false;
	}

	if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
		return false;
	}

	if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
		return false;
	}

	if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
		return false;
	}
};

const CLIENT_ID = "3vtDIC1I1BTFfW66";
var sheeeesh;
var selfStaff;
var placerthingg;
var selfStaff;
var sheeeeeeeesh;
var breh;

var sizerr;
function startingUsername() {
	sheeeesh = prompt("What is your username? For random username say random.");
	if (sheeeesh === null) {
		alert("Not a valid username.");
		startingUsername();
	}

	sheeeesh = sheeeesh.toString();
	placerthingg = !sheeeesh.trim().length;
	if (placerthingg == true) {
		alert("Not a valid username.");
		startingUsername();
	}

	if (sheeeesh.length < 3) {
		alert("Username must be at least 3 characters long");
		startingUsername();
	} else if (sheeeesh.length > 20) {
		alert("Username must be less than 20 characters long.");
		startingUsername();
	}

	sheeeesh = sheeeesh.replaceAll("[Staff]", "");
	sheeeesh = sheeeesh.replaceAll("[Head_Admin]", "");
	sheeeesh = sheeeesh.replaceAll("[Main_Dev]", "");
	sheeeesh = sheeeesh.replaceAll("[VIP_Admin]", "");
	sheeeesh = sheeeesh.replaceAll("[Banana]", "");
	if (sheeeesh.includes("You:") || sheeeesh.includes("dumb")) {
		startingUsername();
	}

	if (sheeeesh.includes("[Bot]")) {
		var meee = prompt("bot password: ");
		if (meee !== "replit.com/@CookieSnowOwl/TheChatApp") {
			sheeeesh = sheeeesh.replaceAll("[Bot]", "");
		}
	}

	sheeeesh = sheeeesh.trim();
	if (sheeeesh == "" || sheeeesh.length > 19) {
		alert("Not a valid username.");
		startingUsername();
	}

	sheeeesh = sheeeesh.replaceAll(" ", "_");
	sheeeeesh = prompt("Are you an admin? Yes or No").toLowerCase();
	var sheeeeeeesh = prompt("What color?(hex) if random, say random").toString();
	if (sheeeeeeesh.toLowerCase() != "random") {
		sheeeeeeeesh = sheeeeeeesh;
	} else {
		sheeeeeeeesh = getRandomColor();
	}

	if (sheeeeesh == "yes") {
		sheeeeeesh = prompt("What is admin password?").toString();
		if (sheeeeeesh == adminPassword) {
			selfStaff = true;
			if (sheeeesh == "MainDev") {
				var breeh = prompt("MainDev password please:").toString();
				if (breeh != maindevPassword) {
					alert("incorrect.");
					startingUsername();
				} else {
					sheeeesh = "[Main_Dev] " + sheeeesh;
					breh = "Main_Dev";
				}
			} else if (sheeeesh == "timmy") {
				var breeh = prompt("timmy password please:").toString();
				if (breeh != timmyPassword) {
					alert("incorrect");
					startingUsername();
				}

				sheeeesh = "[Head_Admin] " + sheeeesh;
				breh = "Head_Admin";
			} else if (sheeeesh == "Jeffr3y") {
				var breeh = prompt("Jeffr3y password please:").toString();
				if (breeh != jeffr3yPassword) {
					alert("incorrect");
					startingUsername();
				}

				sheeeesh = "[Banana] " + sheeeesh;
				breh = "Banana";
				sheeeeeeeesh = "#ffe135";
			} else if (sheeeesh == "Evan") {
				var breeh = prompt("Evan password please:").toString();
				if (breeh != evanPassword) {
					alert("incorrect");
					startingUsername();
				}

				sheeeesh = "[VIP_Admin] " + sheeeesh;
				breh = "VIP_Admin";
			} else {
				sheeeesh = "[Staff] " + sheeeesh;
				breh = "Staff";
			}
		} else {
			alert("incorrect.");
			startingUsername();
		}
	} else if (sheeeeesh == "no") {
		selfStaff = false;
		breh = "normie";
	} else {
		alert("what can that mean?");
		startingUsername();
	}

	var Meow = prompt(
		"size of text? number from 1-6, with 6 being smallest and 1 being biggest."
	);
	switch (Meow) {
		case "1":
			sizerr = "h1";
			break;
		case "2":
			sizerr = "h2";
			break;
		case "3":
			sizerr = "h3";
			break;
		case "4":
			sizerr = "h4";
			break;
		case "5":
			sizerr = "h5";
			break;
		case "6":
			sizerr = "h6";
			break;
		default:
			alert("What can that mean?");
			startingUsername();
			break;
	}
}

startingUsername();
if (sheeeesh.toUpperCase() == "RANDOM") {
	var sike = getRandomName();
	sike = sike.replaceAll(" ", "_");
} else {
	sheeeesh = sheeeesh.replaceAll(" ", "_");
	var sike = sheeeesh;
}

var drone = new ScaleDrone(CLIENT_ID, {
	data: {
		// Will be sent out as clientData via events
		name: sike,
		color: sheeeeeeeesh,
		isStaff: selfStaff,
		typeStaff: breh,
	},
});

const revenge = {
	id: "BPS7fV64M8",
	clientData: {
		name: "[Bot]_Revenge",
		color: "#660000",
		isStaff: "true",
	},
};

let members = [];

drone.on("open", (error) => {
	if (error) {
		return console.error(error);
	}

	const room = drone.subscribe("observable-room", {
		historyCount: 100,
	});

	room.on("open", (error) => {
		if (error) {
			return console.error(error);
		}
	});

	room.on("members", (m) => {
		if (eatBeans(members[members.length - 1])) {
			members[members.length - 1] = eatBeans(members[members.length - 1]);
		}

		members = m;
		updateMembersDOM();
	});

	const server_thing = {
		id: "BPS7fV64M7",
		clientData: {
			name: "[Bot]_Server",
			color: "#146811",
		},
	};

	const banana_thing = {
		id: "BPS5hV64M8",
		clientData: {
			name: "[Bot]_BananaGod",
			color: "#ffe135",
		},
	};

	const History_Bot = {
		id: "aaaaaaaaaaaa",
		clientData: {
			name: "[Bot]_History",
			color: "#146811",
		},
	};

	room.on("member_join", (member) => {
		members.push(member);
		updateMembersDOM();
		addMessageToListDOM(member.clientData.name + " has joined.", server_thing);
	});

	room.on("member_leave", ({ id }) => {
		var chicken = 0;
		var chickenn;

		for (let i = 0; i < members.length; i++) {
			if (members[i].id == id) {
				chicken = members[i].clientData.name;
				chickenn = i;
				break;
			}
		}

		members.splice(chickenn, 1);
		updateMembersDOM();

		if (!chicken == 0) {
			addMessageToListDOM(chicken + " has left.", server_thing);
		}
	});

	room.on("history_message", ({ data }) => {
		addMessageToListDOM(data, History_Bot);
	});

	room.on("data", (text, member) => {
		var cccccccc = 0;

		for (let i = 0; i < members.length; i++) {
			if (members[i] == member) {
				cccccccc = 1;
			}
		}

		if (member && (cccccccc || member == server_thing)) {
			if (eatBeans(member)) {
				members = eatBeans(member);
			}

			addMessageToListDOM(text, member);

			if (document.visibilityState !== "visible" && hasread == false) {
				notification = new Notification("New Messages!");
				new Audio("audio/button-09a.mp3").play();
				document.addEventListener("visibilitychange", function () {
					if (document.visibilityState === "visible") {
						notification.close();
					}
				});
				hasread = true;
				setTimeout(
					function () {
						hasread = false;
					},

					5000
				);
			}
		} else {
			// Message is from server
		}
	});
});

drone.on("close", (event) => {
	console.log("Connection was closed", event);
});

drone.on("error", (error) => {
	console.error(error);
});

function arrayRemove(arr, value) {
	return arr.filter(function (ele) {
		return ele != value;
	});
}

function eatBeans(member) {}

function colorMaker(color) {
	return function () {
		document.body.style.backgroundColor = color;
		document.body.style.color = "black";
	};
}

//closure function
var backgroundGreen = colorMaker("green");
var backgroundRed = colorMaker("lightcoral");
var backgroundBlue = colorMaker("powderblue");
var backgroundYellow = colorMaker("yellow");
var backgroundGrey = colorMaker("whitesmoke");
function backgroundBlack() {
	document.body.style.backgroundColor = "black";
	document.body.style.color = "white";
}

function getRandomName() {
	const adjs = [
		"autumn",
		"hidden",
		"bitter",
		"misty",
		"silent",
		"empty",
		"dry",
		"dark",
		"summer",
		"icy",
		"delicate",
		"quiet",
		"white",
		"cool",
		"spring",
		"winter",
		"patient",
		"twilight",
		"dawn",
		"crimson",
		"wispy",
		"weathered",
		"blue",
		"billowing",
		"broken",
		"cold",
		"damp",
		"falling",
		"frosty",
		"green",
		"long",
		"late",
		"lingering",
		"bold",
		"little",
		"morning",
		"muddy",
		"old",
		"red",
		"rough",
		"still",
		"small",
		"sparkling",
		"throbbing",
		"shy",
		"wandering",
		"withered",
		"wild",
		"black",
		"young",
		"holy",
		"solitary",
		"fragrant",
		"aged",
		"snowy",
		"proud",
		"floral",
		"restless",
		"divine",
		"polished",
		"ancient",
		"purple",
		"lively",
		"nameless",
	];
	const nouns = [
		"waterfall",
		"river",
		"breeze",
		"moon",
		"rain",
		"wind",
		"sea",
		"morning",
		"snow",
		"lake",
		"sunset",
		"pine",
		"shadow",
		"leaf",
		"dawn",
		"glitter",
		"forest",
		"hill",
		"cloud",
		"meadow",
		"sun",
		"glade",
		"bird",
		"brook",
		"butterfly",
		"bush",
		"dew",
		"dust",
		"field",
		"fire",
		"flower",
		"firefly",
		"feather",
		"grass",
		"haze",
		"mountain",
		"night",
		"pond",
		"darkness",
		"snowflake",
		"silence",
		"sound",
		"sky",
		"shape",
		"surf",
		"thunder",
		"violet",
		"water",
		"wildflower",
		"wave",
		"water",
		"resonance",
		"sun",
		"wood",
		"dream",
		"cherry",
		"tree",
		"fog",
		"frost",
		"voice",
		"paper",
		"frog",
		"smoke",
		"star",
	];
	return (
		adjs[Math.floor(Math.random() * adjs.length)] +
		"_" +
		nouns[Math.floor(Math.random() * nouns.length)]
	);
}

function getRandomColor() {
	var lum = -0.25;
	var hex = String(
		"#" + Math.random().toString(16).slice(2, 8).toUpperCase()
	).replace(/[^0-9a-f]/gi, "");

	if (hex.length < 6) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	var rgb = "#",
		c,
		i;

	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i * 2, 2), 16);
		c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
		rgb += ("00" + c).substr(c.length);
	}

	return rgb;
}

//------------- DOM STUFF

const DOM = {
	membersCount: document.querySelector(".members-count"),
	membersList: document.querySelector(".members-list"),
	messages: document.querySelector(".messages"),
	input: document.querySelector(".message-form__input"),
	form: document.querySelector(".message-form"),
};

DOM.form.addEventListener("submit", sendMessage);

function sendMessage() {
	const value = DOM.input.value;

	if (value === "") {
		return;
	}

	var thingg = !value.trim().length;
	if (thingg == true) {
		return;
	}

	DOM.input.value = "";

	drone.publish({
		room: "observable-room",
		message: value,
	});
}

function createMemberElement(member) {
	const { name, color } = member.clientData;
	const el = document.createElement("div");
	el.appendChild(document.createTextNode(name));
	el.className = "member";
	el.style.color = color;
	return el;
}

function updateMembersDOM() {
	DOM.membersCount.innerText = `$ {
    members.length
  }

  users in the chat:`;
	DOM.membersList.innerHTML = "";
	members.forEach((member) =>
		DOM.membersList.appendChild(createMemberElement(member))
	);
}

function createMessageElement(text, member) {
	if (text === "/revenge" && member.clientData.typeStaff == "Main_Dev") {
		member = revenge;
		text =
			"I am back. I am not dead. You may not see me... but I haunt you.<br>Hahahahhaa...";
	}

	if (text === "/themask") {
		text =
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/Gp9gFXf56yQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	}

	if (text === "/lifeisfun") {
		text =
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/CAb_bCtKuXg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	}

	if (text === "/roadtrip") {
		text =
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/Ow_PNMtMGhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	}

	if (text === "/changemyclothes") {
		text =
			'<iframe width="560" height="315" src="https://www.youtube.com/embed/kxWUcCUfDuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	}

	if (text === "/online") {
		member = {
			id: "BPS7fV64M7",
			clientData: {
				name: "[Bot]_Server",
				color: "#146811",
			},
		};

		text = "";
		members.forEach((memberd) => (text += memberd.clientData.name + "<br>"));
	}

	if (!member.clientData.isStaff) {
		text = text
			.replaceAll("/sudo ", "")
			.replaceAll("/updates ", "")
			.replaceAll("/exists? ", "")
			.replaceAll("/adminnick ", "");
		text = text.replaceAll("/makeadmin ", "");
		text = text.replaceAll("/kick ", "");
		text = text.replaceAll("/TakeL ", "");
	}

	if (member.clientData.typeStaff !== "Main_Dev") {
		text = text.replaceAll("/serverrestart", "");
	}

	if (text.includes("/serverrestart")) {
		var cccmeow;

		for (let i = 0; i < members.length; i++) {
			if (members[i].clientData.name == "[Main_Dev]_MainDev") {
				cccmeow = i;
			}
		}

		members = [members[cccmeow]];
		updateMembersDOM();
		return;
	}

	if (
		!(
			member.clientData.typeStaff == "Main_Dev" ||
			member.clientData.name == "[Bot]_Server"
		)
	) {
		text = text.replaceAll("[Main_Dev]", "");
	}

	if (
		!(
			member.clientData.typeStaff == "Main_Dev" ||
			member.clientData.name == "[Bot]_Server" ||
			member.clientData.typeStaff == "Head_Admin"
		)
	) {
		text = text.replaceAll("[Head_Admin]", "");
	}

	if (
		!(
			member.clientData.typeStaff == "Main_Dev" ||
			member.clientData.typeStaff == "Head_Admin" ||
			member.clientData.name == "[Bot]_Server"
		)
	) {
		text = text.replaceAll("[VIP_Admin]", "");
		text = text.replaceAll("[Banana]", "");
	}

	text = text.trim();
	if (text.includes("/img")) {
		if (text.split(" ").length == 2) {
			text = text.replace("/img", "");
			text = "<img src='" + text + "'>";
			var disableLink = true;
		} else {
			var disableLink = false;
		}
	} else {
		var disableLink = false;
	}

	if (!text.includes("/beansbelike ")) {
		if (text.includes("/kick ")) {
			text = text.replaceAll("/kick ", "");
			for (let i = 0; i < members.length; i++) {
				if (members[i].clientData.name == text) {
					if (
						(!members[i].clientData.isStaff ||
							member.clientData.typeStaff == "Main_Dev" ||
							member.clientData.typeStaff == "Head_Admin") &&
						members[i].clientData.typeStaff !== "Main_Dev"
					) {
						members = arrayRemove(members, members[i]);
					}
				}
			}

			updateMembersDOM();
			return;
		}

		if (text.includes("/makeadmin ")) {
			text = text.replaceAll("/makeadmin ", "");
			var texterr = text.split(" ");
			var membeer = texterr[0];
			for (let i = 0; i < members.length; i++) {
				if (members[i].clientData.name.toString() == membeer) {
					member = members[i];
					break;
				}
			}

			if (texterr[1] == "true") {
				member.clientData.isStaff = true;
			} else {
				if (
					!(
						member.clientData.typeStaff == "Main_Dev" ||
						member.clientData.typeStaff == "Head_Admin" ||
						member.clientData.typeStaff == "VIP_Admin" ||
						member.clientData.typeStaff == "Banana"
					)
				) {
					member.clientData.isStaff = false;
				}
			}

			return;
		}

		if (
			text.includes("/makeSay ") &&
			member.clientData.typeStaff == "Main_Dev"
		) {
			text = text.replace("/makeSay ", "");
			var texterr = text.split(" ");
			var membeer = texterr[0];
			var coloor = texterr[1];
			member = {
				id: "nsyoxuiH5u",
				clientData: {
					name: membeer,
					color: coloor,
					isStaff: true,
					typeStaff: "Bot",
				},
			};

			var meow = "";

			for (let i = 2; i < texterr.length; i++) {
				meow += texterr[i] + " ";
			}

			text = meow;
		}

		if (
			text == "/banana" &&
			(member.clientData.typeStaff == "Main_Dev" ||
				member.clientData.typeStaff == "Head_Admin" ||
				member.clientData.typeStaff == "Banana")
		) {
			listt = [
				"Bananas are literally the best vegetable in the world.",
				"Banana RULES",
				"All follow the Banana King",
				"Banana is yellow, banana is big, and banana is great",
				"Banana.",
				"BANANA",
				"BANANA FTW",
				"banana is 101% best",
				"banana person is a good person, are you banana person? (If you aren't I WILL come after u)",
				"early to banana and early to banana is a good person in their heart.",
				"A banana a day keeps the death boi away, so eat ur bananas kids.",
				"you shall listen to me",
				"You are great, but the banana is greater than you. If you want to become BananaGreat, you will respect banana to be more powerful. Of course, if you are more powerful, banana more powerful. you will never get BananaGreat, but you will get powerful if respect the King Banana.",
				"So if you wake up in the morning, then you should first eat 5 bananas, and then eat 10 more bananas, and then brush your teeth with banana flavored banana paste, then you eat 69 more bananas, go to school with your banana backpack, banana-puter, banana pencils, banana pens, banana-per, a lot more bananas, banana juice #stayhydrated, and the al-mighty ultimate banana. Then in school, secretly eat banana and create a banana army to overthrow your school and all As, and if you do that, the banana god will support you. After you take over the school, go home to your banana peel palace, and eat more bananas, and then turn into a great banana forever. #LifeChoices",
				"<img src='https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg' alt='banana great banana god'>",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/LEYJ4VsCy7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
				'<iframe src="https://giphy.com/embed/1fHlf4mgS2JPy" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/eating-banana-drill-1fHlf4mgS2JPy">via GIPHY</a></p>',
			];
			listDerive = listt[getRandomInt(0, listt.length)];
			console.log(listDerive);
			text = listDerive;
			member = {
				id: "eWh1k3sgAB",
				clientData: {
					name: "[Bot_God]_BananaGod",
					color: "#ffe135",
				},
			};

			console.log(text, member);
		}

		if (text.includes("/adminnick ")) {
			text = text.replaceAll("/adminnick ", "");
			texterr = text.split(" ");
			var membeer = texterr[0];
			var chicken = texterr[1];

			if (chicken.length > 19) {
				return;
			}

			for (let i = 0; i < members.length; i++) {
				if (members[i].clientData.name.toString() == membeer) {
					member = members[i];
					break;
				}
			}

			member.clientData.name = chicken;
			updateMembersDOM();
			return;
		}

		if (text.includes("/TakeL ")) {
			text = text.replace("/TakeL ", "");
			var texterr = text.split(" ");
			var membeer = texterr[0];
			var chickennn = texterr[1] + " ";

			for (let i = 2; i < texterr.length; i++) {
				chickennn += texterr[i] + " ";
			}

			for (let i = 0; i < members.length; i++) {
				if (members[i].clientData.name.toString() == membeer) {
					member = members[i];
					break;
				}
			}

			member.clientData.isStaff = false;
			var wasmember = member;
			members = arrayRemove(members, member);
			updateMembersDOM();
			member = wasmember;
			text = chickennn;
		}

		if (text.includes("/colorchangehex ")) {
			text = text.replaceAll("/colorchangehex ", "");
			if (
				!(
					member.clientData.typeStaff === "Main_Dev" ||
					member.clientData.typeStaff === "Head_Admin"
				)
			) {
				if (text.length !== 7 && text.includes("#")) {
					return;
				}
			}

			var newColor = text;
			var c = -1;

			for (let iiii = 0; iiii < members.length; iiii++) {
				if (members[iiii] == member) {
					c = iiii;
				}
			}

			members[c].clientData.color = text;
			return;
		}

		if (text.includes("/nick ")) {
			text = text.replaceAll("/nick ", "");
			text = text.replaceAll("[Head_Admin]", "");
			text = text.replaceAll("[Bot]", "");
			text = text.replaceAll(" ", "_");
			if (text.length > 20 || text.length < 3) {
				return;
			}

			text = text.replaceAll("[Staff]", "");
			text = text.replaceAll("[Main_Dev]", "");
			var c = -1;

			for (let iiii = 0; iiii < members.length; iiii++) {
				if (members[iiii] == member) {
					c = iiii;
				}
			}

			members[c].clientData.name = text;
			updateMembersDOM();
			return;
		}

		if (text.includes("/exists? ")) {
			text = text.replace("/exists? ", "");
			var membeer = text;
			var membeernames = [];
			for (let i = 0; i < members.length; i++) {
				membeernames.push(members[i].clientData.name);
			}

			member = {
				id: "BPS7fV64M7",
				clientData: {
					name: "[Bot]_Server",
					color: "#146811",
				},
			};

			if (membeernames.includes(membeer)) {
				text = membeer + " exists.";
			} else {
				text = membeer + " doesn't exist";
			}
		}

		if (text.includes("/sudo ")) {
			text = text.replace("/sudo ", "");
			texterr = text.split(" ");
			var membeer = texterr[0];
			var chicken = "";

			for (let i = 1; i < texterr.length; i++) {
				chicken += " " + texterr[i];
			}

			for (let i = 0; i < members.length; i++) {
				if (members[i].clientData.name.toString() == membeer) {
					member = members[i];
					break;
				}
			}

			if (member.clientData.isStaff == true) {
				return;
			}

			text = chicken;
		} else if (text.includes("/updates ")) {
			text = text.replace("/updates ", "");
			member = {
				id: "BPS7fV64M7",
				clientData: {
					name: "[Bot]_Server",
					color: "#146811",
				},
			};
		}
	} else {
		text = text.replaceAll("/beansbelike ", "");
	}

	const el = document.createElement("div");
	el.appendChild(createMemberElement(member));

	text = text.replaceAll(">:(", "😠");
	text = text.replaceAll(">:)", "😈");
	if (text.includes(":)")) {
		text = text.replaceAll(":)", "😀");
	}

	if (text.includes(":D")) {
		text = text.replaceAll(":D", "😁");
	}

	textt = text.toLowerCase();
	text = text.replaceAll("^_^'", "😅");
	text = text.replaceAll("xD", "😆");
	text = text.replaceAll(":|", "😐");
	text = text.replaceAll(":O", "😮");
	text = text.replaceAll(":(", "🙁");
	text = text.replaceAll(":s", "😖");
	text = text.replaceAll(":P", "😛");
	text = text.replaceAll(":ROFL:", "🤣");
	text = text.replaceAll(":bye:", "👋");
	text = text.replaceAll("$_$", "🤑");
	text = text.replaceAll("B)", "😎");
	text = text.replaceAll(";)", "😏");
	text = text.replaceAll("<3", "🧡");
	text = text.replaceAll(":poop:", "💩");
	text = text.replaceAll(":'(", "😭");
	text = text.replaceAll(":mindblown:", "🤯");
	text = text.replaceAll(":freezing:", "🥶");
	if (
		textt.includes("fuck") ||
		textt.includes("bitch") ||
		textt.includes(" ass") ||
		textt.includes("shit")
	) {
		textt = textt.replaceAll("fuck", "");
		textt = textt.replaceAll("bitch", "");
		textt = textt.replaceAll(" ass", "");
		textt = textt.replaceAll("shit", "");
		text = textt;
	}

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	if (text.includes("/shout ")) {
		text = text.replace("/shout ", "");
		text = text.toUpperCase() + " has been shouted! ༼ つ ◕_◕ ༽つ";
	}

	//links!
	var bruhtext = text;
	if (text.includes("https://") && !disableLink) {
		var meowww;
		var newtext;

		if (!(text.split(" ").length == 1)) {
			console.log("notoneword");
			console.log(text.split(" ") + "bruh");
			var otext = text;
			text = text.split(" ");
			for (let i = 0; i < text.length; i++) {
				if (
					text[i].charAt(0) +
						text[i].charAt(1) +
						text[i].charAt(2) +
						text[i].charAt(3) +
						text[i].charAt(4) +
						text[i].charAt(5) +
						text[i].charAt(6) +
						text[i].charAt(7) ==
					"https://"
				) {
					meowww = i;
					break;
				}

				console.log(text[i] + " iteration " + i);
			}

			console.log(meowww);
			if (meowww != undefined) {
				console.log(meowww + "yes it exists");
				text[meowww] =
					"<a href='" +
					text[meowww] +
					"' target='_blank'>" +
					text[meowww] +
					"</a>";

				for (let i = 0; i < text.length; i++) {
					newtext += text[i] + " ";
				}

				newtext = newtext.substring(9);
			} else {
				console.log(meowww + "no doesn't exist");
				newtext = bruhtext;
			}

			console.log(newtext + "evencooler");
		} else {
			if (
				text.charAt(0) +
					text.charAt(1) +
					text.charAt(2) +
					text.charAt(3) +
					text.charAt(4) +
					text.charAt(5) +
					text.charAt(6) +
					text.charAt(7) ==
				"https://"
			) {
				console.log("is one word");
				newtext = "<a href='" + text + "' target='_blank'>" + text + "</a>";
			} else {
				newtext = bruhtext;
			}
		}

		text = newtext;
	}

	console.log(text + "bruhhhhhh this is cool"); //end
	var date = new Date();
	var stringy = "";

	if (date.getMinutes() < 10) {
		var bbbb = "0";
	} else {
		var bbbb = "";
	}

	if (!text.trim().length) {
		return;
	}

	if (date.getHours() > 12) {
		stringy +=
			"\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 -sent at " +
			(date.getHours() - 12);
		stringy += ":" + bbbb + date.getMinutes() + " PM";
		text += stringy;
	} else if (date.getHours() == 12) {
		stringy +=
			"\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 -sent at " +
			date.getHours();
		stringy += ": " + bbbb + date.getMinutes() + " PM";
		text += stringy;
	} else {
		stringy +=
			"\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 -sent at " +
			date.getHours();
		stringy += ": " + bbbb + date.getMinutes() + " AM";
		text += stringy;
	}

	new Audio("audio/button-3.mp3").play();
	var messageLOLLL = document.createElement(sizerr);
	messageLOLLL.innerHTML = text;
	messageLOLLL.style.display = "inline";
	el.appendChild(messageLOLLL);
	el.className = "message";
	return el;
}

function addMessageToListDOM(text, member) {
	if (text == "AdminPasswordBeLike123454321!@#$%$#@!") {
		return;
	}

	const el = DOM.messages;

	if (member.clientData.selfStaff) {
		text = text.replaceAll("/sudo ", "");
		text = text.replaceAll("/updates", "");
	}

	const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;

	try {
		el.appendChild(createMessageElement(text, member));
	} catch {
		return;
	}

	if (wasTop) {
		el.scrollTop = el.scrollHeight - el.clientHeight;
	}
}

function leave() {
	try {
		window.close();
	} catch {
		location.href = "https://chathere.cookiesnowowl.repl.co";
	}
}
