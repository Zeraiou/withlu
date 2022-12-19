class Player {
	constructor({ position, grosseur, color }) {
		this.position = position
		this.grosseur = grosseur
		this.color = color

		this.velocity = {
			x: 0,
			y: 0,
		}
		this.gravity = 0.5
		this.movementSpeed = 5
		this.ralentissement = 1
		this.jumpingDistance = -12
		this.onGround = false
	}

	update() {
		this.draw()

		this.applyGravity()
		this.detectCollisionWithGround()

		this.move()
		this.jump()

		this.detectCollisionWithLeftWall()
		this.detectCollisionWithRightWall()
	}

	move() {
		if (keys.KeyA.pressed) {
			this.velocity.x = -this.movementSpeed
			this.position.x += this.velocity.x
		}
		if (keys.KeyD.pressed) {
			this.velocity.x = this.movementSpeed
			this.position.x += this.velocity.x
		}
	}

	jump() {
		if (keys.KeyW.pressed && this.onGround === true) {
			this.velocity.y = this.jumpingDistance
			this.position.y += this.velocity.y
			this.onGround = false
		}
	}

	applyGravity() {
		this.velocity.y += this.gravity
		this.position.y += this.velocity.y
	}

	detectCollisionWithGround() {
		if (this.position.y + this.grosseur.height >= canvas.height - 50) {
			this.velocity.y = 0
			this.position.y = canvas.height - 50 - this.grosseur.height
			this.onGround = true
		}
	}

	detectCollisionWithLeftWall() {
		if (this.position.x <= 0) {
			this.velocity.x = 0
			this.position.x = 1
		}
	}

	detectCollisionWithRightWall() {
		if (this.position.x >= canvas.width - this.grosseur.width) {
			this.velocity.x = 0
			this.position.x = canvas.width - 1 - this.grosseur.width
		}
	}

	draw() {
		c.fillStyle = this.color
		c.fillRect(this.position.x, this.position.y, this.grosseur.width, this.grosseur.height)
	}
}