PlayerEvents.chat(event => {
	let player = event.player
	let message = event.message
	if (String(message)[0] == "t") {
		player.getMainHandItem().setCustomModelData(100000)
		player.getMainHandItem().useAnimation("bow")

	}
})