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
		string: $('.skillsMessage').html() + '$ '
	},
];

var aboutText = [
	{
		file: false,
		string: ". ~/about.js"
	},
	{
		file: true,
		string: $('.aboutMessage').html() + '$ '
	},
];

var contactText = [
	{
		file: false,
		string: ". ~/contact.js"
	},
	{
		file: true,
		string: $('.contactMessage').html() + '$ '
	},
];

var projectsText = [
	{
		file: false,
		string: ". ~/projects.js"
	},
	{
		file: true,
		string: $('.projectsMessage').html() + '$ '
	},
];

async function sleep(ms){
	await new Promise(resolve => setTimeout(resolve, ms));
}

async function type(words) {
	let i = 0;
	let j = 0;
	let textDiv = document.querySelector("#text");
	textDiv.innerHTML = "$ ";
	while(stop != true){
		for (i = 0; stop != true, i < words.length; i++) {
		text = words[i];
		console.log(text);
		if(text.file == true) {
			textDiv.innerHTML += text.string;
		}
		if(text.file != true) {
			for(j = 0; stop != true, j < text.string.length; j++) {
				if(j<text.string.length && stop != true) {
					textDiv.innerHTML += text.string.charAt(j);
					await sleep(25);
				}
			}
		}
		if(stop != true && words[i+1] != undefined && words[i+1].file != true) {
			textDiv.innerHTML += "<br><br>$ "
			await sleep(800);
		}
		else {
			if (stop == true){
				return 0;
			}
		}
	}
	stop = true;
	}
	
}


async function myStart() {
	type(welcomeText);
document.getElementById('skills').addEventListener("click", async function(){
	stop = true;
	await sleep(800);
	stop = false;
	await type(skillsText);
});

document.getElementById('projects').addEventListener("click", async function(){
	stop = true;
	await sleep(800);
	stop = false;
	await type(projectsText);
});

document.getElementById('about').addEventListener("click", async function(){
	stop = true;
	await sleep(800);
	stop = false;
	await type(aboutText);
});

document.getElementById('contact').addEventListener("click", async function(){
	stop = true;
	await sleep(800);
	stop = false;
	await type(contactText);
});
}

async function start() {
	return await myStart();
}

(async() => {
  await start();
})();

