let message: string = "Help me, Obi-wan Kenobi. You're my only hope!";
console.log(message);

let episode: number = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'

console.log("My favorite droid is " + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean {
	return parsecs < 12 
}

let distance = 14;

console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}? `)
call('R2')

