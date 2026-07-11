PlayerEvents.loggedIn(event=>{
	if (event.player.persistentData.getBoolean("BundleAwarded") != true) {
		event.player.give("minecraft:bundle")
		event.player.persistentData.putBoolean("BundleAwarded", true)
	}
})