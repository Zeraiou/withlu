window.addEventListener("keydown", (event) => {
	switch(event.code) {
		case "KeyA":
			keys.KeyA.pressed = true
			break

		case "KeyD":
			keys.KeyD.pressed = true
			break

		case "KeyW":
			keys.KeyW.pressed = true
			break

		default: break
	}
})

window.addEventListener("keyup", (event) => {
	switch(event.code) {
		case "KeyA":
			keys.KeyA.pressed = false
			break

		case "KeyD":
			keys.KeyD.pressed = false
			break

		case "KeyW":
			keys.KeyW.pressed = false
			break

		default: break
	}
})