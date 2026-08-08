PlayerEvents.loggedIn(event=>{
	if (event.player.persistentData.getBoolean("BundleAwarded") != true) {
		event.player.give("minecraft:cyan_bundle")
		event.player.persistentData.putBoolean("BundleAwarded", true)
	}
	if (event.player.persistentData.getBoolean("spyglassAwarded") != true) {
		event.player.give("minecraft:spyglass")
		event.player.persistentData.putBoolean("spyglassAwarded", true)
	}
	if (event.player.persistentData.getBoolean("atlasAwarded") != true) {
		event.player.give("book[minecraft:custom_name='{\"text\":\"Antique Atlas\",\"italic\":false}']")
		event.player.persistentData.putBoolean("atlasAwarded", true)
	}
	if (event.player.persistentData.getBoolean("fieldGuideAwarded") != true) {
		event.player.give("fieldguide:field_guide")
		event.player.persistentData.putBoolean("fieldGuideAwarded", true)
	}
})