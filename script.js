function alliance() {
    var allChar = ["Human Warrior", "Human Rogue", "Human Mage", "Human Warlock", "Human Paladin", "Human Death Knight", "Human Priest",
"Draenei Death Knight", "Draenei Hunter", "Draenei Mage", "Draenei Paladin", "Draenei Priest", "Draenei Shaman", "Draenei Warrior",
"Dwarf Death Knight", "Dwarf Hunter", "Dwarf Paladin", "Dwarf Priest", "Dwarf Rogue", "Dwarf Warrior",
"Gnome Death Knight", "Gnome Mage", "Gnome Rogue", "Gnome Warlock", "Gnome Warrior",
"Night Elf Death Knight", "Night Elf Druid", "Night Elf Hunter", "Night Elf Priest", "Night Elf Rogue", "Night Elf Warrior"]
    var rand = Math.floor(Math.random() * allChar.length)
    document.getElementById("char").innerHTML = "Congratulations! Your character is - " + allChar[rand]
}
function horde() {
    var horChar = ["Blood Elf Death Knight", "Blood Elf Hunter", "Blood Elf Mage", "Blood Elf Paladin", "Blood Elf Priest", "Blood Elf Rogue", "Blood Elf Warlock",
"Orc Death Knight", "Orc Hunter", "Orc Rogue", "Orc Shaman", "Orc Warlock", "Orc Warrior",
"Tauren Death Knight", "Tauren Druid", "Tauren Hunter", "Tauren Shaman", "Tauren Warrior",
"Troll Death Knight", "Troll Hunter", "Troll Mage", "Troll Priest", "Troll Rogue", "Troll Shaman", "Troll Warrior",
"Undead Death Knight", "Undead Mage", "Undead Priest", "Undead Rogue", "Undead Warlock", "Undead Warrior"]
    var rand = Math.floor(Math.random() * horChar.length)
    document.getElementById("char").innerHTML = "Congratulations! Your character is - " + horChar[rand]
}