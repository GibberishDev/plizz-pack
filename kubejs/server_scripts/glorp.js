BlockEvents.rightClicked(event => {
	let player = event.player
	let block = event.block
	let world = event.level
	let server = event.server
	// if (event.server.persistentData.glorp) {return}
	if (block.id.endsWith("button")) {
		let properties = block.getProperties()
		if (properties.face != "wall") return
		if (checkAltar(block, world, server)) {
			server.runCommandSilent('title @a title [{"text":"!!!","color":"#00ff00","obfuscated":true},{"text":"GLORP UPON YE!","color":"#00ff00","bold":true,"obfuscated":false},{"text":"!!!","color":"#00ff00","obfuscated":true}]')
			server.runCommandSilent("playsound minecraft:block.beacon.power_select master @a")
			event.server.persistentData.glorp = true
			server.runCommandSilent('summon item ' + block.pos.x + " " + block.pos.y + " " + block.pos.z + ' {"Item":{"id":"kubejs:glorp"},Glowing:1b}')
			server.runCommandSilent("team add glorp")
			server.runCommandSilent("team modify glorp color green")
			server.runCommandSilent('execute as @e[type=item,nbt={Item:{id:"kubejs:glorp"}}] run team join glorp')
		}
	}
})

function checkAltar(button, world, server) {
	switch (button.getProperties().facing) {
		case ("south") :{
			if (world.getBlock(button.pos.north()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.north().east()).id == "minecraft:lever" &&
				world.getBlock(button.pos.north().west()).id == "minecraft:lever" &&
				world.getBlock(button.pos.north().above()).id.includes("lightning_rod")) {
					server.runCommandSilent("summon minecraft:lightning_bolt "+ button.pos.x + " " + (button.pos.y + 5) + " " + (button.pos.z-1))
					server.runCommandSilent("particle minecraft:explosion_emitter "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z-1))
					setTimeout(() => {
						server.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
					}, 10);
					server.runCommandSilent("setblock "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z-1) +" minecraft:air")
					server.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
					server.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
					server.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
				} else return false
				break;}
		case ("north") :{
			if (
				world.getBlock(button.pos.south()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.south().east()).id == "minecraft:lever" &&
				world.getBlock(button.pos.south().west()).id == "minecraft:lever" &&
				world.getBlock(button.pos.south().above()).id.includes("lightning_rod")
			) {
				server.runCommandSilent("summon minecraft:lightning_bolt "+ button.pos.x + " " + (button.pos.y + 5) + " " + (button.pos.z+1))
				server.runCommandSilent("particle minecraft:explosion_emitter "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z+1))
				setTimeout(() => {
					server.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
				}, 10);
				server.runCommandSilent("setblock "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z+1) +" minecraft:air")
				server.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				server.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				server.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
			} else return false
				break;}
		case ("west") : {
			if (
				world.getBlock(button.pos.east()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.east().north()).id == "minecraft:lever" &&
				world.getBlock(button.pos.east().south()).id == "minecraft:lever" &&
				world.getBlock(button.pos.east().above()).id.includes("lightning_rod")
			) {
				server.runCommandSilent("summon minecraft:lightning_bolt "+ (button.pos.x+1) + " " + (button.pos.y + 5) + " " + (button.pos.z))
				server.runCommandSilent("particle minecraft:explosion_emitter "+ (button.pos.x+1) + " " + (button.pos.y + 1) + " " + (button.pos.z))
				setTimeout(() => {
					server.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
				}, 10);
				server.runCommandSilent("setblock "+ (button.pos.x+1) + " " + (button.pos.y + 1) + " " + (button.pos.z) +" minecraft:air")
				server.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
				server.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				server.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
			} else return false
			break;}
		case ("east") : {
			if (
				world.getBlock(button.pos.west()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.west().north()).id == "minecraft:lever" &&
				world.getBlock(button.pos.west().south()).id == "minecraft:lever" &&
				world.getBlock(button.pos.west().above()).id.includes("lightning_rod")
			) {
				server.runCommandSilent("summon minecraft:lightning_bolt "+ (button.pos.x-1) + " " + (button.pos.y + 5) + " " + (button.pos.z))
				server.runCommandSilent("particle minecraft:explosion_emitter "+ (button.pos.x-1) + " " + (button.pos.y + 1) + " " + (button.pos.z))
				setTimeout(() => {
					server.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
				}, 10);
				server.runCommandSilent("setblock "+ (button.pos.x-1) + " " + (button.pos.y + 1) + " " + (button.pos.z) +" minecraft:air")
				server.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
				server.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				server.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
			} else return false
			break;}
		default :{}
	}
	return true

}
ServerEvents.recipes(event => {
	event.shapeless(
		Item.of("kubejs:glorp_with_gun")
			.withLore(Text.green("Hands up").obfuscated(true))
		,[
			"kubejs:glorp",
			"kubejs:diamond_gun"
		]
	)
	.id("kubejs:glorp_with_gun")
})

let glorpPhrases = [
	{"text":"<Glorp> I am Glorp","color":"#7bff00"},
	{"text":"<Glorp> Hi","color":"#7bff00"},
	{"text":"<Glorp> Hello","color":"#7bff00"},
	{"text":"<Glorp> Zeta Reticulians are stupid","color":"#7bff00"},
	{"text":"<Glorp> I got my saucer license at age 4! Yes... I stole it from my dad but thats just details","color":"#7bff00"},
	{"text":"<Glorp> You look weird","color":"#7bff00"},
	{"text":"<Glorp> I want pizza","color":"#7bff00"},
	{"text":"<Glorp> There is a non 0 chance I will explode","color":"#7bff00"},
	{"text":"<Glorp> Thank you for holding me","color":"#7bff00"},
	{"text":"<Glorp> I crashed my starship into a lake","color":"#7bff00"},
	{"text":"* Glorp yawns","color":"#7bff00"},
	{"text":"<Glorp> I think 7tv got access to my onlypaws and leaked all of my photos","color":"#7bff00"},
	{"text":"<Glorp> ⊑⟒⌰⌰⍜","color":"#7bff00"},
	{"text":"<Glorp> ⍙⊑⍜ ⏃⍀⟒ ⊬⍜⎍","color":"#7bff00"},
	[{"text":"<Glorp> ","color":"#7bff00"},{"text":"Hello","color":"#7bff00","obfuscated":true}],
	[{"text":"<Glorp> ","color":"#7bff00"},{"text":"hi","color":"#7bff00","obfuscated":true}],
	{"text":"<Glorp> My cousin Blorp was not nice to me when we were small","color":"#7bff00"},
	{"text":"<Glorp> I have so much money on my outercosmic™ bank balance. If you get me to their atm I will pay you","color":"#7bff00"},
	[{"text":"<Glorp> ","color":"#7bff00"},{"text":"[Click Me]","clickEvent":{"action":"open_url","value":"https://steamcommunity.com/sharedfiles/filedetails/?id=3454978597"}}],
	{"text":"<Glorp> I am fugitive in all 78 outergalactically recognized star regions","color":"#7bff00"},
	{"text":"<Glorp> 42","color":"#7bff00"},
	{"text":"<Glorp> Not gonna sugarcoat this. You humans are kinda ugly","color":"#7bff00"},
	{"text":"<Glorp> I'm bouta glorp","color":"#7bff00"},
	{"text":"<Glorp> Why do cats allow you to have them as pets?","color":"#7bff00"},
	{"text":"<Glorp> Did you know, we are actually in a simulation?","color":"#7bff00"},
	{"text":"<Glorp> BEHIND YOU!","color":"#7bff00"},
    {"color":"#7bff00","text":"<Glorp> Can I haz Cheeseburger?"},
    {"color":"#7bff00","text":"<Glorp> I was born tomorrow"},
    {"color":"#7bff00","text":"<Glorp> Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony. Then, everything changed when the Fire Nation attacked"},
    {"color":"#7bff00","text":"<Glorp> Are we there yet?"},
    {"color":"#7bff00","text":"* Glorp stares..."},
    {"color":"#7bff00","text":"<Glorp> Hark, good sir, by the authority of Her Most Gracious Majesty, Queen Gleebian II, I Hereby proclaim, thou shalt be summoned to the sector of Lima, in sooth, to face the high outergalactic court, whereupon thy execution shall be decreed", "italic":true},
    {"color":"#7bff00","text":"<Glorp> You are stinky"},
    {"color":"#7bff00","text":"<Glorp> I am stinky"},
    {"color":"#7bff00","text":"<Glorp> I have 8 million power in Rise of Kingdoms"},
    {"color":"#7bff00","text":"<Glorp> Did you know that Mark Zucc is Zeta Reticulian? Yes thats actually \"Gray\" look like..."},
    {"color":"#7bff00","text":"<Glorp> Can you videocall?"},
    {"color":"#7bff00","text":"<Glorp> We had new development in cross galactic optical beacon technology. We found ultra reflective surface here on Earth. I believe it's bald spot on J_Shiba's head"},
    {"color":"#7bff00","text":"<Glorp> Back in my days we didn't have fancy 3rd dimension"},
    {"color":"#7bff00","text":"<Glorp> 90% of what I speak is a lie. If this sentence is also a lie is up for interpretation"},
    {"color":"#7bff00","text":"<Glorp> They dont want you to know that Bitcoin is actually physical coin produced in hollow earth"},
    {"color":"#7bff00","text":"<Glorp> Flatearthers are actually right. We just use ultra powerful projectors to bend light and make it look spherical. We find it amusing"},
    {"color":"#7bff00","text":"<Glorp> I had a chance to cast in Voices of the Void but my ugly ass brother Gnarpwell somehow got in, BUT NOT ME!"},
    {"color":"#7bff00","text":"<Glorp> GabeN lives on Mars"},
    {"color":"#7bff00","text":"<Glorp> Half-Life 3 does actually exist. They are just waiting for 4th dimension rendering capabilities"},
    {"color":"#7bff00","text":"<Glorp> Pluto is a planet"},
    {"color":"#7bff00","text":"<Glorp> Minecraft is actually how reality looks like. We thought it would be funny for your simulation have access to rendering of it"},
    {"color":"#7bff00","text":"<Glorp> Just glorping around..."},
    {"color":"#7bff00","text":"<Glorp> Number 15: Burger King foot lettuce."},
    {"color":"#7bff00","text":"<Glorp> Minecraft 2"},
    {"color":"#7bff00","text":"<Glorp> Fun fact! I pissed myself. As a matter of fact, while you are holding me, I continue to do so"},
    {"color":"#7bff00","text":"<Glorp> Hey you, yes you in front of the monitor, can you press that ⏻ button for me?"},
    {"color":"#7bff00","text":"<Glorp> Hypothetically, asking for a friend, do you like me?"},
    {"color":"#7bff00","text":"<Glorp> >.>"},
    {"color":"#7bff00","text":"<Glorp> Oi bruv, ya bloody burgers wont focking survaiv a single day bak in Manchestah"},
    {"color":"#7bff00","text":"<Glorp> Technically I'm not green"},
    {"color":"#7bff00","text":"<Glorp> According to all known laws of aviation, there is no way that a bee should be able to fly."},
    {"color":"#7bff00","text":"<Glorp> Fuck physics *ignores gravity and floats*"},
    {"color":"#7bff00","text":"<Glorp> Pythogoras was actually 19th centrury plant"},
    {"color":"#7bff00","text":"<Glorp> There were already 3 otergalactic wars. We all just consider humans too primitive to even bother. It would be the same, if humans were notifying ants that land, on which they have their hive, now belongs to somebody else they can't even comprehend."},
    {"color":"#7bff00","text":"<610|2|>> 1337  5|>34|<  |2[_]135"}
]
let glorpNoGunPhrases = [
	[
		{"text":"<Glorp> Can I have a ","color":"#7bff00"},
		{"text":"gun","color":"#ff4800","bold":true,"underlined":true},
		{"text":"?","color":"#7bff00"}
	],
	{"text":"<Glorp> I assure you, you can trust me with a firearm","color":"#7bff00"},

]
let glorpGunPhrases = [
	{"text":"<Glorp> I like this gun","color":"#7bff00"},
	{"text":"<Glorp> I got 57 more god damn rounds in this 4 round magazine","color":"#7bff00"},
	{"text":"<Glorp> I ate gunpowder","color":"#7bff00"},
	{"text":"* Glorp cocks the gun","color":"#7bff00","italic":true},
	{"text":"<Glorp> Aye! i'm walkin' here!","color":"#7bff00","italic":true},
	{"text":"<Glorp> BAM! and you're dead...","color":"#7bff00"},
]


ItemEvents.firstRightClicked(event=>{
	if (event.item.id != "kubejs:glorp" && event.item.id != "kubejs:glorp_with_gun" || !canTalk) return
	glorpTalk(event.player, event.item.id == "kubejs:glorp_with_gun")
	event.server.runCommandSilent("playsound kubejs:item.glorp.voice player @s "+event.player.pos.x + " "+event.player.pos.y + " "+event.player.pos.z+ " 1.0")

})
ItemEvents.dropped(event=>{
	if (event.item.id != "kubejs:glorp" && event.item.id != "kubejs:glorp_with_gun") return
	let ent = event.itemEntity
	ent.setGlowing(true)
	event.server.runCommandSilent("team add glorp")
	event.server.runCommandSilent("team modify glorp color green")
	event.server.runCommandSilent("team join glorp "+ent.uuid)
	if (event.item.id == "kubejs:glorp") {
		event.player.tell([
			{"text":"<Glorp> You are dropping me?!","color":"#7bff00"}
		])
	} else {
		event.player.tell([
			{"text":"<Glorp> Don't you EVER think of dropping me again!","color":"#7bff00"}
		])
		setTimeout(()=>{
			event.server.runCommandSilent("damage " +event.player.uuid+ " 0.01")
			event.server.runCommandSilent("playsound kubejs:item.glorp.gunshot player @s "+event.player.pos.x + " "+event.player.pos.y + " "+event.player.pos.z+ " 0.5")
			event.player.tell([
				{"text":"<Glorp> BLAM! I shot you!","color":"#7bff00"}
			])
		},300)
	}
})
var canTalk = true
function glorpTalk(player, hasgun) {
	let phraseArr = [].concat(glorpPhrases)
	if (hasgun) {
		phraseArr = phraseArr.concat(glorpGunPhrases)
	} else (
		phraseArr = phraseArr.concat(glorpNoGunPhrases)
	)
	player.tell(phraseArr[(Math.floor(Math.random()*phraseArr.length))])
	canTalk = false
	setTimeout(()=>{canTalk = true}, 5000)
}