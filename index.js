"use strict"

let count = 0

var interval = setInterval(() => {
	console.log(count += 10)
}, 250)

process.on("SIGTERM", () => {
	console.log("shutting down...")
	clearInterval(interval)
	console.log("shut down complete")
})
