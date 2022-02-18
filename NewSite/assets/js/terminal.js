let stop = false;
let welcomeText = [
	{
		file: false,
		string: "cd /bin/terminal/"
	},
	{
		file: false,
		string: "chmod +x terminal.js"
	},
	{
		file: false,
		string: "./terminal.js"
	},
	{
		file: true,
		string: $('.introduction').html()
	},
	{
		file: false,
		string: "You can click on a button on the left, to learn more about me!"
	},
];

var skillsText = [
	{
		file: false,
		string: ". ~/skills.js"
	},
	{
		file: true,
		string: $('.mySkills').html() + '$ '
	},
];

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function type(words) {
	let i = 0;
	let j = 0;
	let textDiv = document.querySelector("#text");
	textDiv.innerHTML = "$ ";
	for (i = 0; i < words.length; i++) {
		if(stop === true) {
			return;
		}
		text = words[i];
		console.log(text);
		if(text.file == true && words[i].string.substring(0,9) != "undefined") {
			textDiv.innerHTML += text.string;
		}
		if(words[i].string.substring(0,9) == "undefined") {
			textDiv.innerHTML += "<br> CONTENT IS MISSING! (PLEASE CONTACT ME SO I CAN FIX) ";
		}
		if(text.file != true) {
			for(j = 0; j < text.string.length; j++) {
				if(stop === true) {
					return
				}
				if(j<text.string.length) {
					textDiv.innerHTML += text.string.charAt(j);
					if(stop === true) {
						return
					}
					await sleep(25);
					if(stop === true) {
						return
					}
				}
			}
		}
		if(stop != true && words[i+1] != undefined && words[i+1].file != true) {
			textDiv.innerHTML += "<br><br>$ "
			await new Promise(resolve => setTimeout(resolve, 800));
		}
	}
}
async function start() {
	type(welcomeText);
	document.getElementById('skills').addEventListener("click", async function(){
	stop = true;
	await sleep(600);
	stop = false;
	await sleep(10);
	type(skillsText);
}, false)
}
start();
