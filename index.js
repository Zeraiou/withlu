const canvas = document.querySelector('canvas')

canvas.width = 1024
canvas.height = 576

const c = canvas.getContext('2d')

drawBackground()

function drawBackground() {
	c.fillStyle = "white"
	c.fillRect(0, 0, canvas.width, canvas.height)

	c.fillStyle = "red"
	c.font = "20px poppins"
	c.fillText("Luvia veut qu'on écrive du texte.", 100, 200)
}
