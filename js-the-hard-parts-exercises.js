

function everyXsecsForYsecs(func, int, tot){
	setTimeout(clearInterval(func), (tot * 1000));
	setInterval(func, (int * 1000));
}

function sayHowdy(){
	console.log('Howdy!');
}


function forEvery(arr, cbFunc){
	for(let i = 0; i < arr.length; i++){
		cbFunc(arr[i], i);
	}
}

const delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i){
	setTimeout(function(i){
		console.log(i);
	}, delayTime * 1000);
}

forEvery(delays, delayLog);



