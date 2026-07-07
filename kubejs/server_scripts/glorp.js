BlockEvents.rightClicked(event => {
	let player = event.player
	let block = event.block
	let world = event.level
	// if (event.server.persistentData.glorp) {return}
	event.level.runCommandSilent
	if (block.id.endsWith("button")) {
		let properties = block.getProperties()
		if (properties.face != "wall") return
		if (checkAltar(block, world)) {
			world.runCommandSilent('title @a title [{"text":"!!!","color":"#00ff00","obfuscated":true},{"text":"GLORP UPON YE!","color":"#00ff00","bold":true,"obfuscated":false},{"text":"!!!","color":"#00ff00","obfuscated":true}]')
			world.runCommandSilent("playsound minecraft:block.beacon.power_select master @a")
			event.server.persistentData.glorp = true
			world.runCommandSilent('summon item ' + block.pos.x + " " + block.pos.y + " " + block.pos.z + ' {"Item":{"id":"kubejs:glorp"},Glowing:1b}')
			world.runCommandSilent('execute as @e[type=item,nbt={Item:{id:"kubejs:glorp"}}] run team join glorp')
		}
	}
})

function checkAltar(button, world) {
	switch (button.getProperties().facing) {
		case ("south") :{
			if (world.getBlock(button.pos.north()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.north().east()).id == "minecraft:lever" &&
				world.getBlock(button.pos.north().west()).id == "minecraft:lever" &&
				world.getBlock(button.pos.north().above()).id.includes("lightning_rod")) {
					world.runCommandSilent("summon minecraft:lightning_bolt "+ button.pos.x + " " + (button.pos.y + 5) + " " + (button.pos.z-1))
					world.runCommandSilent("particle minecraft:explosion_emitter "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z-1))
					setTimeout(() => {
						world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
					}, 10);
					world.runCommandSilent("setblock "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z-1) +" minecraft:air")
					world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
					world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
					world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
				} else return false
				break;}
		case ("north") :{
			if (
				world.getBlock(button.pos.south()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.south().east()).id == "minecraft:lever" &&
				world.getBlock(button.pos.south().west()).id == "minecraft:lever" &&
				world.getBlock(button.pos.south().above()).id.includes("lightning_rod")
			) {
				world.runCommandSilent("summon minecraft:lightning_bolt "+ button.pos.x + " " + (button.pos.y + 5) + " " + (button.pos.z+1))
				world.runCommandSilent("particle minecraft:explosion_emitter "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z+1))
				setTimeout(() => {
					world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
				}, 10);
				world.runCommandSilent("setblock "+ button.pos.x + " " + (button.pos.y + 1) + " " + (button.pos.z+1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
			} else return false
				break;}
		case ("west") : {
			if (
				world.getBlock(button.pos.east()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.east().north()).id == "minecraft:lever" &&
				world.getBlock(button.pos.east().south()).id == "minecraft:lever" &&
				world.getBlock(button.pos.east().above()).id.includes("lightning_rod")
			) {
				world.runCommandSilent("summon minecraft:lightning_bolt "+ (button.pos.x+1) + " " + (button.pos.y + 5) + " " + (button.pos.z))
				world.runCommandSilent("particle minecraft:explosion_emitter "+ (button.pos.x+1) + " " + (button.pos.y + 1) + " " + (button.pos.z))
				setTimeout(() => {
					world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
				}, 10);
				world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + (button.pos.y + 1) + " " + (button.pos.z) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x+1) + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
			} else return false
			break;}
		case ("east") : {
			if (
				world.getBlock(button.pos.west()).id =="minecraft:lime_wool" &&
				world.getBlock(button.pos.west().north()).id == "minecraft:lever" &&
				world.getBlock(button.pos.west().south()).id == "minecraft:lever" &&
				world.getBlock(button.pos.west().above()).id.includes("lightning_rod")
			) {
				world.runCommandSilent("summon minecraft:lightning_bolt "+ (button.pos.x-1) + " " + (button.pos.y + 5) + " " + (button.pos.z))
				world.runCommandSilent("particle minecraft:explosion_emitter "+ (button.pos.x-1) + " " + (button.pos.y + 1) + " " + (button.pos.z))
				setTimeout(() => {
					world.runCommandSilent("setblock "+ button.pos.x + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
				}, 10);
				world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + (button.pos.y + 1) + " " + (button.pos.z) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z-1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z+1) +" minecraft:air")
				world.runCommandSilent("setblock "+ (button.pos.x-1) + " " + button.pos.y + " " + (button.pos.z) +" minecraft:air")
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
	event.player.runCommandSilent("playsound kubejs:item.glorp.voice player @s ~ ~ ~ 1.0")

})
ItemEvents.dropped(event=>{
	if (event.item.id != "kubejs:glorp" && event.item.id != "kubejs:glorp_with_gun") return
	let ent = event.itemEntity
	ent.setGlowing(true)
	event.level.runCommandSilent("team add glorp")
	event.level.runCommandSilent("team modify glorp color green")
	event.level.runCommandSilent("team join glorp "+ent.uuid)
	if (event.item.id == "kubejs:glorp") {
		event.player.tell([
			{"text":"<Glorp> You are dropping me?!","color":"#7bff00"}
		])
	} else {
		event.player.tell([
			{"text":"<Glorp> Don't you EVER think of dropping me again!","color":"#7bff00"}
		])
		setTimeout(()=>{
			event.player.runCommandSilent("damage " +event.player.uuid+ " 0.01")
			event.player.runCommandSilent("playsound kubejs:item.glorp.gunshot player @s ~ ~ ~ 0.5")
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