class Player {
	constructor({ position, color, image, name }) {
		this.position = position
		this.color = color
		this.image = new Image()
		this.image.onload = () => {
			this.width = this.image.width
			this.height = this.image.height
			this.loaded = true
		}

		this.image.src = image.imageSrc

		this.velocity = {
			x: 0,
			y: 0,
		}
		this.gravity = 0.5
		this.movementSpeed = 5
		this.ralentissement = 1
		this.jumpingDistance = -12
		this.onGround = false
		this.name = name

		this.hitbox = {
			x: this.position.x + 26,
			y: this.position.y + 24,
			width: 32,
			height: 57,
		}
	}

	update() {
		// this.drawFullImage()
		// this.drawHitbox()
		this.draw()

		this.applyGravity()
		this.detectCollisionWithGround()

		this.move()
		this.jump()

		this.detectCollisionWithLeftWall()
		this.detectCollisionWithRightWall()
	}

	updateHitbox() {
		this.hitbox = {
			x: this.position.x + 26,
			y: this.position.y + 24,
			width: 42,
			height: 58,
		}
	}

	move() {
		if (keys.KeyA.pressed) {
			this.velocity.x = -this.movementSpeed
			this.position.x += this.velocity.x
			this.updateHitbox()
		}
		if (keys.KeyD.pressed) {
			this.velocity.x = this.movementSpeed
			this.position.x += this.velocity.x
			this.updateHitbox()
		}
	}

	jump() {
		if (keys.KeyW.pressed && this.onGround === true) {
			this.velocity.y = this.jumpingDistance
			this.position.y += this.velocity.y
			this.onGround = false
			this.updateHitbox()
		}
	}

	applyGravity() {
		this.velocity.y += this.gravity
		this.position.y += this.velocity.y
		this.updateHitbox()
	}

	detectCollisionWithGround() {
		if (this.hitbox.y + this.hitbox.height >= canvas.height - 50) {
			this.velocity.y = 0
			this.position.y = canvas.height - 50 - this.hitbox.height - 24 - 0.01
			this.onGround = true
			this.updateHitbox()
		}
	}

	detectCollisionWithLeftWall() {
		if (this.hitbox.x <= 1) {
			this.velocity.x = 0
			this.position.x = 1 - 26 + 0.01
			this.updateHitbox()
		}
	}

	detectCollisionWithRightWall() {
		if (this.hitbox.x + this.hitbox.width >= canvas.width) {
			this.velocity.x = 0
			this.position.x = canvas.width - 1 - this.hitbox.width - 26 - 0.01
			this.updateHitbox()
		}
	}

	draw() {
		c.drawImage(this.image, this.position.x, this.position.y)
	}	

	drawHitbox() {
		c.fillStyle = "rgba(230, 0, 0, 0.2)"
		c.fillRect(this.hitbox.x, this.hitbox.y, this.hitbox.width, this.hitbox.height)
	}

	drawFullImage() {
		c.fillStyle = "rgba(0, 230, 0, 0.2)"
		c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}
}