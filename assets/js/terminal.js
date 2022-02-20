let stop = false;

let mobileWelcomeText = [
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
		string: $('.introduction').html() + 'root@pbaekgaard: '
	},
];

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
		string: $('.skillsMessage').html() + 'root@pbaekgaard: '
	},
];

var aboutText = [
	{
		file: false,
		string: ". ~/about.js"
	},
	{
		file: true,
		string: $('.aboutMessage').html() + 'pbk@portfolio: '
	},
];

var contactText = [
	{
		file: false,
		string: ". ~/contact.js"
	},
	{
		file: true,
		string: $('.contactMessage').html() + 'pbk@portfolio: '
	},
];

var projectsText = [
	{
		file: false,
		string: ". ~/projects.js"
	},
	{
		file: true,
		string: $('.projectsMessage').html() + 'pbk@portfolio: '
	},
];

async function sleep(ms){
	await new Promise(resolve => setTimeout(resolve, ms));
}

async function type(words) {
	let i = 0;
	let j = 0;
	let textDiv = document.querySelector("#text");
	textDiv.innerHTML = "pbk@portfolio: ";
	while(stop != true){
		for (i = 0; stop != true, i < words.length; i++) {
		text = words[i];
		console.log(text);
		if(text.file == true) {
			// await sleep(200);
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
			textDiv.innerHTML += "<br><br>pbk@portfolio: "
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


const isMobile = window.matchMedia("only screen and (max-width: 1200px)").matches;
async function myStart() {
	if (isMobile) {
		type(mobileWelcomeText);
	}
	else {
		type(welcomeText);
	}
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

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height =+ (element.scrollHeight)+"px";
}


