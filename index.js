const canvas = document.querySelector('canvas')

canvas.width = 1024
canvas.height = 576

const c = canvas.getContext('2d')

let gameInterval = null

const player = new Player({
	position: {
		x: 100,
		y: 200
	},
	grosseur: {
		width: 25,
		height: 50
	},
	color: "rgb(168, 27, 29)"
})

const keys = {
	KeyA: {
		pressed: false
	},
	KeyD: {
		pressed: false
	},
	KeyW: {
		pressed: false
	},
}

function animate() {
	gameInterval = window.requestAnimationFrame(animate)

	drawBackground()
	player.update()
}

function drawBackground() {
	c.fillStyle = "white"
	c.fillRect(0, 0, canvas.width, canvas.height)

	// c.fillStyle = "red"
	// c.font = "20px poppins"
	// c.fillText("Luvia veut qu'on écrive du texte.", 100, 200)

	c.fillStyle = "rgb(235, 143, 52)"
	c.fillRect(0, canvas.height - 50, canvas.width, 5)
}

animate()


