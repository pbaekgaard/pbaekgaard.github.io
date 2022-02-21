setTimeout(function() {
window.location.href="https://pbaekgaard.github.io";
}, 6000);

const timer = document.getElementById('timer');
timer.innerHTML = "You'll get redirected in 5 seconds..."
setTimeout(function() {
	timer.innerHTML = "You'll get redirected in 4 seconds..."
}, 1000);

setTimeout(function() {
	timer.innerHTML = "You'll get redirected in 3 seconds..."
}, 2000);

setTimeout(function() {
	timer.innerHTML = "You'll get redirected in 2 seconds..."
}, 3000);

setTimeout(function() {
	timer.innerHTML = "You'll get redirected in 1 seconds..."
}, 4000);

setTimeout(function() {
	timer.innerHTML = "REDIRECTING..."
}, 5000);