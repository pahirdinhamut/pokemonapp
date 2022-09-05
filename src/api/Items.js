const Items = [
  {
    name: "Ability Capsule",
    imageurl: "https://img.pokemondb.net/sprites/items/ability-capsule.png",
    category: "Hold items",
    effect:
      "A capsule that allows a Pok\u00e9mon with two Abilities to switch between these Abilities when it is used.",
  },
  {
    name: "Ability Urge",
    imageurl: "https://img.pokemondb.net/sprites/items/ability-urge.png",
    category: "Battle items",
    effect: "When used, it activates the Ability of an ally Pok\u00e9mon.",
  },
  {
    name: "Abomasite",
    imageurl: "https://img.pokemondb.net/sprites/items/abomasite.png",
    category: "Hold items",
    effect: "Enables Abomasnow to Mega Evolve during battle.",
  },
  {
    name: "Absolite",
    imageurl: "https://img.pokemondb.net/sprites/items/absolite.png",
    category: "Hold items",
    effect: "Enables Absol to Mega Evolve during battle.",
  },
  {
    name: "Absorb Bulb",
    imageurl: "https://img.pokemondb.net/sprites/items/absorb-bulb.png",
    category: "Hold items",
    effect:
      "A consumable bulb. If the holder is hit by a Water-type move, its Sp. Atk will rise.",
  },
  {
    name: "Adamant Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Adamant nature.",
  },
  {
    name: "Adamant Orb",
    imageurl: "https://img.pokemondb.net/sprites/items/adamant-orb.png",
    category: "Hold items",
    effect:
      "Increases the power of Dragon- and Steel-type moves when held by Dialga.",
  },
  {
    name: "Adrenaline Orb",
    imageurl: "https://img.pokemondb.net/sprites/items/adrenaline-orb.png",
    category: "Hold items",
    effect:
      "Using it makes wild Pok\u00e9mon more likely to call for help. If held by a Pok\u00e9mon, it boosts Speed when intimidated. It can be used only once.",
  },
  {
    name: "Aerodactylite",
    imageurl: "https://img.pokemondb.net/sprites/items/aerodactylite.png",
    category: "Hold items",
    effect: "Enables Aerodactyl to Mega Evolve during battle.",
  },
  {
    name: "Aggronite",
    imageurl: "https://img.pokemondb.net/sprites/items/aggronite.png",
    category: "Hold items",
    effect: "Enables Aggron to Mega Evolve during battle.",
  },
  {
    name: "Aguav Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/aguav-berry.png",
    category: "Berries",
    effect: "Restores HP if it's low, but may cause confusion.",
  },
  {
    name: "Air Balloon",
    imageurl: "https://img.pokemondb.net/sprites/items/air-balloon.png",
    category: "Hold items",
    effect:
      "When held by a Pok\u00e9mon, the Pok\u00e9mon will float into the air. When the holder is attacked, this item will burst.",
  },
  {
    name: "Alakazite",
    imageurl: "https://img.pokemondb.net/sprites/items/alakazite.png",
    category: "Hold items",
    effect: "Enables Alakazam to Mega Evolve during battle.",
  },
  {
    name: "Aloraichium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/aloraichium-z.png",
    category: "Hold items",
    effect:
      "Allows Alolan Raichu to upgrade Thunderbolt to a Z-Move, Stoked Sparksurfer.",
  },
  {
    name: "Altarianite",
    imageurl: "https://img.pokemondb.net/sprites/items/altarianite.png",
    category: "Hold items",
    effect: "Enables Altaria to Mega Evolve during battle.",
  },
  {
    name: "Ampharosite",
    imageurl: "https://img.pokemondb.net/sprites/items/ampharosite.png",
    category: "Hold items",
    effect: "Enables Ampharos to Mega Evolve during battle.",
  },
  {
    name: "Amulet Coin",
    imageurl: "https://img.pokemondb.net/sprites/items/amulet-coin.png",
    category: "Hold items",
    effect: "Doubles prize money if held.",
  },
  {
    name: "Antidote",
    imageurl: "https://img.pokemondb.net/sprites/items/antidote.png",
    category: "Medicine",
    effect:
      "A spray-type medicine. It lifts the effect of poison from one Pok\u00e9mon.",
  },
  {
    name: "Apicot Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/apicot-berry.png",
    category: "Berries",
    effect: "Raises Special Defense when HP is low.",
  },
  {
    name: "Armor Fossil",
    imageurl: "https://img.pokemondb.net/sprites/items/armor-fossil.png",
    category: "General items",
    effect:
      "A fossil from a prehistoric Pok\u00e9mon that lived on the land. It appears to be part of a collar.",
  },
  {
    name: "Aspear Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/aspear-berry.png",
    category: "Berries",
    effect: "If held by a Pok\u00e9mon, it defrosts it.",
  },
  {
    name: "Assault Vest",
    imageurl: "https://img.pokemondb.net/sprites/items/assault-vest.png",
    category: "Hold items",
    effect: "Raises Special Defense but prevents the use of status moves.",
  },
  {
    name: "Audinite",
    imageurl: "https://img.pokemondb.net/sprites/items/audinite.png",
    category: "Hold items",
    effect: "Enables Audino to Mega Evolve during battle.",
  },
  {
    name: "Awakening",
    imageurl: "https://img.pokemondb.net/sprites/items/awakening.png",
    category: "Medicine",
    effect:
      "A spray-type medicine. It awakens a Pok\u00e9mon from the clutches of sleep.",
  },
  {
    name: "Babiri Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/babiri-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Steel-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Balm Mushroom",
    imageurl: "https://img.pokemondb.net/sprites/items/balm-mushroom.png",
    category: "General items",
    effect:
      "A rare mushroom which gives off a nice fragrance. A maniac will buy it for a high price.",
  },
  {
    name: "Banettite",
    imageurl: "https://img.pokemondb.net/sprites/items/banettite.png",
    category: "Hold items",
    effect: "Enables Banette to Mega Evolve during battle.",
  },
  {
    name: "Beach Glass",
    imageurl: "https://img.pokemondb.net/sprites/items/beach-glass.png",
    category: "General items",
    effect:
      "A piece of colored glass. Waves have rounded its edges. It's slightly rough to the touch.",
  },
  {
    name: "Beast Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/beast-ball.png",
    category: "Pokeballs",
    effect:
      "A special Pok\u00e9 Ball designed to catch Ultra Beasts. It has a low success rate for catching others.",
  },
  {
    name: "Beedrillite",
    imageurl: "https://img.pokemondb.net/sprites/items/beedrillite.png",
    category: "Hold items",
    effect: "Enables Beedrill to Mega Evolve during battle.",
  },
  {
    name: "Belue Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/belue-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Berry Juice",
    imageurl: "https://img.pokemondb.net/sprites/items/berry-juice.png",
    category: "Medicine",
    effect:
      "A 100% pure juice made of Berries. It restores the HP of one Pok\u00e9mon by just 20 points.",
  },
  {
    name: "Big Malasada",
    imageurl: "https://img.pokemondb.net/sprites/items/big-malasada.png",
    category: "Medicine",
    effect: "Heals all major status conditions.",
  },
  {
    name: "Big Mushroom",
    imageurl: "https://img.pokemondb.net/sprites/items/big-mushroom.png",
    category: "General items",
    effect: "A large and rare mushroom. It is sought after by collectors.",
  },
  {
    name: "Big Nugget",
    imageurl: "https://img.pokemondb.net/sprites/items/big-nugget.png",
    category: "General items",
    effect:
      "A big nugget of pure gold that gives off a lustrous gleam. A maniac will buy it for a high price.",
  },
  {
    name: "Big Pearl",
    imageurl: "https://img.pokemondb.net/sprites/items/big-pearl.png",
    category: "General items",
    effect:
      "A quite-large pearl that sparkles in a pretty silver color. It can be sold at a high price to shops.",
  },
  {
    name: "Big Root",
    imageurl: "https://img.pokemondb.net/sprites/items/big-root.png",
    category: "Hold items",
    effect: "Recovers more HP from HP-stealing moves.",
  },
  {
    name: "Binding Band",
    imageurl: "https://img.pokemondb.net/sprites/items/binding-band.png",
    category: "Hold items",
    effect: "A band that increases the power of binding moves when held.",
  },
  {
    name: "Black Apricorn",
    imageurl: "https://img.pokemondb.net/sprites/items/black-apricorn.png",
    category: "General items",
    effect: "A black Apricorn It has an indescribable scent.",
  },
  {
    name: "Black Belt",
    imageurl: "https://img.pokemondb.net/sprites/items/black-belt.png",
    category: "Hold items",
    effect: "Increases the power of Fighting-type moves.",
  },
  {
    name: "Black Flute",
    imageurl: "https://img.pokemondb.net/sprites/items/black-flute.png",
    category: "General items",
    effect:
      "A toy flute made from black glass. A maniac will buy it for a high price.",
  },
  {
    name: "Black Glasses",
    imageurl: "https://img.pokemondb.net/sprites/items/black-glasses.png",
    category: "Hold items",
    effect: "Increases the power of Dark-type moves.",
  },
  {
    name: "Black Sludge",
    imageurl: "https://img.pokemondb.net/sprites/items/black-sludge.png",
    category: "Hold items",
    effect:
      "A held item that gradually restores the HP of Poison-type Pok\u00e9mon. It inflicts damage on all other types.",
  },
  {
    name: "Blastoisinite",
    imageurl: "https://img.pokemondb.net/sprites/items/blastoisinite.png",
    category: "Hold items",
    effect: "Enables Blastoise to Mega Evolve during battle.",
  },
  {
    name: "Blazikenite",
    imageurl: "https://img.pokemondb.net/sprites/items/blazikenite.png",
    category: "Hold items",
    effect: "Enables Blaziken to Mega Evolve during battle.",
  },
  {
    name: "Blue Apricorn",
    imageurl: "https://img.pokemondb.net/sprites/items/blue-apricorn.png",
    category: "General items",
    effect: "A blue Apricorn. It smells a bit like grass.",
  },
  {
    name: "Blue Flute",
    imageurl: "https://img.pokemondb.net/sprites/items/blue-flute.png",
    category: "General items",
    effect:
      "A toy flute made from blue glass. A maniac will buy it for a high price.",
  },
  {
    name: "Blue Scarf",
    imageurl: "https://img.pokemondb.net/sprites/items/blue-scarf.png",
    category: "General items",
    effect: "Raises holder's Beauty aspect in a Contest.",
  },
  {
    name: "Blue Shard",
    imageurl: "https://img.pokemondb.net/sprites/items/blue-shard.png",
    category: "General items",
    effect:
      "A small blue shard. It appears to be from some sort of implement made long ago.",
  },
  {
    name: "Blueberry Sweet",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Evolves Milcery into Blueberry Flavor Alcremie.",
  },
  {
    name: "Bluk Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/bluk-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Blunder Policy",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Raises Speed sharply if its attack misses.",
  },
  {
    name: "Bold Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Bold nature.",
  },
  {
    name: "Bottle Cap",
    imageurl: "https://img.pokemondb.net/sprites/items/bottle-cap.png",
    category: "General items",
    effect: "Maximizes one IV stat in Hyper Training.",
  },
  {
    name: "Brave Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Brave nature.",
  },
  {
    name: "Bright Powder",
    imageurl: "https://img.pokemondb.net/sprites/items/bright-powder.png",
    category: "Hold items",
    effect: "Lowers the opponent's accuracy.",
  },
  {
    name: "Bug Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/bug-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Bug-type move only once.",
  },
  {
    name: "Bug Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/bug-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Bug type.",
  },
  {
    name: "Buginium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/buginium-z.png",
    category: "Hold items",
    effect: "Allows the use of Savage Spin-Out, the Bug type Z-Move.",
  },
  {
    name: "Burn Drive",
    imageurl: "https://img.pokemondb.net/sprites/items/burn-drive.png",
    category: "Hold items",
    effect: "Changes Techno Blast to a Fire-type move when held by Genesect.",
  },
  {
    name: "Burn Heal",
    imageurl: "https://img.pokemondb.net/sprites/items/burn-heal.png",
    category: "Medicine",
    effect:
      "A spray-type medicine. It heals a single Pok\u00e9mon that is suffering from a burn.",
  },
  {
    name: "Calcium",
    imageurl: "https://img.pokemondb.net/sprites/items/calcium.png",
    category: "Medicine",
    effect: "Increases Special Attack EVs by 10.",
  },
  {
    name: "Calm Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Calm nature.",
  },
  {
    name: "Cameruptite",
    imageurl: "https://img.pokemondb.net/sprites/items/cameruptite.png",
    category: "Hold items",
    effect: "Enables Camerupt to Mega Evolve during battle.",
  },
  {
    name: "Carbos",
    imageurl: "https://img.pokemondb.net/sprites/items/carbos.png",
    category: "Medicine",
    effect: "Increases Speed EVs by 10.",
  },
  {
    name: "Careful Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Careful nature.",
  },
  {
    name: "Casteliacone",
    imageurl: "https://img.pokemondb.net/sprites/items/casteliacone.png",
    category: "Medicine",
    effect: "Heals all major status conditions.",
  },
  {
    name: "Cell Battery",
    imageurl: "https://img.pokemondb.net/sprites/items/cell-battery.png",
    category: "Hold items",
    effect:
      "A consumable battery. If the holder is hit by an Electric-type move, its Attack will rise.",
  },
  {
    name: "Chalky Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/chalky-stone.png",
    category: "General items",
    effect: "A small whitish stone picked up at the edge of the road.",
  },
  {
    name: "Charcoal",
    imageurl: "https://img.pokemondb.net/sprites/items/charcoal.png",
    category: "Hold items",
    effect: "Increases the power of Fire-type moves.",
  },
  {
    name: "Charizardite X",
    imageurl: "https://img.pokemondb.net/sprites/items/charizardite-x.png",
    category: "Hold items",
    effect: "Enables Charizard to Mega Evolve during battle.",
  },
  {
    name: "Charizardite Y",
    imageurl: "https://img.pokemondb.net/sprites/items/charizardite-y.png",
    category: "Hold items",
    effect: "Enables Charizard to Mega Evolve during battle.",
  },
  {
    name: "Charti Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/charti-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Rock-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Cheri Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/cheri-berry.png",
    category: "Berries",
    effect: "If held by a Pok\u00e9mon, it recovers from paralysis.",
  },
  {
    name: "Cherish Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/cherish-ball.png",
    category: "Pokeballs",
    effect:
      "A quite rare Pok\u00e9 Ball that has been specially crafted to commemorate an occasion of some sort.",
  },
  {
    name: "Chesto Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/chesto-berry.png",
    category: "Berries",
    effect: "If held by a Pok\u00e9mon, it recovers from sleep.",
  },
  {
    name: "Chilan Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/chilan-berry.png",
    category: "Berries",
    effect:
      "Weakens a Normal-type attack against the Pok\u00e9mon holding this berry.",
  },
  {
    name: "Chill Drive",
    imageurl: "https://img.pokemondb.net/sprites/items/chill-drive.png",
    category: "Hold items",
    effect: "Changes Techno Blast to an Ice-type move when held by Genesect.",
  },
  {
    name: "Choice Band",
    imageurl: "https://img.pokemondb.net/sprites/items/choice-band.png",
    category: "Hold items",
    effect: "Raises Attack, but only one move can be used.",
  },
  {
    name: "Choice Scarf",
    imageurl: "https://img.pokemondb.net/sprites/items/choice-scarf.png",
    category: "Hold items",
    effect: "Raises Speed, but only one move can be used.",
  },
  {
    name: "Choice Specs",
    imageurl: "https://img.pokemondb.net/sprites/items/choice-specs.png",
    category: "Hold items",
    effect: "Raises Special Attack, but only one move can be used.",
  },
  {
    name: "Chople Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/chople-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Fighting-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Claw Fossil",
    imageurl: "https://img.pokemondb.net/sprites/items/claw-fossil.png",
    category: "General items",
    effect:
      "A fossil of an ancient Pok\u00e9mon that lived in the sea. It appears to be part of a claw.",
  },
  {
    name: "Cleanse Tag",
    imageurl: "https://img.pokemondb.net/sprites/items/cleanse-tag.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It helps keep wild Pok\u00e9mon away if the holder is the first one in the party.",
  },
  {
    name: "Clever Wing",
    imageurl: "https://img.pokemondb.net/sprites/items/clever-wing.png",
    category: "Medicine",
    effect: "Increases Special Defense EVs by 1.",
  },
  {
    name: "Clover Sweet",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Evolves Milcery into Clover Flavor Alcremie.",
  },
  {
    name: "Coba Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/coba-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Flying-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Colbur Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/colbur-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Dark-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Colress Machine",
    imageurl: "https://img.pokemondb.net/sprites/items/colress-machine.png",
    category: "Hold items",
    effect:
      "A special device that wrings out the potential of Pok\u00e9mon. It is an imperfect prototype.",
  },
  {
    name: "Comet Shard",
    imageurl: "https://img.pokemondb.net/sprites/items/comet-shard.png",
    category: "General items",
    effect:
      "A shard which fell to the ground when a comet approached. A maniac will buy it for a high price.",
  },
  {
    name: "Cornn Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/cornn-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Courage Candy",
    imageurl: "https://img.pokemondb.net/sprites/items/courage-candy.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Special Defense stat by 1.",
  },
  {
    name: "Courage Candy L",
    imageurl: "https://img.pokemondb.net/sprites/items/courage-candy-l.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Special Defense stat.",
  },
  {
    name: "Courage Candy XL",
    imageurl: "https://img.pokemondb.net/sprites/items/courage-candy-xl.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Special Defense stat.",
  },
  {
    name: "Cover Fossil",
    imageurl: "https://img.pokemondb.net/sprites/items/cover-fossil.png",
    category: "General items",
    effect:
      "A fossil of an ancient Pok\u00e9mon that lived in the sea in ancient times. It appears to be part of its back.",
  },
  {
    name: "Custap Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/custap-berry.png",
    category: "Berries",
    effect: "Holder can move first when HP is low.",
  },
  {
    name: "Damp Mulch",
    imageurl: "https://img.pokemondb.net/sprites/items/damp-mulch.png",
    category: "General items",
    effect:
      "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
  },
  {
    name: "Damp Rock",
    imageurl: "https://img.pokemondb.net/sprites/items/damp-rock.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that extends the duration of the move Rain Dance used by the holder.",
  },
  {
    name: "Dark Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/dark-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Dark-type move only once.",
  },
  {
    name: "Dark Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/dark-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Dark type.",
  },
  {
    name: "Darkinium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/darkinium-z.png",
    category: "Hold items",
    effect: "Allows the use of Black Hole Eclipse, the Dark type Z-Move.",
  },
  {
    name: "Dawn Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/dawn-stone.png",
    category: "General items",
    effect: "Evolves certain species of Pok\u00e9mon.",
  },
  {
    name: "Decidium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/decidium-z.png",
    category: "Hold items",
    effect:
      "Allows Decidueye to upgrade Spirit Shackle to a Z-Move, Sinister Arrow Raid.",
  },
  {
    name: "Deep Sea Scale",
    imageurl: "https://img.pokemondb.net/sprites/items/deep-sea-scale.png",
    category: "Hold items",
    effect:
      "Increases Special Defense when held by Clamperl. Evolves Clamperl when traded holding the item.",
  },
  {
    name: "Deep Sea Tooth",
    imageurl: "https://img.pokemondb.net/sprites/items/deep-sea-tooth.png",
    category: "Hold items",
    effect:
      "Increases Special Attack when held by Clamperl. Evolves Clamperl when traded holding the item.",
  },
  {
    name: "Destiny Knot",
    imageurl: "https://img.pokemondb.net/sprites/items/destiny-knot.png",
    category: "Hold items",
    effect:
      "A long, thin, bright-red string to be held by a Pok\u00e9mon. If the holder becomes infatuated, the foe does too.",
  },
  {
    name: "Diancite",
    imageurl: "https://img.pokemondb.net/sprites/items/diancite.png",
    category: "Hold items",
    effect: "Enables Diancie to Mega Evolve during battle.",
  },
  {
    name: "Dire Hit",
    imageurl: "https://img.pokemondb.net/sprites/items/dire-hit.png",
    category: "Battle items",
    effect: "Raises critical-hit ratio of a Pok\u00e9mon in battle.",
  },
  {
    name: "Dire Hit 2",
    imageurl: "https://img.pokemondb.net/sprites/items/dire-hit-2.png",
    category: "Battle items",
    effect: "Raises a Pok\u00e9mon's critical-hit ratio in battle.",
  },
  {
    name: "Dire Hit 3",
    imageurl: "https://img.pokemondb.net/sprites/items/dire-hit-3.png",
    category: "Battle items",
    effect: "Greatly raises a Pok\u00e9mon's critical-hit ratio in battle.",
  },
  {
    name: "Discount Coupon",
    imageurl: "https://img.pokemondb.net/sprites/items/discount-coupon.png",
    category: "General items",
    effect:
      "This special coupon allows you to buy items at a discount when you are shopping at a boutique.",
  },
  {
    name: "Dive Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/dive-ball.png",
    category: "Pokeballs",
    effect:
      "A somewhat different Pok\u00e9 Ball that works especially well on Pok\u00e9mon that live underwater.",
  },
  {
    name: "DNA Splicers",
    imageurl: "https://img.pokemondb.net/sprites/items/dna-splicers.png",
    category: "General items",
    effect:
      "A splicer that fuses Kyurem and a certain Pok\u00e9mon. They are said to have been one in the beginning.",
  },
  {
    name: "Dome Fossil",
    imageurl: "https://img.pokemondb.net/sprites/items/dome-fossil.png",
    category: "General items",
    effect:
      "A fossil of an ancient Pok\u00e9mon that lived in the sea. It appears to be part of a shell.",
  },
  {
    name: "Douse Drive",
    imageurl: "https://img.pokemondb.net/sprites/items/douse-drive.png",
    category: "Hold items",
    effect: "Changes Techno Blast to a Water-type move when held by Genesect.",
  },
  {
    name: "Draco Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/draco-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Dragon-type moves. Changes Arceus' type to Dragon.",
  },
  {
    name: "Dragon Fang",
    imageurl: "https://img.pokemondb.net/sprites/items/dragon-fang.png",
    category: "Hold items",
    effect: "Increases the power of Dragon-type moves.",
  },
  {
    name: "Dragon Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/dragon-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Dragon-type move only once.",
  },
  {
    name: "Dragon Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/dragon-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Dragon type.",
  },
  {
    name: "Dragon Scale",
    imageurl: "https://img.pokemondb.net/sprites/items/dragon-scale.png",
    category: "General items",
    effect: "Evolves Seadra when traded holding the item.",
  },
  {
    name: "Dragonium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/dragonium-z.png",
    category: "Hold items",
    effect: "Allows the use of Devastating Drake, the Dragon type Z-Move.",
  },
  {
    name: "Dread Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/dread-plate.png",
    category: "Hold items",
    effect: "Increases power of Dark-type moves. Changes Arceus' type to Dark.",
  },
  {
    name: "Dream Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/dream-ball.png",
    category: "Pokeballs",
    effect:
      "A special Pok\u00e9 Ball that appears out of nowhere in a bag at the Entree Forest. It can catch any Pok\u00e9mon.",
  },
  {
    name: "Dropped Item",
    imageurl: "https://img.pokemondb.net/sprites/items/xtransceiver.png",
    category: "Hold items",
    effect:
      "The Xtransceiver found at the Nimbasa City amusement park. It seems it belongs to a boy.",
  },
  {
    name: "Dubious Disc",
    imageurl: "https://img.pokemondb.net/sprites/items/dubious-disc.png",
    category: "General items",
    effect: "Evolves Porygon2 when traded holding the item.",
  },
  {
    name: "Durin Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/durin-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Dusk Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/dusk-ball.png",
    category: "Pokeballs",
    effect:
      "A somewhat different Pok\u00e9 Ball that makes it easier to catch wild Pok\u00e9mon at night or in dark places like caves.",
  },
  {
    name: "Dusk Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/dusk-stone.png",
    category: "General items",
    effect: "Evolves certain species of Pok\u00e9mon.",
  },
  {
    name: "Dynamax Candy",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Medicine",
    effect: "Raises Dynamax Level.",
  },
  {
    name: "Earth Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/earth-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Ground-type moves. Changes Arceus' type to Ground.",
  },
  {
    name: "Eevium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/eevium-z.png",
    category: "Hold items",
    effect:
      "Allows Eevee to upgrade Last Resort to a Z-Move, Extreme Evoboost.",
  },
  {
    name: "Eject Button",
    imageurl: "https://img.pokemondb.net/sprites/items/eject-button.png",
    category: "Hold items",
    effect:
      "If the holder is hit by an attack, it will switch with another Pok\u00e9mon in your party.",
  },
  {
    name: "Eject Pack",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "The Pok\u00e9mon switches out if its stats are lowered.",
  },
  {
    name: "Electirizer",
    imageurl: "https://img.pokemondb.net/sprites/items/electirizer.png",
    category: "General items",
    effect: "Evolves Electabuzz when traded holding the item.",
  },
  {
    name: "Electric Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/electric-gem.png",
    category: "Hold items",
    effect: "Increases the power of an Electric-type move only once.",
  },
  {
    name: "Electric Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/electric-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Electric type.",
  },
  {
    name: "Electric Seed",
    imageurl: "https://img.pokemondb.net/sprites/items/electric-seed.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It boosts Defense on Electric Terrain. It can only be used once.",
  },
  {
    name: "Electrium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/electrium-z.png",
    category: "Hold items",
    effect: "Allows the use of Gigavolt Havoc, the Electric type Z-Move.",
  },
  {
    name: "Elevator Key",
    imageurl: "https://img.pokemondb.net/sprites/items/elevator-key.png",
    category: "Hold items",
    effect:
      "A card key that activates the elevator in Lysandre Labs. It is emblazoned with Team Flare's logo.",
  },
  {
    name: "Elixir",
    imageurl: "https://img.pokemondb.net/sprites/items/elixir.png",
    category: "Medicine",
    effect:
      "It restores the PP of all the moves learned by the targeted Pok\u00e9mon by 10 points each.",
  },
  {
    name: "Energy Powder",
    imageurl: "https://img.pokemondb.net/sprites/items/energy-powder.png",
    category: "Medicine",
    effect: "Restores 60 HP but lowers Friendship.",
  },
  {
    name: "Energy Root",
    imageurl: "https://img.pokemondb.net/sprites/items/energy-root.png",
    category: "Medicine",
    effect: "Restores 120 HP but lowers Friendship.",
  },
  {
    name: "Enigma Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/enigma-berry.png",
    category: "Berries",
    effect:
      "If held by a Pok\u00e9mon, it restores its HP if it is hit by any supereffective attack.",
  },
  {
    name: "Escape Rope",
    imageurl: "https://img.pokemondb.net/sprites/items/escape-rope.png",
    category: "General items",
    effect:
      "A long, durable rope. Use it to escape instantly from a cave or a dungeon.",
  },
  {
    name: "Ether",
    imageurl: "https://img.pokemondb.net/sprites/items/ether.png",
    category: "Medicine",
    effect:
      "It restores the PP of a Pok\u00e9mon's selected move by a maximum of 10 points.",
  },
  {
    name: "Everstone",
    imageurl: "https://img.pokemondb.net/sprites/items/everstone.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. The Pok\u00e9mon holding this peculiar stone is prevented from evolving.",
  },
  {
    name: "Eviolite",
    imageurl: "https://img.pokemondb.net/sprites/items/eviolite.png",
    category: "Hold items",
    effect:
      "A mysterious evolutionary lump. When held, it raises the Defense and Sp. Def of a Pok\u00e9mon that can still evolve.",
  },
  {
    name: "Exp. Candy L",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Medicine",
    effect: "",
  },
  {
    name: "Exp. Candy M",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Medicine",
    effect: "",
  },
  {
    name: "Exp. Candy S",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Medicine",
    effect: "",
  },
  {
    name: "Exp. Candy XL",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Medicine",
    effect: "Increases the Pok\u00e9mon's Exp points by 30,000.",
  },
  {
    name: "Exp. Candy XS",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Medicine",
    effect: "",
  },
  {
    name: "Exp. Share",
    imageurl: "https://img.pokemondb.net/sprites/items/exp-share.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. The holder gets a share of a battle's Exp. Points without battling.",
  },
  {
    name: "Expert Belt",
    imageurl: "https://img.pokemondb.net/sprites/items/expert-belt.png",
    category: "Hold items",
    effect: "Increases the power of super-effective moves.",
  },
  {
    name: "Fairium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/fairium-z.png",
    category: "Hold items",
    effect: "Allows the use of Twinkle Tackle, the Fairy type Z-Move.",
  },
  {
    name: "Fairy Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/fairy-gem.png",
    category: "General items",
    effect: "Increases the power of a Fairy-type move only once.",
  },
  {
    name: "Fairy Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/fairy-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Fairy type.",
  },
  {
    name: "Fast Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/fast-ball.png",
    category: "Pokeballs",
    effect:
      "A Pok\u00e9 Ball that makes it easier to catch Pok\u00e9mon which are quick to run away.",
  },
  {
    name: "Festival Ticket",
    imageurl: "https://img.pokemondb.net/sprites/items/festival-ticket.png",
    category: "General items",
    effect: "A ticket that allows you to host a mission in Festival Plaza.",
  },
  {
    name: "Fighting Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/fighting-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Fighting-type move only once.",
  },
  {
    name: "Fighting Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/fighting-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Fighting type.",
  },
  {
    name: "Fightinium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/fightinium-z.png",
    category: "Hold items",
    effect: "Allows the use of All-Out Pummeling, the Fighting type Z-Move.",
  },
  {
    name: "Figy Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/figy-berry.png",
    category: "Berries",
    effect: "Restores HP if it's low, but may cause confusion.",
  },
  {
    name: "Fire Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/fire-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Fire-type move only once.",
  },
  {
    name: "Fire Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/fire-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Fire type.",
  },
  {
    name: "Fire Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/fire-stone.png",
    category: "General items",
    effect: "Evolves certain species of Pok\u00e9mon.",
  },
  {
    name: "Firium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/firium-z.png",
    category: "Hold items",
    effect: "Allows the use of Inferno Overdrive, the Fire type Z-Move.",
  },
  {
    name: "Fist Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/fist-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Fighting-type moves. Changes Arceus' type to Fighting.",
  },
  {
    name: "Flame Orb",
    imageurl: "https://img.pokemondb.net/sprites/items/flame-orb.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It is a bizarre orb that inflicts a burn on the holder in battle.",
  },
  {
    name: "Flame Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/flame-plate.png",
    category: "Hold items",
    effect: "Increases power of Fire-type moves. Changes Arceus' type to Fire.",
  },
  {
    name: "Float Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/float-stone.png",
    category: "Hold items",
    effect:
      "A very light stone. It reduces the weight of a Pok\u00e9mon when held.",
  },
  {
    name: "Flower Sweet",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Evolves Milcery into Flower Flavor Alcremie.",
  },
  {
    name: "Fluffy Tail",
    imageurl: "https://img.pokemondb.net/sprites/items/fluffy-tail.png",
    category: "General items",
    effect:
      "An item that attracts Pok\u00e9mon. Use it to flee from any battle with a wild Pok\u00e9mon.",
  },
  {
    name: "Flying Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/flying-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Flying-type move only once.",
  },
  {
    name: "Flying Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/flying-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Flying type.",
  },
  {
    name: "Flyinium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/flyinium-z.png",
    category: "Hold items",
    effect: "Allows the use of Supersonic Skystrike, the Flying type Z-Move.",
  },
  {
    name: "Focus Band",
    imageurl: "https://img.pokemondb.net/sprites/items/focus-band.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. The holder may endure a potential KO attack, leaving it with just 1 HP.",
  },
  {
    name: "Focus Sash",
    imageurl: "https://img.pokemondb.net/sprites/items/focus-sash.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. If it has full HP, the holder will endure one potential KO attack, leaving 1 HP.",
  },
  {
    name: "Fresh Water",
    imageurl: "https://img.pokemondb.net/sprites/items/fresh-water.png",
    category: "Medicine",
    effect: "Restores 30 HP.",
  },
  {
    name: "Friend Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/friend-ball.png",
    category: "Pokeballs",
    effect: "A Pok\u00e9 Ball that makes caught Pok\u00e9mon more friendly.",
  },
  {
    name: "Full Heal",
    imageurl: "https://img.pokemondb.net/sprites/items/full-heal.png",
    category: "Medicine",
    effect:
      "A spray-type medicine. It heals all the status problems of a single Pok\u00e9mon.",
  },
  {
    name: "Full Incense",
    imageurl: "https://img.pokemondb.net/sprites/items/full-incense.png",
    category: "Hold items",
    effect:
      "Holder always attacks last. Breeding Snorlax produces Munchlax when held.",
  },
  {
    name: "Full Restore",
    imageurl: "https://img.pokemondb.net/sprites/items/full-restore.png",
    category: "Medicine",
    effect:
      "A medicine that fully restores the HP and heals any status problems of a single Pok\u00e9mon.",
  },
  {
    name: "Galladite",
    imageurl: "https://img.pokemondb.net/sprites/items/galladite.png",
    category: "Hold items",
    effect: "Enables Gallade to Mega Evolve during battle.",
  },
  {
    name: "Ganlon Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/ganlon-berry.png",
    category: "Berries",
    effect: "Raises Defense when HP is low.",
  },
  {
    name: "Garchompite",
    imageurl: "https://img.pokemondb.net/sprites/items/garchompite.png",
    category: "Hold items",
    effect: "Enables Garchomp to Mega Evolve during battle.",
  },
  {
    name: "Gardevoirite",
    imageurl: "https://img.pokemondb.net/sprites/items/gardevoirite.png",
    category: "Hold items",
    effect: "Enables Gardevoir to Mega Evolve during battle.",
  },
  {
    name: "Gengarite",
    imageurl: "https://img.pokemondb.net/sprites/items/gengarite.png",
    category: "Hold items",
    effect: "Enables Gengar to Mega Evolve during battle.",
  },
  {
    name: "Genius Wing",
    imageurl: "https://img.pokemondb.net/sprites/items/genius-wing.png",
    category: "Medicine",
    effect: "Increases Special Attack EVs by 1.",
  },
  {
    name: "Gentle Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Gentle nature.",
  },
  {
    name: "Ghost Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/ghost-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Ghost-type move only once.",
  },
  {
    name: "Ghost Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/ghost-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Ghost type.",
  },
  {
    name: "Ghostium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/ghostium-z.png",
    category: "Hold items",
    effect: "Allows the use of Never-Ending Nightmare, the Ghost type Z-Move.",
  },
  {
    name: "Glalitite",
    imageurl: "https://img.pokemondb.net/sprites/items/glalitite.png",
    category: "Hold items",
    effect: "Enables Glalie to Mega Evolve during battle.",
  },
  {
    name: "Gold Bottle Cap",
    imageurl: "https://img.pokemondb.net/sprites/items/gold-bottle-cap.png",
    category: "General items",
    effect: "Maximizes all of a Pok\u00e9mon's IV stats in Hyper Training.",
  },
  {
    name: "Gold Leaf",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "",
  },
  {
    name: "Golden Nanab Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/golden-nanab-berry.png",
    category: "Berries",
    effect:
      "Drastically calms a Pok\u00e9mon in battle, in Let's Go Pikachu/Eevee.",
  },
  {
    name: "Golden Pinap Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/golden-pinap-berry.png",
    category: "Berries",
    effect:
      "Drastically increases chance of getting items when a Pok\u00e9mon is caught, in Pok\u00e9mon Let's Go.",
  },
  {
    name: "Golden Razz Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/golden-razz-berry.png",
    category: "Berries",
    effect: "Makes a Pok\u00e9mon easier to catch in Pok\u00e9mon Let's Go.",
  },
  {
    name: "Gooey Mulch",
    imageurl: "https://img.pokemondb.net/sprites/items/gooey-mulch.png",
    category: "General items",
    effect:
      "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
  },
  {
    name: "Grass Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/grass-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Grass-type move only once.",
  },
  {
    name: "Grass Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/grass-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Grass type.",
  },
  {
    name: "Grassium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/grassium-z.png",
    category: "Hold items",
    effect: "Allows the use of Bloom Doom, the Grass type Z-Move.",
  },
  {
    name: "Grassy Seed",
    imageurl: "https://img.pokemondb.net/sprites/items/grassy-seed.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It boosts Defense on Grassy Terrain. It can only be used once.",
  },
  {
    name: "Great Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/great-ball.png",
    category: "Pokeballs",
    effect:
      "A good, high-performance Ball that provides a higher Pok\u00e9mon catch rate than a standard Pok\u00e9 Ball.",
  },
  {
    name: "Green Apricorn",
    imageurl: "https://img.pokemondb.net/sprites/items/green-apricorn.png",
    category: "General items",
    effect: "A green Apricorn. It has a mysterious, aromatic scent.",
  },
  {
    name: "Green Scarf",
    imageurl: "https://img.pokemondb.net/sprites/items/green-scarf.png",
    category: "General items",
    effect: "Raises holder's Smart aspect in a Contest.",
  },
  {
    name: "Green Shard",
    imageurl: "https://img.pokemondb.net/sprites/items/green-shard.png",
    category: "General items",
    effect:
      "A small green shard. It appears to be from some sort of implement made long ago.",
  },
  {
    name: "Grepa Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/grepa-berry.png",
    category: "Berries",
    effect: "Increases Friendship but lowers Special Defense EVs.",
  },
  {
    name: "Grip Claw",
    imageurl: "https://img.pokemondb.net/sprites/items/grip-claw.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that extends the duration of multiturn attacks like Bind and Wrap.",
  },
  {
    name: "Griseous Orb",
    imageurl: "https://img.pokemondb.net/sprites/items/griseous-orb.png",
    category: "Hold items",
    effect:
      "Increases the power of Dragon- and Ghost-type moves when held by Giratina, and changes it to Origin Forme.",
  },
  {
    name: "Ground Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/ground-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Ground-type move only once.",
  },
  {
    name: "Ground Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/ground-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Ground type.",
  },
  {
    name: "Groundium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/groundium-z.png",
    category: "Hold items",
    effect: "Allows the use of Tectonic Rage, the Ground type Z-Move.",
  },
  {
    name: "Growth Mulch",
    imageurl: "https://img.pokemondb.net/sprites/items/growth-mulch.png",
    category: "General items",
    effect:
      "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
  },
  {
    name: "Grubby Hanky",
    imageurl: "https://img.pokemondb.net/sprites/items/grubby-hanky.png",
    category: "Hold items",
    effect:
      "A handkerchief dropped by a regular at Caf\u00e9 Warehouse. It smells faintly like a Pok\u00e9mon.",
  },
  {
    name: "Guard Spec.",
    imageurl: "https://img.pokemondb.net/sprites/items/guard-spec.png",
    category: "Battle items",
    effect: "Prevents stat reduction for five turns.",
  },
  {
    name: "Gyaradosite",
    imageurl: "https://img.pokemondb.net/sprites/items/gyaradosite.png",
    category: "Hold items",
    effect: "Enables Gyarados to Mega Evolve during battle.",
  },
  {
    name: "Haban Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/haban-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Dragon-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Hard Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/hard-stone.png",
    category: "Hold items",
    effect: "Increases the power of Rock-type moves.",
  },
  {
    name: "Hasty Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Hasty nature.",
  },
  {
    name: "Heal Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/heal-ball.png",
    category: "Pokeballs",
    effect:
      "A remedial Pok\u00e9 Ball that restores the caught Pok\u00e9mon's HP and eliminates any status problem.",
  },
  {
    name: "Heal Powder",
    imageurl: "https://img.pokemondb.net/sprites/items/heal-powder.png",
    category: "Medicine",
    effect: "Heals all status problems, but lowers Friendship.",
  },
  {
    name: "Health Candy",
    imageurl: "https://img.pokemondb.net/sprites/items/health-candy.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's HP stat by 1.",
  },
  {
    name: "Health Candy L",
    imageurl: "https://img.pokemondb.net/sprites/items/health-candy-l.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's HP stat.",
  },
  {
    name: "Health Candy XL",
    imageurl: "https://img.pokemondb.net/sprites/items/health-candy-xl.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's HP stat.",
  },
  {
    name: "Health Wing",
    imageurl: "https://img.pokemondb.net/sprites/items/health-wing.png",
    category: "Medicine",
    effect: "Increases HP EVs by 1.",
  },
  {
    name: "Heart Scale",
    imageurl: "https://img.pokemondb.net/sprites/items/heart-scale.png",
    category: "General items",
    effect:
      "A pretty, heart-shaped scale that is extremely rare. It glows faintly in the colors of the rainbow.",
  },
  {
    name: "Heart Sweet",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Evolves Milcery into Heart Flavor Alcremie.",
  },
  {
    name: "Heat Rock",
    imageurl: "https://img.pokemondb.net/sprites/items/heat-rock.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that extends the duration of the move Sunny Day used by the holder.",
  },
  {
    name: "Heavy Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/heavy-ball.png",
    category: "Pokeballs",
    effect: "A Pok\u00e9 Ball for catching very heavy Pok\u00e9mon.",
  },
  {
    name: "Heavy-Duty Boots",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Protects the holder from traps set on the battlefield.",
  },
  {
    name: "Helix Fossil",
    imageurl: "https://img.pokemondb.net/sprites/items/helix-fossil.png",
    category: "General items",
    effect:
      "A fossil of an ancient Pok\u00e9mon that lived in the sea. It appears to be part of a seashell.",
  },
  {
    name: "Heracronite",
    imageurl: "https://img.pokemondb.net/sprites/items/heracronite.png",
    category: "Hold items",
    effect: "Enables Heracross to Mega Evolve during battle.",
  },
  {
    name: "HM01",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Cut.",
  },
  {
    name: "HM02",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-flying.png",
    category: "Machines",
    effect: "Teaches the move Fly.",
  },
  {
    name: "HM03",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-water.png",
    category: "Machines",
    effect: "Teaches the move Surf.",
  },
  {
    name: "HM04",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Strength.",
  },
  {
    name: "HM05",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-water.png",
    category: "Machines",
    effect: "Teaches the move Flash/Defog/Whirlpool/Waterfall.",
  },
  {
    name: "HM06",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-water.png",
    category: "Machines",
    effect: "Teaches the move Whirlpool/Rock Smash/Dive.",
  },
  {
    name: "HM07",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-water.png",
    category: "Machines",
    effect: "Teaches the move Waterfall.",
  },
  {
    name: "HM08",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Dive/Rock Climb.",
  },
  {
    name: "Hondew Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/hondew-berry.png",
    category: "Berries",
    effect: "Increases Friendship but lowers Special Attack EVs.",
  },
  {
    name: "Honey",
    imageurl: "https://img.pokemondb.net/sprites/items/honey.png",
    category: "General items",
    effect:
      "A sweet honey with a lush aroma that attracts wild Pok\u00e9mon when it is used in grass, caves, or on special trees.",
  },
  {
    name: "Honor Of Kalos",
    imageurl: "https://img.pokemondb.net/sprites/items/honor-of-kalos.png",
    category: "Hold items",
    effect:
      "A precious symbol that is awarded only to an individual who has done great things for the Kalos region.",
  },
  {
    name: "Houndoominite",
    imageurl: "https://img.pokemondb.net/sprites/items/houndoominite.png",
    category: "Hold items",
    effect: "Enables Houndoom to Mega Evolve during battle.",
  },
  {
    name: "HP Up",
    imageurl: "https://img.pokemondb.net/sprites/items/hp-up.png",
    category: "Medicine",
    effect: "Increases HP EVs by 10.",
  },
  {
    name: "Hyper Potion",
    imageurl: "https://img.pokemondb.net/sprites/items/hyper-potion.png",
    category: "Medicine",
    effect: "Restores 120 HP.",
  },
  {
    name: "Iapapa Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/iapapa-berry.png",
    category: "Berries",
    effect: "Restores HP if it's low, but may cause confusion.",
  },
  {
    name: "Ice Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/ice-gem.png",
    category: "Hold items",
    effect: "Increases the power of an Ice-type move only once.",
  },
  {
    name: "Ice Heal",
    imageurl: "https://img.pokemondb.net/sprites/items/ice-heal.png",
    category: "Medicine",
    effect:
      "A spray-type medicine. It defrosts a Pok\u00e9mon that has been frozen solid.",
  },
  {
    name: "Ice Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/ice-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Ice type.",
  },
  {
    name: "Ice Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/ice-stone.png",
    category: "General items",
    effect: "Evolves certain species of Pok\u00e9mon.",
  },
  {
    name: "Icicle Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/icicle-plate.png",
    category: "Hold items",
    effect: "Increases power of Ice-type moves. Changes Arceus' type to Ice.",
  },
  {
    name: "Icium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/icium-z.png",
    category: "Hold items",
    effect: "Allows the use of Subzero Slammer, the Ice type Z-Move.",
  },
  {
    name: "Icy Rock",
    imageurl: "https://img.pokemondb.net/sprites/items/icy-rock.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that extends the duration of the move Hail used by the holder.",
  },
  {
    name: "Impish Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Impish nature.",
  },
  {
    name: "Incinium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/incinium-z.png",
    category: "Hold items",
    effect:
      "Allows Incineroar to upgrade Darkest Lariat to a Z-Move, Malicious Moonsault.",
  },
  {
    name: "Insect Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/insect-plate.png",
    category: "Hold items",
    effect: "Increases power of Bug-type moves. Changes Arceus' type to Bug.",
  },
  {
    name: "Intriguing Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/intriguing-stone.png",
    category: "Hold items",
    effect:
      "A rather curious stone that might appear to be valuable to some. It's all in the eye of the beholder.",
  },
  {
    name: "Iron",
    imageurl: "https://img.pokemondb.net/sprites/items/iron.png",
    category: "Medicine",
    effect: "Increases Defense EVs by 10.",
  },
  {
    name: "Iron Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/iron-ball.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that cuts Speed. It makes Flying-type and levitating holders susceptible to Ground moves.",
  },
  {
    name: "Iron Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/iron-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Steel-type moves. Changes Arceus' type to Steel.",
  },
  {
    name: "Item Drop",
    imageurl: "https://img.pokemondb.net/sprites/items/item-drop.png",
    category: "Battle items",
    effect: "When used, it causes an ally Pok\u00e9mon to drop a held item.",
  },
  {
    name: "Item Urge",
    imageurl: "https://img.pokemondb.net/sprites/items/item-urge.png",
    category: "Battle items",
    effect: "When used, it causes an ally Pok\u00e9mon to use its held item.",
  },
  {
    name: "Jaboca Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/jaboca-berry.png",
    category: "Berries",
    effect:
      "If held by a Pok\u00e9mon and a physical attack lands, the attacker also takes damage.",
  },
  {
    name: "Jolly Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Jolly nature.",
  },
  {
    name: "Kangaskhanite",
    imageurl: "https://img.pokemondb.net/sprites/items/kangaskhanite.png",
    category: "Hold items",
    effect: "Enables Kangaskhan to Mega Evolve during battle.",
  },
  {
    name: "Kasib Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/kasib-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Ghost-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Kebia Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/kebia-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Poison-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Kee Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/kee-berry.png",
    category: "Berries",
    effect:
      "If held by a Pok\u00e9mon, this Berry will increase the holder's Defense if it's hit with a physical move.",
  },
  {
    name: "Kelpsy Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/kelpsy-berry.png",
    category: "Berries",
    effect: "Increases Friendship but lowers Attack EVs.",
  },
  {
    name: "King's Rock",
    imageurl: "https://img.pokemondb.net/sprites/items/kings-rock.png",
    category: "Hold items",
    effect:
      "May cause opponent to flinch. Evolves Poliwhirl and Slowpoke when traded holding the item.",
  },
  {
    name: "Kommonium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/kommonium-z.png",
    category: "Hold items",
    effect:
      "Allows Kommo-o to upgrade Clanging Scales to a Z-Move, Clangorous Soulblaze.",
  },
  {
    name: "Lagging Tail",
    imageurl: "https://img.pokemondb.net/sprites/items/lagging-tail.png",
    category: "Hold items",
    effect: "Holder always attacks last.",
  },
  {
    name: "Lansat Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/lansat-berry.png",
    category: "Berries",
    effect: "Increases critical-hit ratio when HP is low.",
  },
  {
    name: "Latiasite",
    imageurl: "https://img.pokemondb.net/sprites/items/latiasite.png",
    category: "Hold items",
    effect: "Enables Latias to Mega Evolve during battle.",
  },
  {
    name: "Latiosite",
    imageurl: "https://img.pokemondb.net/sprites/items/latiosite.png",
    category: "Hold items",
    effect: "Enables Latios to Mega Evolve during battle.",
  },
  {
    name: "Lava Cookie",
    imageurl: "https://img.pokemondb.net/sprites/items/lava-cookie.png",
    category: "Medicine",
    effect: "Heals all major status conditions.",
  },
  {
    name: "Lax Incense",
    imageurl: "https://img.pokemondb.net/sprites/items/lax-incense.png",
    category: "Hold items",
    effect:
      "Lowers the opponent's accuracy. Breeding Wobbuffet produces Wynaut when held.",
  },
  {
    name: "Lax Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Lax nature.",
  },
  {
    name: "Leaf Letter",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect:
      "A letter written on a leaf. Something is written using Eevee's footprints.",
  },
  {
    name: "Leaf Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/leaf-stone.png",
    category: "General items",
    effect: "Evolves certain species of Pok\u00e9mon.",
  },
  {
    name: "Leftovers",
    imageurl: "https://img.pokemondb.net/sprites/items/leftovers.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. The holder's HP is gradually restored during battle.",
  },
  {
    name: "Lemonade",
    imageurl: "https://img.pokemondb.net/sprites/items/lemonade.png",
    category: "Medicine",
    effect: "Restores 70 HP.",
  },
  {
    name: "Leppa Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/leppa-berry.png",
    category: "Berries",
    effect: "If held by a Pok\u00e9mon, it restores a move's PP by 10.",
  },
  {
    name: "Level Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/level-ball.png",
    category: "Pokeballs",
    effect:
      "A Pok\u00e9 Ball for catching Pok\u00e9mon that are a lower level than your own.",
  },
  {
    name: "Liechi Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/liechi-berry.png",
    category: "Berries",
    effect: "Raises Attack when HP is low.",
  },
  {
    name: "Life Orb",
    imageurl: "https://img.pokemondb.net/sprites/items/life-orb.png",
    category: "Hold items",
    effect: "Increases the power of moves, but loses HP each turn.",
  },
  {
    name: "Light Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/light-ball.png",
    category: "Hold items",
    effect:
      "An item to be held by PIKACHU. It is a puzzling orb that raises the Attack and Sp. Atk stat.",
  },
  {
    name: "Light Clay",
    imageurl: "https://img.pokemondb.net/sprites/items/light-clay.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that extends the duration of barrier moves like Light Screen and Reflect used by the holder.",
  },
  {
    name: "Lone Earring",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "",
  },
  {
    name: "Lonely Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Lonely nature.",
  },
  {
    name: "Looker Ticket",
    imageurl: "https://img.pokemondb.net/sprites/items/looker-ticket.png",
    category: "Hold items",
    effect:
      "A ticket that was handmade by Looker. It's decorated with a liberal amount of glittery paint.",
  },
  {
    name: "Lopunnite",
    imageurl: "https://img.pokemondb.net/sprites/items/lopunnite.png",
    category: "Hold items",
    effect: "Enables Lopunny to Mega Evolve during battle.",
  },
  {
    name: "Love Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/love-ball.png",
    category: "Pokeballs",
    effect:
      "Pok\u00e9 Ball for catching Pok\u00e9mon that are the opposite gender of your Pok\u00e9mon.",
  },
  {
    name: "Lucarionite",
    imageurl: "https://img.pokemondb.net/sprites/items/lucarionite.png",
    category: "Hold items",
    effect: "Enables Lucario to Mega Evolve during battle.",
  },
  {
    name: "Luck Incense",
    imageurl: "https://img.pokemondb.net/sprites/items/luck-incense.png",
    category: "Hold items",
    effect:
      "Doubles prize money if held. Breeding Chansey or Blissey produces Happiny when held.",
  },
  {
    name: "Lucky Egg",
    imageurl: "https://img.pokemondb.net/sprites/items/lucky-egg.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It is an egg filled with happiness that earns extra Exp. Points in battle.",
  },
  {
    name: "Lucky Punch",
    imageurl: "https://img.pokemondb.net/sprites/items/lucky-punch.png",
    category: "Hold items",
    effect: "Increases critical-hit ratio when held by Chansey.",
  },
  {
    name: "Lum Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/lum-berry.png",
    category: "Berries",
    effect: "If held by a Pok\u00e9mon, it recovers from any status problem.",
  },
  {
    name: "Luminous Moss",
    imageurl: "https://img.pokemondb.net/sprites/items/luminous-moss.png",
    category: "Hold items",
    effect: "Raises Special Defense if hit by a Water-type move.",
  },
  {
    name: "Lumiose Galette",
    imageurl: "https://img.pokemondb.net/sprites/items/lumiose-galette.png",
    category: "Medicine",
    effect: "Heals all major status conditions.",
  },
  {
    name: "Lunalium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/lunalium-z.png",
    category: "Hold items",
    effect:
      "Allows Lunala to upgrade Moongeist Beam to a Z-Move, Menacing Moonraze Maelstrom.",
  },
  {
    name: "Lure",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "Attracts Pok\u00e9mon in the wild.",
  },
  {
    name: "Lure Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/lure-ball.png",
    category: "Pokeballs",
    effect:
      "A Pok\u00e9 Ball for catching Pok\u00e9mon hooked by a Rod when fishing.",
  },
  {
    name: "Lustrous Orb",
    imageurl: "https://img.pokemondb.net/sprites/items/lustrous-orb.png",
    category: "Hold items",
    effect:
      "Increases the power of Dragon- and Water-type moves when held by Palkia.",
  },
  {
    name: "Luxury Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/luxury-ball.png",
    category: "Pokeballs",
    effect:
      "A comfortable Pok\u00e9 Ball that makes a caught wild Pok\u00e9mon quickly grow friendly.",
  },
  {
    name: "Lycanium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/lycanium-z.png",
    category: "Hold items",
    effect:
      "Allows Lycanroc to upgrade Stone Edge to a Z-Move, Splintered Stormshards.",
  },
  {
    name: "Macho Brace",
    imageurl: "https://img.pokemondb.net/sprites/items/macho-brace.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It is a stiff and heavy brace that promotes strong growth but lowers Speed.",
  },
  {
    name: "Magmarizer",
    imageurl: "https://img.pokemondb.net/sprites/items/magmarizer.png",
    category: "General items",
    effect: "Evolves Magmar when traded holding the item.",
  },
  {
    name: "Magnet",
    imageurl: "https://img.pokemondb.net/sprites/items/magnet.png",
    category: "Hold items",
    effect: "Increases the power of Electric-type moves.",
  },
  {
    name: "Mago Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/mago-berry.png",
    category: "Berries",
    effect: "Restores HP if it's low, but may cause confusion.",
  },
  {
    name: "Magost Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/magost-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Manectite",
    imageurl: "https://img.pokemondb.net/sprites/items/manectite.png",
    category: "Hold items",
    effect: "Enables Manectric to Mega Evolve during battle.",
  },
  {
    name: "Maranga Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/maranga-berry.png",
    category: "Berries",
    effect:
      "If held by a Pok\u00e9mon, this Berry will increase the holder's Sp. Def if it's hit with a special move.",
  },
  {
    name: "Marble",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "",
  },
  {
    name: "Marshadium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/marshadium-z.png",
    category: "Hold items",
    effect:
      "Allows Marshadow to upgrade Spectral Thief to a Z-Move, Soul-Stealing 7-Star Strike.",
  },
  {
    name: "Master Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/master-ball.png",
    category: "Pokeballs",
    effect:
      "The best Ball with the ultimate level of performance. It will catch any wild Pok\u00e9mon without fail.",
  },
  {
    name: "Mawilite",
    imageurl: "https://img.pokemondb.net/sprites/items/mawilite.png",
    category: "Hold items",
    effect: "Enables Mawile to Mega Evolve during battle.",
  },
  {
    name: "Max Elixir",
    imageurl: "https://img.pokemondb.net/sprites/items/max-elixir.png",
    category: "Medicine",
    effect:
      "It fully restores the PP of all the moves learned by the targeted Pok\u00e9mon.",
  },
  {
    name: "Max Ether",
    imageurl: "https://img.pokemondb.net/sprites/items/max-ether.png",
    category: "Medicine",
    effect:
      "It fully restores the PP of a single selected move that has been learned by the target Pok\u00e9mon.",
  },
  {
    name: "Max Lure",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "Attracts Pok\u00e9mon in the wild.",
  },
  {
    name: "Max Potion",
    imageurl: "https://img.pokemondb.net/sprites/items/max-potion.png",
    category: "Medicine",
    effect: "Fully restores HP.",
  },
  {
    name: "Max Repel",
    imageurl: "https://img.pokemondb.net/sprites/items/max-repel.png",
    category: "General items",
    effect:
      "An item that prevents weak wild Pok\u00e9mon from appearing for 250 steps after its use.",
  },
  {
    name: "Max Revive",
    imageurl: "https://img.pokemondb.net/sprites/items/max-revive.png",
    category: "Medicine",
    effect:
      "A medicine that revives a fainted Pok\u00e9mon. It fully restores the Pok\u00e9mon's HP.",
  },
  {
    name: "Meadow Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/meadow-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Grass-type moves. Changes Arceus' type to Grass.",
  },
  {
    name: "Medichamite",
    imageurl: "https://img.pokemondb.net/sprites/items/medichamite.png",
    category: "Hold items",
    effect: "Enables Medicham to Mega Evolve during battle.",
  },
  {
    name: "Mental Herb",
    imageurl: "https://img.pokemondb.net/sprites/items/mental-herb.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It snaps the holder out of infatuation. It can be used only once.",
  },
  {
    name: "Metagrossite",
    imageurl: "https://img.pokemondb.net/sprites/items/metagrossite.png",
    category: "Hold items",
    effect: "Enables Metagross to Mega Evolve during battle.",
  },
  {
    name: "Metal Coat",
    imageurl: "https://img.pokemondb.net/sprites/items/metal-coat.png",
    category: "Hold items",
    effect:
      "Increases the power of Steel-type moves. Evolves Onix and Scyther when traded holding the item.",
  },
  {
    name: "Metal Powder",
    imageurl: "https://img.pokemondb.net/sprites/items/metal-powder.png",
    category: "Hold items",
    effect: "Increases Defense when held by Ditto.",
  },
  {
    name: "Metronome",
    imageurl: "https://img.pokemondb.net/sprites/items/metronome.png",
    category: "Hold items",
    effect: "Increases the power of moves used consecutively.",
  },
  {
    name: "Mewnium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/mewnium-z.png",
    category: "Hold items",
    effect: "Allows Mew to upgrade Psychic to a Z-Move, Genesis Supernova.",
  },
  {
    name: "Mewtwonite X",
    imageurl: "https://img.pokemondb.net/sprites/items/mewtwonite-x.png",
    category: "Hold items",
    effect: "Enables Mewtwo to Mega Evolve during battle.",
  },
  {
    name: "Mewtwonite Y",
    imageurl: "https://img.pokemondb.net/sprites/items/mewtwonite-y.png",
    category: "Hold items",
    effect: "Enables Mewtwo to Mega Evolve during battle.",
  },
  {
    name: "Micle Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/micle-berry.png",
    category: "Berries",
    effect: "Increases a move's accuracy when HP is low.",
  },
  {
    name: "Mighty Candy",
    imageurl: "https://img.pokemondb.net/sprites/items/mighty-candy.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Attack stat by 1.",
  },
  {
    name: "Mighty Candy L",
    imageurl: "https://img.pokemondb.net/sprites/items/mighty-candy-l.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Attack stat.",
  },
  {
    name: "Mighty Candy XL",
    imageurl: "https://img.pokemondb.net/sprites/items/mighty-candy-xl.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Attack stat.",
  },
  {
    name: "Mild Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Mild nature.",
  },
  {
    name: "Mimikium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/mimikium-z.png",
    category: "Hold items",
    effect:
      "Allows Mimikyu to upgrade Play Rough to a Z-Move, Let's Snuggle Forever.",
  },
  {
    name: "Mind Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/mind-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Psychic-type moves. Changes Arceus' type to Psychic.",
  },
  {
    name: "Miracle Seed",
    imageurl: "https://img.pokemondb.net/sprites/items/miracle-seed.png",
    category: "Hold items",
    effect: "Increases the power of Grass-type moves.",
  },
  {
    name: "Misty Seed",
    imageurl: "https://img.pokemondb.net/sprites/items/misty-seed.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It boosts Sp. Def on Misty Terrain. It can only be used once.",
  },
  {
    name: "Modest Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Modest nature.",
  },
  {
    name: "Moomoo Milk",
    imageurl: "https://img.pokemondb.net/sprites/items/moomoo-milk.png",
    category: "Medicine",
    effect:
      "Milk with a very high nutrition content. It restores the HP of one Pok\u00e9mon by 100 points.",
  },
  {
    name: "Moon Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/moon-ball.png",
    category: "Pokeballs",
    effect:
      "A Pok\u00e9 Ball for catching Pok\u00e9mon that evolve using the Moon Stone.",
  },
  {
    name: "Moon Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/moon-stone.png",
    category: "General items",
    effect: "Evolves certain species of Pok\u00e9mon.",
  },
  {
    name: "Muscle Band",
    imageurl: "https://img.pokemondb.net/sprites/items/muscle-band.png",
    category: "Hold items",
    effect: "Increases the power of Physical-category moves.",
  },
  {
    name: "Muscle Wing",
    imageurl: "https://img.pokemondb.net/sprites/items/muscle-wing.png",
    category: "Medicine",
    effect: "Increases Attack EVs by 1.",
  },
  {
    name: "Mystic Water",
    imageurl: "https://img.pokemondb.net/sprites/items/mystic-water.png",
    category: "Hold items",
    effect: "Increases the power of Water-type moves.",
  },
  {
    name: "Naive Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Naive nature.",
  },
  {
    name: "Nanab Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/nanab-berry.png",
    category: "Berries",
    effect:
      "A Berry to be used in cooking. Calms a Pok\u00e9mon in battle, in Let's Go Pikachu/Eevee.",
  },
  {
    name: "Naughty Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Naughty nature.",
  },
  {
    name: "Nest Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/nest-ball.png",
    category: "Pokeballs",
    effect:
      "A somewhat different Pok\u00e9 Ball that works especially well on weaker Pok\u00e9mon in the wild.",
  },
  {
    name: "Net Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/net-ball.png",
    category: "Pokeballs",
    effect:
      "A somewhat different Pok\u00e9 Ball that works especially well on Water- and Bug-type Pok\u00e9mon.",
  },
  {
    name: "Never-Melt Ice",
    imageurl: "https://img.pokemondb.net/sprites/items/never-melt-ice.png",
    category: "Hold items",
    effect: "Increases the power of Ice-type moves.",
  },
  {
    name: "Nomel Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/nomel-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Normal Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/normal-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Normal-type move only once.",
  },
  {
    name: "Normalium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/normalium-z.png",
    category: "Hold items",
    effect: "Allows the use of Breakneck Blitz, the Normal type Z-Move.",
  },
  {
    name: "Nugget",
    imageurl: "https://img.pokemondb.net/sprites/items/nugget.png",
    category: "General items",
    effect:
      "A nugget of pure gold that gives off a lustrous gleam. It can be sold at a high price to shops.",
  },
  {
    name: "Occa Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/occa-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Fire-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Odd Incense",
    imageurl: "https://img.pokemondb.net/sprites/items/odd-incense.png",
    category: "Hold items",
    effect:
      "Increases the power of Psychic-type moves. Breeding Mr. Mime produces Mime Jr. when held.",
  },
  {
    name: "Odd Keystone",
    imageurl: "https://img.pokemondb.net/sprites/items/odd-keystone.png",
    category: "General items",
    effect:
      "A vital item that is needed to keep a stone tower from collapsing. Voices can be heard from it occasionally.",
  },
  {
    name: "Old Amber",
    imageurl: "https://img.pokemondb.net/sprites/items/old-amber.png",
    category: "General items",
    effect:
      "A piece of amber that contains the genetic material of an ancient Pok\u00e9mon. It is clear with a reddish tint.",
  },
  {
    name: "Old Gateau",
    imageurl: "https://img.pokemondb.net/sprites/items/old-gateau.png",
    category: "Medicine",
    effect: "Heals all major status conditions.",
  },
  {
    name: "Oran Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/oran-berry.png",
    category: "Berries",
    effect: "If held by a Pok\u00e9mon, it heals the user by just 10 HP.",
  },
  {
    name: "Oval Charm",
    imageurl: "https://img.pokemondb.net/sprites/items/oval-charm.png",
    category: "General items",
    effect:
      "An oval charm said to increase the chance of Pok\u00e9mon Eggs being found at the Day Care.",
  },
  {
    name: "Oval Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/oval-stone.png",
    category: "General items",
    effect: "Evolves Happiny when held.",
  },
  {
    name: "Pack of Potatoes",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "",
  },
  {
    name: "Pamtre Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/pamtre-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Paralyze Heal",
    imageurl: "https://img.pokemondb.net/sprites/items/paralyze-heal.png",
    category: "Medicine",
    effect:
      "A spray-type medicine. It eliminates paralysis from a single Pok\u00e9mon.",
  },
  {
    name: "Park Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/park-ball.png",
    category: "Pokeballs",
    effect: "A special Pok\u00e9 Ball for the Pal Park.",
  },
  {
    name: "Pass Orb",
    imageurl: "https://img.pokemondb.net/sprites/items/pass-orb.png",
    category: "Hold items",
    effect:
      "A mysterious orb containing the power of the Unova region, to be used when generating Pass Power.",
  },
  {
    name: "Passho Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/passho-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Water-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Payapa Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/payapa-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Psychic-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Pearl",
    imageurl: "https://img.pokemondb.net/sprites/items/pearl.png",
    category: "General items",
    effect:
      "A somewhat-small pearl that sparkles in a pretty silver color. It can be sold cheaply to shops.",
  },
  {
    name: "Pearl String",
    imageurl: "https://img.pokemondb.net/sprites/items/pearl-string.png",
    category: "General items",
    effect:
      "Very large pearls that sparkle in a pretty silver color. A maniac will buy them for a high price.",
  },
  {
    name: "Pecha Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/pecha-berry.png",
    category: "Berries",
    effect: "If held by a Pok\u00e9mon, it recovers from poison.",
  },
  {
    name: "Permit",
    imageurl: "https://img.pokemondb.net/sprites/items/permit.png",
    category: "General items",
    effect:
      "A permit that is needed to enter the Nature Preserve. Not many know about it.",
  },
  {
    name: "Persim Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/persim-berry.png",
    category: "Berries",
    effect: "If held by a Pok\u00e9mon, it recovers from confusion.",
  },
  {
    name: "Petaya Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/petaya-berry.png",
    category: "Berries",
    effect: "Raises Special Attack when HP is low.",
  },
  {
    name: "Pewter Crunchies",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Medicine",
    effect: "Heals all major status conditions.",
  },
  {
    name: "Pidgeotite",
    imageurl: "https://img.pokemondb.net/sprites/items/pidgeotite.png",
    category: "Hold items",
    effect: "Enables Pidgeot to Mega Evolve during battle.",
  },
  {
    name: "Pikanium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/pikanium-z.png",
    category: "Hold items",
    effect: "Allows Pikachu to upgrade Volt Tackle to a Z-Move, Catastropika.",
  },
  {
    name: "Pikashunium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/pikashunium-z.png",
    category: "Hold items",
    effect:
      "Allows Pikachu in a cap to upgrade Thunderbolt to a Z-Move, 10,000,000 Volt Thunderbolt.",
  },
  {
    name: "Pinap Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/pinap-berry.png",
    category: "Berries",
    effect:
      "A Berry to be used in cooking. Increases chances of getting items when a Pok\u00e9mon is caught, in Pok\u00e9mon Let's Go.",
  },
  {
    name: "Pink Apricorn",
    imageurl: "https://img.pokemondb.net/sprites/items/pink-apricorn.png",
    category: "General items",
    effect: "A pink Apricorn. It has a nice, sweet scent.",
  },
  {
    name: "Pink Nectar",
    imageurl: "https://img.pokemondb.net/sprites/items/pink-nectar.png",
    category: "Hold items",
    effect:
      "The flower nectar obtained at the flowering shrubs on Royal Avenue. It changes the form of certain species of Pok\u00e9mon.",
  },
  {
    name: "Pink Scarf",
    imageurl: "https://img.pokemondb.net/sprites/items/pink-scarf.png",
    category: "General items",
    effect: "Raises holder's Cute aspect in a Contest.",
  },
  {
    name: "Pinsirite",
    imageurl: "https://img.pokemondb.net/sprites/items/pinsirite.png",
    category: "Hold items",
    effect: "Enables Pinsir to Mega Evolve during battle.",
  },
  {
    name: "Pixie Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/pixie-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Fairy-type moves. Changes Arceus' type to Fairy.",
  },
  {
    name: "Plasma Card",
    imageurl: "https://img.pokemondb.net/sprites/items/plasma-card.png",
    category: "Hold items",
    effect:
      "A card key needed to enter the password inside the Plasma Frigate.",
  },
  {
    name: "Plume Fossil",
    imageurl: "https://img.pokemondb.net/sprites/items/plume-fossil.png",
    category: "General items",
    effect:
      "A fossil of an ancient Pok\u00e9mon that flew in the sky in ancient times. It appears to be part of its wing.",
  },
  {
    name: "Poison Barb",
    imageurl: "https://img.pokemondb.net/sprites/items/poison-barb.png",
    category: "Hold items",
    effect: "Increases the power of Poison-type moves.",
  },
  {
    name: "Poison Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/poison-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Poison-type move only once.",
  },
  {
    name: "Poison Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/poison-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Poison type.",
  },
  {
    name: "Poisonium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/poisonium-z.png",
    category: "Hold items",
    effect: "Allows the use of Acid Downpour, the Poison type Z-Move.",
  },
  {
    name: "Pok\u00e9 Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/poke-ball.png",
    category: "Pokeballs",
    effect:
      "A device for catching wild Pok\u00e9mon. It is thrown like a ball at the target. It is designed as a capsule system.",
  },
  {
    name: "Pok\u00e9 Doll",
    imageurl: "https://img.pokemondb.net/sprites/items/poke-doll.png",
    category: "General items",
    effect:
      "A doll that attracts Pok\u00e9mon. Use it to flee from any battle with a wild Pok\u00e9mon.",
  },
  {
    name: "Pok\u00e9 Toy",
    imageurl: "https://img.pokemondb.net/sprites/items/poke-toy.png",
    category: "General items",
    effect:
      "An item that attracts Pok\u00e9mon. Use it to flee from any battle with a wild Pok\u00e9mon.",
  },
  {
    name: "Polished Mud Ball",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "",
  },
  {
    name: "Pomeg Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/pomeg-berry.png",
    category: "Berries",
    effect: "Increases Friendship but lowers HP EVs.",
  },
  {
    name: "Potion",
    imageurl: "https://img.pokemondb.net/sprites/items/potion.png",
    category: "Medicine",
    effect: "Restores 20 HP.",
  },
  {
    name: "Power Anklet",
    imageurl: "https://img.pokemondb.net/sprites/items/power-anklet.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that promotes Speed gain on leveling, but reduces the Speed stat.",
  },
  {
    name: "Power Band",
    imageurl: "https://img.pokemondb.net/sprites/items/power-band.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that promotes Sp. Def gain on leveling, but reduces the Speed stat.",
  },
  {
    name: "Power Belt",
    imageurl: "https://img.pokemondb.net/sprites/items/power-belt.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that promotes Defense gain on leveling, but reduces the Speed stat.",
  },
  {
    name: "Power Bracer",
    imageurl: "https://img.pokemondb.net/sprites/items/power-bracer.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that promotes Attack gain on leveling, but reduces the Speed stat.",
  },
  {
    name: "Power Herb",
    imageurl: "https://img.pokemondb.net/sprites/items/power-herb.png",
    category: "Hold items",
    effect:
      "A single-use item to be held by a Pok\u00e9mon. It allows the immediate use of a move that charges on the first turn.",
  },
  {
    name: "Power Lens",
    imageurl: "https://img.pokemondb.net/sprites/items/power-lens.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that promotes Sp. Atk gain on leveling, but reduces the Speed stat.",
  },
  {
    name: "Power Plant Pass",
    imageurl: "https://img.pokemondb.net/sprites/items/power-plant-pass.png",
    category: "Hold items",
    effect:
      "This pass serves as an ID card for gaining access to the power plant that lies along Route 13.",
  },
  {
    name: "Power Weight",
    imageurl: "https://img.pokemondb.net/sprites/items/power-weight.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that promotes HP gain on leveling, but reduces the Speed stat.",
  },
  {
    name: "PP Max",
    imageurl: "https://img.pokemondb.net/sprites/items/pp-max.png",
    category: "Medicine",
    effect:
      "It maximally raises the top PP of a selected move that has been learned by the target Pok\u00e9mon.",
  },
  {
    name: "PP Up",
    imageurl: "https://img.pokemondb.net/sprites/items/pp-up.png",
    category: "Medicine",
    effect:
      "It slightly raises the maximum PP of a selected move that has been learned by the target Pok\u00e9mon.",
  },
  {
    name: "Premier Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/premier-ball.png",
    category: "Pokeballs",
    effect:
      "A somewhat rare Pok\u00e9 Ball that has been specially made to commemorate an event of some sort.",
  },
  {
    name: "Pretty Wing",
    imageurl: "https://img.pokemondb.net/sprites/items/pretty-wing.png",
    category: "General items",
    effect:
      "Though this feather is beautiful, it's just a regular feather and has no effect on Pok\u00e9mon.",
  },
  {
    name: "Primarium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/primarium-z.png",
    category: "Hold items",
    effect:
      "Allows Primarina to upgrade Sparkling Aria to a Z-Move, Oceanic Operetta.",
  },
  {
    name: "Prism Scale",
    imageurl: "https://img.pokemondb.net/sprites/items/prism-scale.png",
    category: "General items",
    effect: "Evolves Feebas when traded holding the item.",
  },
  {
    name: "Prison Bottle",
    imageurl: "https://img.pokemondb.net/sprites/items/prison-bottle.png",
    category: "Hold items",
    effect: "Transforms Hoopa Confined to Hoopa Unbound.",
  },
  {
    name: "Prof's Letter",
    imageurl: "https://img.pokemondb.net/sprites/items/profs-letter.png",
    category: "Hold items",
    effect:
      "A letter that Professor Sycamore wrote to your mother. A faint but pleasant perfume seems to cling to the paper.",
  },
  {
    name: "Protective Pads",
    imageurl: "https://img.pokemondb.net/sprites/items/protective-pads.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. These pads protect the holder from effects caused by making direct contact with the target.",
  },
  {
    name: "Protector",
    imageurl: "https://img.pokemondb.net/sprites/items/protector.png",
    category: "General items",
    effect: "Evolves Rhydon when traded holding the item.",
  },
  {
    name: "Protein",
    imageurl: "https://img.pokemondb.net/sprites/items/protein.png",
    category: "Medicine",
    effect: "Increases Attack EVs by 10.",
  },
  {
    name: "Psychic Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/psychic-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Psychic-type move only once.",
  },
  {
    name: "Psychic Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/psychic-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Psychic type.",
  },
  {
    name: "Psychic Seed",
    imageurl: "https://img.pokemondb.net/sprites/items/psychic-seed.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It boosts Sp. Def on Psychic Terrain. It can only be used once.",
  },
  {
    name: "Psychium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/psychium-z.png",
    category: "Hold items",
    effect: "Allows the use of Shattered Psyche, the Psychic type Z-Move.",
  },
  {
    name: "Pungent Root",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "",
  },
  {
    name: "Pure Incense",
    imageurl: "https://img.pokemondb.net/sprites/items/pure-incense.png",
    category: "Hold items",
    effect:
      "Descreases the likelihood of meeting wild Pok\u00e9mon. Breeding Chimecho produces Chingling when held.",
  },
  {
    name: "Purple Nectar",
    imageurl: "https://img.pokemondb.net/sprites/items/purple-nectar.png",
    category: "Hold items",
    effect:
      "A flower nectar obtained at Poni Meadow. It changes the form of certain species of Pok\u00e9mon.",
  },
  {
    name: "Qualot Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/qualot-berry.png",
    category: "Berries",
    effect: "Increases Friendship but lowers Defense EVs.",
  },
  {
    name: "Quick Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/quick-ball.png",
    category: "Pokeballs",
    effect:
      "A somewhat different Pok\u00e9 Ball that provides a better catch rate if it is used at the start of a wild encounter.",
  },
  {
    name: "Quick Candy",
    imageurl: "https://img.pokemondb.net/sprites/items/quick-candy.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Speed stat by 1.",
  },
  {
    name: "Quick Candy L",
    imageurl: "https://img.pokemondb.net/sprites/items/quick-candy-l.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Speed stat.",
  },
  {
    name: "Quick Candy XL",
    imageurl: "https://img.pokemondb.net/sprites/items/quick-candy-xl.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Speed stat.",
  },
  {
    name: "Quick Claw",
    imageurl: "https://img.pokemondb.net/sprites/items/quick-claw.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. A light, sharp claw that lets the bearer move first occasionally.",
  },
  {
    name: "Quick Powder",
    imageurl: "https://img.pokemondb.net/sprites/items/quick-powder.png",
    category: "Hold items",
    effect: "Increases Speed when held by Ditto.",
  },
  {
    name: "Quiet Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Quiet nature.",
  },
  {
    name: "Rabuta Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/rabuta-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Rage Candy Bar",
    imageurl: "https://img.pokemondb.net/sprites/items/rage-candy-bar.png",
    category: "Medicine",
    effect: "Heals all major status conditions.",
  },
  {
    name: "Rare Bone",
    imageurl: "https://img.pokemondb.net/sprites/items/rare-bone.png",
    category: "General items",
    effect:
      "A bone that is extremely valuable for Pok\u00e9mon archeology. It can be sold for a high price to shops.",
  },
  {
    name: "Rare Candy",
    imageurl: "https://img.pokemondb.net/sprites/items/rare-candy.png",
    category: "Medicine",
    effect:
      "A candy that is packed with energy. It raises the level of a single Pok\u00e9mon by one.",
  },
  {
    name: "Rash Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Rash nature.",
  },
  {
    name: "Rawst Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/rawst-berry.png",
    category: "Berries",
    effect: "If held by a Pok\u00e9mon, it recovers from a burn.",
  },
  {
    name: "Razor Claw",
    imageurl: "https://img.pokemondb.net/sprites/items/razor-claw.png",
    category: "Hold items",
    effect: "Increases critical-hit ratio. Evolves Sneasel when held at night.",
  },
  {
    name: "Razor Fang",
    imageurl: "https://img.pokemondb.net/sprites/items/razor-fang.png",
    category: "Hold items",
    effect: "May cause opponent to flinch. Evolves Gligar when held at night.",
  },
  {
    name: "Razz Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/razz-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Reaper Cloth",
    imageurl: "https://img.pokemondb.net/sprites/items/reaper-cloth.png",
    category: "General items",
    effect: "Evolves Dusclops when traded holding the item.",
  },
  {
    name: "Red Apricorn",
    imageurl: "https://img.pokemondb.net/sprites/items/red-apricorn.png",
    category: "General items",
    effect: "A red Apricorn. It assails your nostrils.",
  },
  {
    name: "Red Card",
    imageurl: "https://img.pokemondb.net/sprites/items/red-card.png",
    category: "Hold items",
    effect:
      "A card with a mysterious power. When the holder is struck by a foe, the attacker is removed from battle.",
  },
  {
    name: "Red Flute",
    imageurl: "https://img.pokemondb.net/sprites/items/red-flute.png",
    category: "General items",
    effect:
      "A toy flute made from red glass. A maniac will buy it for a high price.",
  },
  {
    name: "Red Nectar",
    imageurl: "https://img.pokemondb.net/sprites/items/red-nectar.png",
    category: "Hold items",
    effect:
      "A flower nectar obtained at Ula'ula Meadow. It changes the form of certain species of Pok\u00e9mon.",
  },
  {
    name: "Red Scarf",
    imageurl: "https://img.pokemondb.net/sprites/items/red-scarf.png",
    category: "General items",
    effect: "Raises holder's Cool aspect in a Contest.",
  },
  {
    name: "Red Shard",
    imageurl: "https://img.pokemondb.net/sprites/items/red-shard.png",
    category: "General items",
    effect:
      "A small red shard. It appears to be from some sort of implement made long ago.",
  },
  {
    name: "Relaxed Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Relaxed nature.",
  },
  {
    name: "Relic Band",
    imageurl: "https://img.pokemondb.net/sprites/items/relic-band.png",
    category: "General items",
    effect:
      "A bracelet made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
  },
  {
    name: "Relic Copper",
    imageurl: "https://img.pokemondb.net/sprites/items/relic-copper.png",
    category: "General items",
    effect:
      "A copper coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
  },
  {
    name: "Relic Crown",
    imageurl: "https://img.pokemondb.net/sprites/items/relic-crown.png",
    category: "General items",
    effect:
      "A crown made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
  },
  {
    name: "Relic Gold",
    imageurl: "https://img.pokemondb.net/sprites/items/relic-gold.png",
    category: "General items",
    effect:
      "A gold coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
  },
  {
    name: "Relic Silver",
    imageurl: "https://img.pokemondb.net/sprites/items/relic-silver.png",
    category: "General items",
    effect:
      "A silver coin used in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
  },
  {
    name: "Relic Statue",
    imageurl: "https://img.pokemondb.net/sprites/items/relic-statue.png",
    category: "General items",
    effect:
      "A stone figure made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
  },
  {
    name: "Relic Vase",
    imageurl: "https://img.pokemondb.net/sprites/items/relic-vase.png",
    category: "General items",
    effect:
      "A vase made in a civilization about 3,000 years ago. A maniac will buy it for a high price.",
  },
  {
    name: "Repeat Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/repeat-ball.png",
    category: "Pokeballs",
    effect:
      "A somewhat different Pok\u00e9 Ball that works especially well on Pok\u00e9mon species that were previously caught.",
  },
  {
    name: "Repel",
    imageurl: "https://img.pokemondb.net/sprites/items/repel.png",
    category: "General items",
    effect:
      "An item that prevents weak wild Pok\u00e9mon from appearing for 100 steps after its use.",
  },
  {
    name: "Reset Urge",
    imageurl: "https://img.pokemondb.net/sprites/items/reset-urge.png",
    category: "Battle items",
    effect: "When used, it restores any stat changes of an ally Pok\u00e9mon.",
  },
  {
    name: "Resist Wing",
    imageurl: "https://img.pokemondb.net/sprites/items/resist-wing.png",
    category: "Medicine",
    effect: "Increases Defense EVs by 1.",
  },
  {
    name: "Reveal Glass",
    imageurl: "https://img.pokemondb.net/sprites/items/reveal-glass.png",
    category: "General items",
    effect:
      "A looking glass that reveals the truth. It's a mysterious glass that returns a Pok\u00e9mon to its original shape.",
  },
  {
    name: "Revival Herb",
    imageurl: "https://img.pokemondb.net/sprites/items/revival-herb.png",
    category: "Medicine",
    effect: "Revives a Pok\u00e9mon to max HP, but lowers Friendship.",
  },
  {
    name: "Revive",
    imageurl: "https://img.pokemondb.net/sprites/items/revive.png",
    category: "Medicine",
    effect:
      "A medicine that revives a fainted Pok\u00e9mon. It restores half the Pok\u00e9mon's maximum HP.",
  },
  {
    name: "Rindo Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/rindo-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Grass-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Ring Target",
    imageurl: "https://img.pokemondb.net/sprites/items/ring-target.png",
    category: "Hold items",
    effect:
      "Moves that would otherwise have no effect will land on the Pok\u00e9mon that holds it.",
  },
  {
    name: "Rock Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/rock-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Rock-type move only once.",
  },
  {
    name: "Rock Incense",
    imageurl: "https://img.pokemondb.net/sprites/items/rock-incense.png",
    category: "Hold items",
    effect:
      "Increases the power of Rock-type moves. Breeding Sudowoodo produces Bonsly when held.",
  },
  {
    name: "Rock Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/rock-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Rock type.",
  },
  {
    name: "Rockium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/rockium-z.png",
    category: "Hold items",
    effect: "Allows the use of Continental Crush, the Rock type Z-Move.",
  },
  {
    name: "Rocky Helmet",
    imageurl: "https://img.pokemondb.net/sprites/items/rocky-helmet.png",
    category: "Hold items",
    effect:
      "If the holder of this item takes damage, the attacker will also be damaged upon contact.",
  },
  {
    name: "Roller Skates",
    imageurl: "https://img.pokemondb.net/sprites/items/roller-skates.png",
    category: "General items",
    effect:
      "Attaches roller skates to the bottom of your shoes, allowing you to glide quickly around and perform tricks.",
  },
  {
    name: "Room Service",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Lowers the Pok\u00e9mon's speed during Trick Room.",
  },
  {
    name: "Root Fossil",
    imageurl: "https://img.pokemondb.net/sprites/items/root-fossil.png",
    category: "General items",
    effect:
      "A fossil of an ancient Pok\u00e9mon that lived in the sea. It appears to be part of a plant root.",
  },
  {
    name: "Rose Incense",
    imageurl: "https://img.pokemondb.net/sprites/items/rose-incense.png",
    category: "Hold items",
    effect:
      "Increases the power of Grass-type moves. Breeding Roselia or Roserade produces Budew when held.",
  },
  {
    name: "Roseli Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/roseli-berry.png",
    category: "Berries",
    effect:
      "If held by a Pok\u00e9mon, this Berry will lessen the damage taken from one supereffective Fairy-type attack.",
  },
  {
    name: "Roto Bargain",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-bargain.png",
    category: "Battle items",
    effect: "Reduces the prices of products at Pok\u00e9 Marts by half.",
  },
  {
    name: "Roto Boost",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-boost.png",
    category: "Battle items",
    effect: "Raises all stats of your battling Pok\u00e9mon.",
  },
  {
    name: "Roto Catch",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-catch.png",
    category: "Battle items",
    effect: "Increases the chance to catch Pok\u00e9mon a lot.",
  },
  {
    name: "Roto Encounter",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-encounter.png",
    category: "Battle items",
    effect:
      "Increases the chance of encountering high-level wild Pok\u00e9mon a lot for a certain period of time.",
  },
  {
    name: "Roto Exp. Points",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-exp-points.png",
    category: "Battle items",
    effect:
      "Increases the Exp. Points your Pok\u00e9mon receive after battle a little.",
  },
  {
    name: "Roto Friendship",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-friendship.png",
    category: "Battle items",
    effect: "Helps Pok\u00e9mon in your party grow friendly faster.",
  },
  {
    name: "Roto Hatch",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-hatch.png",
    category: "Battle items",
    effect: "Helps Eggs hatch faster.",
  },
  {
    name: "Roto HP Restore",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-hp-restore.png",
    category: "Battle items",
    effect: "Fully restores the HP of your battling Pok\u00e9mon.",
  },
  {
    name: "Roto PP Restore",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-pp-restore.png",
    category: "Battle items",
    effect: "Fully restores the PP of your battling Pok\u00e9mon.",
  },
  {
    name: "Roto Prize Money",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-prize-money.png",
    category: "Battle items",
    effect: "Triples the prize money you receive after battle.",
  },
  {
    name: "Roto Stealth",
    imageurl: "https://img.pokemondb.net/sprites/items/roto-stealth.png",
    category: "Battle items",
    effect:
      "Prevents you from encountering wild Pok\u00e9mon for a certain period of time.",
  },
  {
    name: "Rowap Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/rowap-berry.png",
    category: "Berries",
    effect:
      "If held by a Pok\u00e9mon and a special attack lands, the attacker also takes damage.",
  },
  {
    name: "Sablenite",
    imageurl: "https://img.pokemondb.net/sprites/items/sablenite.png",
    category: "Hold items",
    effect: "Enables Sableye to Mega Evolve during battle.",
  },
  {
    name: "Sachet",
    imageurl: "https://img.pokemondb.net/sprites/items/sachet.png",
    category: "General items",
    effect: "Evolves Spritzee when traded holding the item.",
  },
  {
    name: "Sacred Ash",
    imageurl: "https://img.pokemondb.net/sprites/items/sacred-ash.png",
    category: "Medicine",
    effect:
      "It revives all fainted Pok\u00e9mon. In doing so, it also fully restores their HP.",
  },
  {
    name: "Safari Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/safari-ball.png",
    category: "Pokeballs",
    effect:
      "A special Pok\u00e9 Ball that is used only in the Great Marsh. It is decorated in a camouflage pattern.",
  },
  {
    name: "Safety Goggles",
    imageurl: "https://img.pokemondb.net/sprites/items/safety-goggles.png",
    category: "Hold items",
    effect: "Prevents damage from weather and powder.",
  },
  {
    name: "Salac Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/salac-berry.png",
    category: "Berries",
    effect: "Raises Speed when HP is low.",
  },
  {
    name: "Salamencite",
    imageurl: "https://img.pokemondb.net/sprites/items/salamencite.png",
    category: "Hold items",
    effect: "Enables Salamence to Mega Evolve during battle.",
  },
  {
    name: "Sassy Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Sassy nature.",
  },
  {
    name: "Sceptilite",
    imageurl: "https://img.pokemondb.net/sprites/items/sceptilite.png",
    category: "Hold items",
    effect: "Enables Sceptile to Mega Evolve during battle.",
  },
  {
    name: "Scizorite",
    imageurl: "https://img.pokemondb.net/sprites/items/scizorite.png",
    category: "Hold items",
    effect: "Enables Scizor to Mega Evolve during battle.",
  },
  {
    name: "Scope Lens",
    imageurl: "https://img.pokemondb.net/sprites/items/scope-lens.png",
    category: "Hold items",
    effect: "Increases critical-hit ratio.",
  },
  {
    name: "Sea Incense",
    imageurl: "https://img.pokemondb.net/sprites/items/sea-incense.png",
    category: "Hold items",
    effect:
      "Increases the power of Water-type moves. Breeding Marill or Azumarill produces Azurill when held.",
  },
  {
    name: "Shalour Sable",
    imageurl: "https://img.pokemondb.net/sprites/items/shalour-sable.png",
    category: "Medicine",
    effect: "Heals all major status conditions.",
  },
  {
    name: "Sharp Beak",
    imageurl: "https://img.pokemondb.net/sprites/items/sharp-beak.png",
    category: "Hold items",
    effect: "Increases the power of Flying-type moves.",
  },
  {
    name: "Sharpedonite",
    imageurl: "https://img.pokemondb.net/sprites/items/sharpedonite.png",
    category: "Hold items",
    effect: "Enables Sharpedo to Mega Evolve during battle.",
  },
  {
    name: "Shed Shell",
    imageurl: "https://img.pokemondb.net/sprites/items/shed-shell.png",
    category: "Hold items",
    effect:
      "A tough, discarded carapace to be held by a Pok\u00e9mon. It enables the holder to switch with a waiting Pok\u00e9mon in battle.",
  },
  {
    name: "Shell Bell",
    imageurl: "https://img.pokemondb.net/sprites/items/shell-bell.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. The holder's HP is restored a little every time it inflicts damage.",
  },
  {
    name: "Shiny Charm",
    imageurl: "https://img.pokemondb.net/sprites/items/shiny-charm.png",
    category: "General items",
    effect:
      "A shiny charm said to increase the chance of finding a Shiny Pok\u00e9mon in the wild.",
  },
  {
    name: "Shiny Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/shiny-stone.png",
    category: "General items",
    effect: "Evolves certain species of Pok\u00e9mon.",
  },
  {
    name: "Shoal Salt",
    imageurl: "https://img.pokemondb.net/sprites/items/shoal-salt.png",
    category: "General items",
    effect:
      "Pure salt that can be discovered deep inside the Shoal Cave. A maniac will buy it for a high price.",
  },
  {
    name: "Shoal Shell",
    imageurl: "https://img.pokemondb.net/sprites/items/shoal-shell.png",
    category: "General items",
    effect:
      "A pretty seashell that can be found deep inside the Shoal Cave. A maniac will buy it for a high price.",
  },
  {
    name: "Shock Drive",
    imageurl: "https://img.pokemondb.net/sprites/items/shock-drive.png",
    category: "Hold items",
    effect:
      "Changes Techno Blast to an Electric-type move when held by Genesect.",
  },
  {
    name: "Shuca Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/shuca-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Ground-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Silk Scarf",
    imageurl: "https://img.pokemondb.net/sprites/items/silk-scarf.png",
    category: "Hold items",
    effect: "Increases the power of Normal-type moves.",
  },
  {
    name: "Silver Leaf",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "",
  },
  {
    name: "Silver Nanab Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/silver-nanab-berry.png",
    category: "Berries",
    effect:
      "Greatly calms a Pok\u00e9mon in battle, in Let's Go Pikachu/Eevee.",
  },
  {
    name: "Silver Pinap Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/silver-pinap-berry.png",
    category: "Berries",
    effect:
      "Greatly increases chance of getting items when a Pok\u00e9mon is caught, in Pok\u00e9mon Let's Go.",
  },
  {
    name: "Silver Powder",
    imageurl: "https://img.pokemondb.net/sprites/items/silver-powder.png",
    category: "Hold items",
    effect: "Increases the power of Bug-type moves.",
  },
  {
    name: "Silver Razz Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/silver-razz-berry.png",
    category: "Berries",
    effect: "Makes a Pok\u00e9mon easier to catch in Pok\u00e9mon Let's Go.",
  },
  {
    name: "Sitrus Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/sitrus-berry.png",
    category: "Berries",
    effect: "If held by a Pok\u00e9mon, it heals the user's HP a little.",
  },
  {
    name: "Skull Fossil",
    imageurl: "https://img.pokemondb.net/sprites/items/skull-fossil.png",
    category: "General items",
    effect:
      "A fossil from a prehistoric Pok\u00e9mon that lived on the land. It appears to be part of a head.",
  },
  {
    name: "Sky Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/sky-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Flying-type moves. Changes Arceus' type to Flying.",
  },
  {
    name: "Slowbronite",
    imageurl: "https://img.pokemondb.net/sprites/items/slowbronite.png",
    category: "Hold items",
    effect: "Enables Slowbro to Mega Evolve during battle.",
  },
  {
    name: "Small Bouquet",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "",
  },
  {
    name: "Smart Candy",
    imageurl: "https://img.pokemondb.net/sprites/items/smart-candy.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Special Attack stat by 1.",
  },
  {
    name: "Smart Candy L",
    imageurl: "https://img.pokemondb.net/sprites/items/smart-candy-l.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Special Attack stat.",
  },
  {
    name: "Smart Candy XL",
    imageurl: "https://img.pokemondb.net/sprites/items/smart-candy-xl.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Special Attack stat.",
  },
  {
    name: "Smoke Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/smoke-ball.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It enables the holder to flee from any wild Pok\u00e9mon without fail.",
  },
  {
    name: "Smooth Rock",
    imageurl: "https://img.pokemondb.net/sprites/items/smooth-rock.png",
    category: "Hold items",
    effect:
      "A Pok\u00e9mon held item that extends the duration of the move Sandstorm used by the holder.",
  },
  {
    name: "Snorlium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/snorlium-z.png",
    category: "Hold items",
    effect:
      "Allows Snorlax to upgrade Giga Impact to a Z-Move, Pulverizing Pancake.",
  },
  {
    name: "Snowball",
    imageurl: "https://img.pokemondb.net/sprites/items/snowball.png",
    category: "Hold items",
    effect: "Raises Attack if hit by an Ice-type move.",
  },
  {
    name: "Soda Pop",
    imageurl: "https://img.pokemondb.net/sprites/items/soda-pop.png",
    category: "Medicine",
    effect: "Restores 50 HP.",
  },
  {
    name: "Soft Sand",
    imageurl: "https://img.pokemondb.net/sprites/items/soft-sand.png",
    category: "Hold items",
    effect: "Increases the power of Ground-type moves.",
  },
  {
    name: "Solganium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/solganium-z.png",
    category: "Hold items",
    effect:
      "Allows Solgaleo to upgrade Sunsteel Strike to a Z-Move, Searing Sunraze Smash.",
  },
  {
    name: "Soothe Bell",
    imageurl: "https://img.pokemondb.net/sprites/items/soothe-bell.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It is a bell with a comforting chime that calms the holder and makes it friendly.",
  },
  {
    name: "Soul Dew",
    imageurl: "https://img.pokemondb.net/sprites/items/soul-dew.png",
    category: "Hold items",
    effect:
      "Increases the power of Psychic- and Dragon-type moves when held by Latios or Latias. Increases Sp.Atk/Sp.Def prior to Gen 7.",
  },
  {
    name: "Spell Tag",
    imageurl: "https://img.pokemondb.net/sprites/items/spell-tag.png",
    category: "Hold items",
    effect: "Increases the power of Ghost-type moves.",
  },
  {
    name: "Spelon Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/spelon-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Splash Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/splash-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Water-type moves. Changes Arceus' type to Water.",
  },
  {
    name: "Spooky Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/spooky-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Ghost-type moves. Changes Arceus' type to Ghost.",
  },
  {
    name: "Sport Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/sport-ball.png",
    category: "Pokeballs",
    effect: "A special Pok\u00e9 Ball for the Bug-Catching Contest.",
  },
  {
    name: "Sprinklotad",
    imageurl: "https://img.pokemondb.net/sprites/items/sprinklotad.png",
    category: "General items",
    effect:
      "A watering can shaped like a Lotad. It helps promote the healthy growth of any Berries planted in good, soft soil.",
  },
  {
    name: "Stable Mulch",
    imageurl: "https://img.pokemondb.net/sprites/items/stable-mulch.png",
    category: "General items",
    effect:
      "A fertilizer to be spread on soft soil in regions where Berries are grown. A maniac will buy it for a high price.",
  },
  {
    name: "Star Piece",
    imageurl: "https://img.pokemondb.net/sprites/items/star-piece.png",
    category: "General items",
    effect:
      "A shard of a pretty gem that sparkles in a red color. It can be sold at a high price to shops.",
  },
  {
    name: "Star Sweet",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Evolves Milcery into Star Flavor Alcremie.",
  },
  {
    name: "Stardust",
    imageurl: "https://img.pokemondb.net/sprites/items/stardust.png",
    category: "General items",
    effect:
      "Lovely, red-colored sand with a loose, silky feel. It can be sold at a high price to shops.",
  },
  {
    name: "Starf Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/starf-berry.png",
    category: "Berries",
    effect: "Sharply raises a random stat when HP is low.",
  },
  {
    name: "Steel Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/steel-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Steel-type move only once.",
  },
  {
    name: "Steel Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/steel-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Steel type.",
  },
  {
    name: "Steelium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/steelium-z.png",
    category: "Hold items",
    effect: "Allows the use of Corkscrew Crash, the Steel type Z-Move.",
  },
  {
    name: "Steelixite",
    imageurl: "https://img.pokemondb.net/sprites/items/steelixite.png",
    category: "Hold items",
    effect: "Enables Steelix to Mega Evolve during battle.",
  },
  {
    name: "Stick",
    imageurl: "https://img.pokemondb.net/sprites/items/stick.png",
    category: "Hold items",
    effect: "Increases critical-hit ratio when held by Farfetch'd.",
  },
  {
    name: "Sticky Barb",
    imageurl: "https://img.pokemondb.net/sprites/items/sticky-barb.png",
    category: "Hold items",
    effect:
      "A held item that damages the holder on every turn. It may latch on to foes and allies that touch the holder.",
  },
  {
    name: "Stone Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/stone-plate.png",
    category: "Hold items",
    effect: "Increases power of Rock-type moves. Changes Arceus' type to Rock.",
  },
  {
    name: "Strange Souvenir",
    imageurl: "https://img.pokemondb.net/sprites/items/strange-souvenir.png",
    category: "General items",
    effect:
      "An ornament depicting a Pok\u00e9mon that is venerated as a protector in some region far from Kalos.",
  },
  {
    name: "Strawberry Sweet",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Evolves Milcery into Strawberry Flavor Alcremie.",
  },
  {
    name: "Stretchy Spring",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "",
  },
  {
    name: "Sun Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/sun-stone.png",
    category: "General items",
    effect: "Evolves certain species of Pok\u00e9mon.",
  },
  {
    name: "Super Lure",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "Attracts Pok\u00e9mon in the wild.",
  },
  {
    name: "Super Potion",
    imageurl: "https://img.pokemondb.net/sprites/items/super-potion.png",
    category: "Medicine",
    effect: "Restores 60 HP.",
  },
  {
    name: "Super Repel",
    imageurl: "https://img.pokemondb.net/sprites/items/super-repel.png",
    category: "General items",
    effect:
      "An item that prevents weak wild Pok\u00e9mon from appearing for 200 steps after its use.",
  },
  {
    name: "Swampertite",
    imageurl: "https://img.pokemondb.net/sprites/items/swampertite.png",
    category: "Hold items",
    effect: "Enables Swampert to Mega Evolve during battle.",
  },
  {
    name: "Sweet Apple",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Evolves Applin into Appletun.",
  },
  {
    name: "Sweet Heart",
    imageurl: "https://img.pokemondb.net/sprites/items/sweet-heart.png",
    category: "Medicine",
    effect:
      "Very sweet chocolate. It restores the HP of one Pok\u00e9mon by only 20 points.",
  },
  {
    name: "Swift Wing",
    imageurl: "https://img.pokemondb.net/sprites/items/swift-wing.png",
    category: "Medicine",
    effect: "Increases Speed EVs by 1.",
  },
  {
    name: "Tamato Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/tamato-berry.png",
    category: "Berries",
    effect: "Increases Friendship but lowers Speed EVs.",
  },
  {
    name: "Tanga Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/tanga-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Bug-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Tapunium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/tapunium-z.png",
    category: "Hold items",
    effect:
      "Allows the Tapus to upgrade Nature's Madness to a Z-Move, Guardian of Alola.",
  },
  {
    name: "Terrain Extender",
    imageurl: "https://img.pokemondb.net/sprites/items/terrain-extender.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It extends the duration of the terrain caused by the holder's move or Ability.",
  },
  {
    name: "Thick Club",
    imageurl: "https://img.pokemondb.net/sprites/items/thick-club.png",
    category: "Hold items",
    effect: "Increases Attack when held by Cubone or Marowak.",
  },
  {
    name: "Throat Spray",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Hold items",
    effect: "Raises Sp. Atk when a sound-based move is used.",
  },
  {
    name: "Thunder Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/thunder-stone.png",
    category: "General items",
    effect: "Evolves certain species of Pok\u00e9mon.",
  },
  {
    name: "Timer Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/timer-ball.png",
    category: "Pokeballs",
    effect:
      "A somewhat different BALL that becomes progressively better the more turns there are in a battle.",
  },
  {
    name: "Timid Mint",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Battle items",
    effect: "Changes the Pok\u00e9mon's stats to match the Timid nature.",
  },
  {
    name: "Tiny Mushroom",
    imageurl: "https://img.pokemondb.net/sprites/items/tiny-mushroom.png",
    category: "General items",
    effect: "A small and rare mushroom. It is sought after by collectors.",
  },
  {
    name: "TM01",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect:
      "Teaches the move Mega Punch/Dynamic Punch/Focus Punch/Hone Claws/Work Up/Headbutt.",
  },
  {
    name: "TM02",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dragon.png",
    category: "Machines",
    effect: "Teaches the move Razor Wind/Headbutt/Dragon Claw/Taunt.",
  },
  {
    name: "TM03",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-psychic.png",
    category: "Machines",
    effect:
      "Teaches the move Swords Dance/Curse/Water Pulse/Psyshock/Helping Hand.",
  },
  {
    name: "TM04",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-psychic.png",
    category: "Machines",
    effect: "Teaches the move Whirlwind/Rollout/Calm Mind/Teleport.",
  },
  {
    name: "TM05",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Mega Kick/Roar/Rest.",
  },
  {
    name: "TM06",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-poison.png",
    category: "Machines",
    effect: "Teaches the move Toxic/Light Screen.",
  },
  {
    name: "TM07",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-ice.png",
    category: "Machines",
    effect: "Teaches the move Horn Drill/Zap Cannon/Hail/Protect.",
  },
  {
    name: "TM08",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fighting.png",
    category: "Machines",
    effect: "Teaches the move Body Slam/Rock Smash/Bulk Up/Substitute.",
  },
  {
    name: "TM09",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-poison.png",
    category: "Machines",
    effect:
      "Teaches the move Take Down/Psych Up/Bullet Seed/Venoshock/Reflect.",
  },
  {
    name: "TM10",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Double-Edge/Hidden Power/Dig.",
  },
  {
    name: "TM100",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Confide.",
  },
  {
    name: "TM11",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fire.png",
    category: "Machines",
    effect: "Teaches the move BubbleBeam/Sunny Day/Will-O-Wisp.",
  },
  {
    name: "TM12",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dark.png",
    category: "Machines",
    effect: "Teaches the move Water Gun/Sweet Scent/Taunt/Facade.",
  },
  {
    name: "TM13",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-ice.png",
    category: "Machines",
    effect: "Teaches the move Snore/Ice Beam/Brick Break.",
  },
  {
    name: "TM14",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-ice.png",
    category: "Machines",
    effect: "Teaches the move Blizzard/Fly.",
  },
  {
    name: "TM15",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Hyper Beam/Seismic Toss.",
  },
  {
    name: "TM16",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-psychic.png",
    category: "Machines",
    effect: "Teaches the move Pay Day/Icy Wind/Light Screen/Thunder Wave.",
  },
  {
    name: "TM17",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Submission/Protect/Dragon Tail.",
  },
  {
    name: "TM18",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-water.png",
    category: "Machines",
    effect: "Teaches the move Counter/Rain Dance/U-turn.",
  },
  {
    name: "TM19",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-flying.png",
    category: "Machines",
    effect:
      "Teaches the move Seismic Toss/Giga Drain/Telekinesis/Roost/Iron Tail.",
  },
  {
    name: "TM20",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Rage/Endure/Safeguard/Dark Pulse.",
  },
  {
    name: "TM21",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Mega Drain/Frustration/Foul Play.",
  },
  {
    name: "TM22",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-grass.png",
    category: "Machines",
    effect: "Teaches the move SolarBeam/Rock Slide.",
  },
  {
    name: "TM23",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-rock.png",
    category: "Machines",
    effect: "Teaches the move Dragon Rage/Iron Tail/Smack Down/Thunder Punch.",
  },
  {
    name: "TM24",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-electric.png",
    category: "Machines",
    effect: "Teaches the move Thunderbolt/DragonBreath/X-Scissor.",
  },
  {
    name: "TM25",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-electric.png",
    category: "Machines",
    effect: "Teaches the move Thunder/Waterfall.",
  },
  {
    name: "TM26",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-ground.png",
    category: "Machines",
    effect: "Teaches the move Earthquake/Poison Jab.",
  },
  {
    name: "TM27",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Fissure/Return/Toxic.",
  },
  {
    name: "TM28",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-bug.png",
    category: "Machines",
    effect: "Teaches the move Dig/Leech Life/Tri Attack.",
  },
  {
    name: "TM29",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-psychic.png",
    category: "Machines",
    effect: "Teaches the move Psychic/Scald.",
  },
  {
    name: "TM30",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-ghost.png",
    category: "Machines",
    effect: "Teaches the move Teleport/Shadow Ball/Bulk Up.",
  },
  {
    name: "TM31",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fighting.png",
    category: "Machines",
    effect: "Teaches the move Mimic/Mud-Slap/Brick Break/Fire Punch.",
  },
  {
    name: "TM32",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Double Team/Dazzling Gleam.",
  },
  {
    name: "TM33",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-psychic.png",
    category: "Machines",
    effect: "Teaches the move Ice Punch/Reflect/Calm Mind.",
  },
  {
    name: "TM34",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-poison.png",
    category: "Machines",
    effect:
      "Teaches the move Bide/Swagger/Shock Wave/Sludge Wave/Dragon Pulse.",
  },
  {
    name: "TM35",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fire.png",
    category: "Machines",
    effect: "Teaches the move Metronome/Sleep Talk/Flamethrower/Ice Punch.",
  },
  {
    name: "TM36",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-poison.png",
    category: "Machines",
    effect: "Teaches the move Selfdestruct/Sludge Bomb/Thunderbolt.",
  },
  {
    name: "TM37",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-rock.png",
    category: "Machines",
    effect: "Teaches the move Egg Bomb/Sandstorm/Flamethrower.",
  },
  {
    name: "TM38",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fire.png",
    category: "Machines",
    effect: "Teaches the move Fire Blast/Thunder.",
  },
  {
    name: "TM39",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-rock.png",
    category: "Machines",
    effect: "Teaches the move Swift/Rock Tomb/Outrage.",
  },
  {
    name: "TM40",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-flying.png",
    category: "Machines",
    effect: "Teaches the move Skull Bash/Defense Curl/Aerial Ace/Psychic.",
  },
  {
    name: "TM41",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dark.png",
    category: "Machines",
    effect: "Teaches the move Softboiled/ThunderPunch/Torment/Earthquake.",
  },
  {
    name: "TM42",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Dream Eater/Facade/Self-Destruct.",
  },
  {
    name: "TM43",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fire.png",
    category: "Machines",
    effect:
      "Teaches the move Sky Attack/Detect/Secret Power/Flame Charge/Shadow Ball.",
  },
  {
    name: "TM44",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-psychic.png",
    category: "Machines",
    effect: "Teaches the move Rest/Play Rough.",
  },
  {
    name: "TM45",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Thunder Wave/Attract/Solar Beam.",
  },
  {
    name: "TM46",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dark.png",
    category: "Machines",
    effect: "Teaches the move Psywave/Thief/Fire Blast.",
  },
  {
    name: "TM47",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fighting.png",
    category: "Machines",
    effect: "Teaches the move Explosion/Steel Wing/Low Sweep/Surf.",
  },
  {
    name: "TM48",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect:
      "Teaches the move Rock Slide/Fire Punch/Skill Swap/Round/Hyper Beam.",
  },
  {
    name: "TM49",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect:
      "Teaches the move Tri Attack/Fury Cutter/Snatch/Echoed Voice/Superpower.",
  },
  {
    name: "TM50",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fire.png",
    category: "Machines",
    effect: "Teaches the move Substitute/Nightmare/Overheat/Roost.",
  },
  {
    name: "TM51",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-steel.png",
    category: "Machines",
    effect: "Teaches the move Roost/Ally Switch/Steel Wing/Blizzard.",
  },
  {
    name: "TM52",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fighting.png",
    category: "Machines",
    effect: "Teaches the move Focus Blast/Sludge Bomb.",
  },
  {
    name: "TM53",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-grass.png",
    category: "Machines",
    effect: "Teaches the move Energy Ball/Mega Drain.",
  },
  {
    name: "TM54",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move False Swipe/Flash Cannon.",
  },
  {
    name: "TM55",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-water.png",
    category: "Machines",
    effect: "Teaches the move Brine/Scald/Ice Beam.",
  },
  {
    name: "TM56",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dark.png",
    category: "Machines",
    effect: "Teaches the move Fling/Stealth Rock.",
  },
  {
    name: "TM57",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-electric.png",
    category: "Machines",
    effect: "Teaches the move Charge Beam/Pay Day.",
  },
  {
    name: "TM58",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-flying.png",
    category: "Machines",
    effect: "Teaches the move Endure/Sky Drop/Drill Run.",
  },
  {
    name: "TM59",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dark.png",
    category: "Machines",
    effect:
      "Teaches the move Dragon Pulse/Incinerate/Brutal Swing/Dream Eater.",
  },
  {
    name: "TM60",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dark.png",
    category: "Machines",
    effect: "Teaches the move Drain Punch/Quash/Megahorn.",
  },
  {
    name: "TM61",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fire.png",
    category: "Machines",
    effect: "Teaches the move Will-O-Wisp.",
  },
  {
    name: "TM62",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-flying.png",
    category: "Machines",
    effect: "Teaches the move Silver Wind/Acrobatics.",
  },
  {
    name: "TM63",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dark.png",
    category: "Machines",
    effect: "Teaches the move Embargo.",
  },
  {
    name: "TM64",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Explosion.",
  },
  {
    name: "TM65",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-ghost.png",
    category: "Machines",
    effect: "Teaches the move Shadow Claw.",
  },
  {
    name: "TM66",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dark.png",
    category: "Machines",
    effect: "Teaches the move Payback.",
  },
  {
    name: "TM67",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-steel.png",
    category: "Machines",
    effect: "Teaches the move Recycle/Retaliate/Smart Strike.",
  },
  {
    name: "TM68",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Giga Impact.",
  },
  {
    name: "TM69",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-rock.png",
    category: "Machines",
    effect: "Teaches the move Rock Polish.",
  },
  {
    name: "TM70",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-ice.png",
    category: "Machines",
    effect: "Teaches the move Flash/Aurora Veil.",
  },
  {
    name: "TM71",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-rock.png",
    category: "Machines",
    effect: "Teaches the move Stone Edge.",
  },
  {
    name: "TM72",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-electric.png",
    category: "Machines",
    effect: "Teaches the move Avalanche/Volt Switch.",
  },
  {
    name: "TM73",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-electric.png",
    category: "Machines",
    effect: "Teaches the move Thunder Wave.",
  },
  {
    name: "TM74",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-steel.png",
    category: "Machines",
    effect: "Teaches the move Gyro Ball.",
  },
  {
    name: "TM75",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Swords Dance.",
  },
  {
    name: "TM76",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-flying.png",
    category: "Machines",
    effect: "Teaches the move Stealth Rock/Struggle Bug/Fly.",
  },
  {
    name: "TM77",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Psych Up.",
  },
  {
    name: "TM78",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-ground.png",
    category: "Machines",
    effect: "Teaches the move Captivate/Bulldoze.",
  },
  {
    name: "TM79",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-ice.png",
    category: "Machines",
    effect: "Teaches the move Dark Pulse/Frost Breath.",
  },
  {
    name: "TM80",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-rock.png",
    category: "Machines",
    effect: "Teaches the move Rock Slide.",
  },
  {
    name: "TM81",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-bug.png",
    category: "Machines",
    effect: "Teaches the move X-Scissor.",
  },
  {
    name: "TM82",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dragon.png",
    category: "Machines",
    effect: "Teaches the move Sleep Talk/Dragon Tail.",
  },
  {
    name: "TM83",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-bug.png",
    category: "Machines",
    effect: "Teaches the move Natural Gift/Work Up/Infestation.",
  },
  {
    name: "TM84",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-poison.png",
    category: "Machines",
    effect: "Teaches the move Poison Jab.",
  },
  {
    name: "TM85",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-psychic.png",
    category: "Machines",
    effect: "Teaches the move Dream Eater.",
  },
  {
    name: "TM86",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-grass.png",
    category: "Machines",
    effect: "Teaches the move Grass Knot.",
  },
  {
    name: "TM87",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Swagger.",
  },
  {
    name: "TM88",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Pluck/Sleep Talk.",
  },
  {
    name: "TM89",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-bug.png",
    category: "Machines",
    effect: "Teaches the move U-turn.",
  },
  {
    name: "TM90",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Substitute.",
  },
  {
    name: "TM91",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-steel.png",
    category: "Machines",
    effect: "Teaches the move Flash Cannon.",
  },
  {
    name: "TM92",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-psychic.png",
    category: "Machines",
    effect: "Teaches the move Trick Room.",
  },
  {
    name: "TM93",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-electric.png",
    category: "Machines",
    effect: "Teaches the move Wild Charge.",
  },
  {
    name: "TM94",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fighting.png",
    category: "Machines",
    effect: "Teaches the move Rock Smash/Surf.",
  },
  {
    name: "TM95",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dark.png",
    category: "Machines",
    effect: "Teaches the move Snarl.",
  },
  {
    name: "TM96",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-normal.png",
    category: "Machines",
    effect: "Teaches the move Nature Power.",
  },
  {
    name: "TM97",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-dark.png",
    category: "Machines",
    effect: "Teaches the move Dark Pulse.",
  },
  {
    name: "TM98",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-water.png",
    category: "Machines",
    effect: "Teaches the move Power-Up Punch/Waterfall.",
  },
  {
    name: "TM99",
    imageurl: "https://img.pokemondb.net/sprites/items/tm-fairy.png",
    category: "Machines",
    effect: "Teaches the move Dazzling Gleam.",
  },
  {
    name: "TMV Pass",
    imageurl: "https://img.pokemondb.net/sprites/items/tmv-pass.png",
    category: "General items",
    effect:
      "A commuter pass that allows the holder to ride the TMV between Lumiose City and Kiloude City at any time.",
  },
  {
    name: "Tough Candy",
    imageurl: "https://img.pokemondb.net/sprites/items/tough-candy.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Defense stat by 1.",
  },
  {
    name: "Tough Candy L",
    imageurl: "https://img.pokemondb.net/sprites/items/tough-candy-l.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Defense stat.",
  },
  {
    name: "Tough Candy XL",
    imageurl: "https://img.pokemondb.net/sprites/items/tough-candy-xl.png",
    category: "Medicine",
    effect: "Increases a Pok\u00e9mon's Defense stat.",
  },
  {
    name: "Toxic Orb",
    imageurl: "https://img.pokemondb.net/sprites/items/toxic-orb.png",
    category: "Hold items",
    effect:
      "An item to be held by a Pok\u00e9mon. It is a bizarre orb that badly poisons the holder in battle.",
  },
  {
    name: "Toxic Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/toxic-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Poison-type moves. Changes Arceus' type to Poison.",
  },
  {
    name: "TR01",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR02",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR03",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR04",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR05",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR06",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR07",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR08",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR09",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR10",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR100",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR11",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR12",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR13",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR14",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR15",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR16",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR17",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR18",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR19",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR20",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR21",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR22",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR23",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR24",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR25",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR26",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR27",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR28",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR29",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR30",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR31",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR32",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR33",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR34",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR35",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR36",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR37",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR38",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR39",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR40",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR41",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR42",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR43",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR44",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR45",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR46",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR47",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR48",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR49",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR50",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR51",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "Teaches the move Dragon Dance.",
  },
  {
    name: "TR52",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR53",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR54",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR55",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR56",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR57",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR58",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR59",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR60",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR61",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR62",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR63",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR64",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR65",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR66",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR67",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR68",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR69",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR70",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR71",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR72",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR73",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR74",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR75",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR76",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR77",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR78",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR79",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR80",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR81",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "Teaches the move Foul Play.",
  },
  {
    name: "TR82",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR83",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR84",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "Teaches the move Scald.",
  },
  {
    name: "TR85",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR86",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR87",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR88",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR89",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR90",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR91",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR92",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR93",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR94",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR95",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR96",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR97",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR98",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "TR99",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "Machines",
    effect: "",
  },
  {
    name: "Tropical Shell",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "",
  },
  {
    name: "Twisted Spoon",
    imageurl: "https://img.pokemondb.net/sprites/items/twisted-spoon.png",
    category: "Hold items",
    effect: "Increases the power of Psychic-type moves.",
  },
  {
    name: "Tyranitarite",
    imageurl: "https://img.pokemondb.net/sprites/items/tyranitarite.png",
    category: "Hold items",
    effect: "Enables Tyranitar to Mega Evolve during battle.",
  },
  {
    name: "Ultra Ball",
    imageurl: "https://img.pokemondb.net/sprites/items/ultra-ball.png",
    category: "Pokeballs",
    effect:
      "An ultra-performance Ball that provides a higher Pok\u00e9mon catch rate than a Great Ball.",
  },
  {
    name: "Ultranecrozium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/ultranecrozium-z.png",
    category: "Hold items",
    effect:
      "Allows Ultra Necrozma to upgrade Photon Geyser to a Z-Move, Light That Burns the Sky.",
  },
  {
    name: "Up-Grade",
    imageurl: "https://img.pokemondb.net/sprites/items/up-grade.png",
    category: "General items",
    effect: "Evolves Porygon when traded holding the item.",
  },
  {
    name: "Venusaurite",
    imageurl: "https://img.pokemondb.net/sprites/items/venusaurite.png",
    category: "Hold items",
    effect: "Enables Venusaur to Mega Evolve during battle.",
  },
  {
    name: "Wacan Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/wacan-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Electric-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Water Gem",
    imageurl: "https://img.pokemondb.net/sprites/items/water-gem.png",
    category: "Hold items",
    effect: "Increases the power of a Water-type move only once.",
  },
  {
    name: "Water Memory",
    imageurl: "https://img.pokemondb.net/sprites/items/water-memory.png",
    category: "Hold items",
    effect: "Changes Silvally and its move Multi-Attack to Water type.",
  },
  {
    name: "Water Stone",
    imageurl: "https://img.pokemondb.net/sprites/items/water-stone.png",
    category: "General items",
    effect: "Evolves certain species of Pok\u00e9mon.",
  },
  {
    name: "Waterium Z",
    imageurl: "https://img.pokemondb.net/sprites/items/waterium-z.png",
    category: "Hold items",
    effect: "Allows the use of Hydro Vortex, the Water type Z-Move.",
  },
  {
    name: "Watmel Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/watmel-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Wave Incense",
    imageurl: "https://img.pokemondb.net/sprites/items/wave-incense.png",
    category: "Hold items",
    effect:
      "Increases the power of Water-type moves. Breeding Mantine produces Mantyke when held.",
  },
  {
    name: "Weakness Policy",
    imageurl: "https://img.pokemondb.net/sprites/items/weakness-policy.png",
    category: "Hold items",
    effect:
      "Sharply raises Attack and Special Attack if hit by a super-effective move.",
  },
  {
    name: "Wepear Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/wepear-berry.png",
    category: "Berries",
    effect:
      "A Berry which is very rare in the Unova region. A maniac will buy it for a high price.",
  },
  {
    name: "Whipped Dream",
    imageurl: "https://img.pokemondb.net/sprites/items/whipped-dream.png",
    category: "General items",
    effect: "Evolves Swirlix when traded holding the item.",
  },
  {
    name: "White Apricorn",
    imageurl: "https://img.pokemondb.net/sprites/items/white-apricorn.png",
    category: "General items",
    effect: "A white Apricorn. It doesn't smell like anything.",
  },
  {
    name: "White Flute",
    imageurl: "https://img.pokemondb.net/sprites/items/white-flute.png",
    category: "General items",
    effect:
      "A toy flute made from white glass. A maniac will buy it for a high price.",
  },
  {
    name: "White Herb",
    imageurl: "https://img.pokemondb.net/sprites/items/white-herb.png",
    category: "Hold items",
    effect:
      "An item to be held by a POK\u00e9MON. It restores any lowered stat in battle. It can be used only once.",
  },
  {
    name: "Wide Lens",
    imageurl: "https://img.pokemondb.net/sprites/items/wide-lens.png",
    category: "Hold items",
    effect: "Increases the accuracy of moves.",
  },
  {
    name: "Wiki Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/wiki-berry.png",
    category: "Berries",
    effect: "Restores HP if it's low, but may cause confusion.",
  },
  {
    name: "Wise Glasses",
    imageurl: "https://img.pokemondb.net/sprites/items/wise-glasses.png",
    category: "Hold items",
    effect: "Increases the power of Special-category moves.",
  },
  {
    name: "Wishing Piece",
    imageurl: "https://img.pokemondb.net/s.png",
    category: "General items",
    effect: "Activates a Pok\u00e9mon Den for a Max Raid Battle.",
  },
  {
    name: "X Accuracy",
    imageurl: "https://img.pokemondb.net/sprites/items/x-accuracy.png",
    category: "Battle items",
    effect: "Raises Accuracy of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Accuracy 2",
    imageurl: "https://img.pokemondb.net/sprites/items/x-accuracy-2.png",
    category: "Battle items",
    effect: "Sharply raises Accuracy of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Accuracy 3",
    imageurl: "https://img.pokemondb.net/sprites/items/x-accuracy-3.png",
    category: "Battle items",
    effect: "Drastically raises Accuracy of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Accuracy 6",
    imageurl: "https://img.pokemondb.net/sprites/items/x-accuracy-6.png",
    category: "Battle items",
    effect: "Immensely raises Accuracy of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Attack",
    imageurl: "https://img.pokemondb.net/sprites/items/x-attack.png",
    category: "Battle items",
    effect: "Raises Attack of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Attack 2",
    imageurl: "https://img.pokemondb.net/sprites/items/x-attack-2.png",
    category: "Battle items",
    effect: "Sharply raises Attack of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Attack 3",
    imageurl: "https://img.pokemondb.net/sprites/items/x-attack-3.png",
    category: "Battle items",
    effect: "Drastically raises Attack of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Attack 6",
    imageurl: "https://img.pokemondb.net/sprites/items/x-attack-6.png",
    category: "Battle items",
    effect: "Immensely raises Attack of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Defense",
    imageurl: "https://img.pokemondb.net/sprites/items/x-defense.png",
    category: "Battle items",
    effect: "Raises Defense of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Defense 2",
    imageurl: "https://img.pokemondb.net/sprites/items/x-defense-2.png",
    category: "Battle items",
    effect: "Sharply raises Defense of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Defense 3",
    imageurl: "https://img.pokemondb.net/sprites/items/x-defense-3.png",
    category: "Battle items",
    effect: "Drastically raises Defense of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Defense 6",
    imageurl: "https://img.pokemondb.net/sprites/items/x-defense-6.png",
    category: "Battle items",
    effect: "Immensely raises Defense of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Sp. Atk",
    imageurl: "https://img.pokemondb.net/sprites/items/x-sp-atk.png",
    category: "Battle items",
    effect: "Raises Special Attack of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Sp. Atk 2",
    imageurl: "https://img.pokemondb.net/sprites/items/x-sp-atk-2.png",
    category: "Battle items",
    effect: "Sharply raises Special Attack of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Sp. Atk 3",
    imageurl: "https://img.pokemondb.net/sprites/items/x-sp-atk-3.png",
    category: "Battle items",
    effect: "Drastically raises Special Attack of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Sp. Atk 6",
    imageurl: "https://img.pokemondb.net/sprites/items/x-sp-atk-6.png",
    category: "Battle items",
    effect: "Immensely raises Special Attack of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Sp. Def",
    imageurl: "https://img.pokemondb.net/sprites/items/x-sp-def.png",
    category: "Battle items",
    effect: "Raises Special Defense of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Sp. Def 2",
    imageurl: "https://img.pokemondb.net/sprites/items/x-sp-def-2.png",
    category: "Battle items",
    effect: "Sharply raises Special Defense of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Sp. Def 3",
    imageurl: "https://img.pokemondb.net/sprites/items/x-sp-def-3.png",
    category: "Battle items",
    effect: "Drastically raises Special Defense of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Sp. Def 6",
    imageurl: "https://img.pokemondb.net/sprites/items/x-sp-def-6.png",
    category: "Battle items",
    effect: "Immensely raises Special Defense of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Speed",
    imageurl: "https://img.pokemondb.net/sprites/items/x-speed.png",
    category: "Battle items",
    effect: "Raises Speed of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Speed 2",
    imageurl: "https://img.pokemondb.net/sprites/items/x-speed-2.png",
    category: "Battle items",
    effect: "Sharply raises Speed of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Speed 3",
    imageurl: "https://img.pokemondb.net/sprites/items/x-speed-3.png",
    category: "Battle items",
    effect: "Drastically raises Speed of a Pok\u00e9mon in battle.",
  },
  {
    name: "X Speed 6",
    imageurl: "https://img.pokemondb.net/sprites/items/x-speed-6.png",
    category: "Battle items",
    effect: "Immensely raises Speed of a Pok\u00e9mon in battle.",
  },
  {
    name: "Yache Berry",
    imageurl: "https://img.pokemondb.net/sprites/items/yache-berry.png",
    category: "Berries",
    effect:
      "Weakens a supereffective Ice-type attack against the holding Pok\u00e9mon.",
  },
  {
    name: "Yellow Apricorn",
    imageurl: "https://img.pokemondb.net/sprites/items/yellow-apricorn.png",
    category: "General items",
    effect: "A yellow Apricorn. It has an invigorating scent.",
  },
  {
    name: "Yellow Flute",
    imageurl: "https://img.pokemondb.net/sprites/items/yellow-flute.png",
    category: "General items",
    effect:
      "A toy flute made from yellow glass. A maniac will buy it for a high price.",
  },
  {
    name: "Yellow Nectar",
    imageurl: "https://img.pokemondb.net/sprites/items/yellow-nectar.png",
    category: "Hold items",
    effect:
      "A flower nectar obtained at Melemele Meadow. It changes the form of certain species of Pok\u00e9mon.",
  },
  {
    name: "Yellow Scarf",
    imageurl: "https://img.pokemondb.net/sprites/items/yellow-scarf.png",
    category: "General items",
    effect: "Raises holder's Tough aspect in a Contest.",
  },
  {
    name: "Yellow Shard",
    imageurl: "https://img.pokemondb.net/sprites/items/yellow-shard.png",
    category: "General items",
    effect:
      "A small yellow shard. It appears to be from some sort of implement made long ago.",
  },
  {
    name: "Zap Plate",
    imageurl: "https://img.pokemondb.net/sprites/items/zap-plate.png",
    category: "Hold items",
    effect:
      "Increases power of Electric-type moves. Changes Arceus' type to Electric.",
  },
  {
    name: "Zinc",
    imageurl: "https://img.pokemondb.net/sprites/items/zinc.png",
    category: "Medicine",
    effect: "Increases Special Defense EVs by 10.",
  },
  {
    name: "Zoom Lens",
    imageurl: "https://img.pokemondb.net/sprites/items/zoom-lens.png",
    category: "Hold items",
    effect: "Raises a move's accuracy if the holder moves after its target.",
  },
];

export default Items;
