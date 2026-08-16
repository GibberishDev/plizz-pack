ItemEvents.modifyTooltips(event=>{
	event.modify(/kubejs:dev_plushie_*/,t=>{
		t.insert(1,Text.white("[Right Click] ").append(Text.gray("to see developer message")))
		t.insert(2,Text.white("[Sneak + Right Click] ").append(Text.gray("to change pose")))
	})
	event.modify(/kubejs:dev_plushie_*/,{shift:false},t=>{
		t.insert(3,Text.green("Role: ").append(Text.gold("[Shift]")))
	})
	event.modify("kubejs:dev_plushie_gibbles",{shift:true},t=>{
		t.insert(3,Text.green("Role:"))
		t.insert(4,Text.gold(" Lead Pack Developer"))
		t.insert(5,Text.gold(" Mod compatibility work ").append(Text.darkGray("I hate myself")))
		t.insert(6,Text.gold(" Asset creation"))
		t.insert(7,Text.gold(" KubeJS development"))
		t.insert(8,Text.gold(" Dickhead"))
	})
	event.modify("kubejs:dev_plushie_derivoid",{shift:true},t=>{
		t.insert(3,Text.green("Role:"))
		t.insert(4,Text.gold(" Playtester"))
		t.insert(5,Text.gold(" KubeJS help"))
	})
	event.modify("kubejs:dev_plushie_bronwen",{shift:true},t=>{
		t.insert(3,Text.green("Role:"))
		t.insert(4,Text.gold(" Playtester"))
		t.insert(5,Text.gold(" Asset creation"))
	})
})