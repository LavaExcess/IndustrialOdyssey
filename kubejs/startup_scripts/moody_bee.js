//Соты
StartupEvents.registry('item', event => {
    event.create('lexlav:lunar_comb')
        .displayName('Лунная сота')
        .texture('kubejs:item/forestry/bee_comb_lunar')
        .maxStackSize(64);
    event.create('lexlav:martian_comb')
        .displayName('Марсианская сота')
        .texture('kubejs:item/forestry/bee_comb_martian')
        .maxStackSize(64);
    event.create('lexlav:venusian_comb')
        .displayName('Венерианская сота')
        .texture('kubejs:item/forestry/bee_comb_venusian')
        .maxStackSize(64);
    event.create('lexlav:dragon_comb')
        .displayName('Дракониевая сота')
        .texture('kubejs:item/forestry/bee_comb_end')
        .maxStackSize(64);
    event.create('lexlav:desh_comb')
        .displayName('Таинственная сота')
        .texture('kubejs:item/forestry/bee_comb7')
        .maxStackSize(64);
});



//Пчела
// Лунная пчела (даёт сырой деш и самородки)
ForestryEvents.apiculture(apiculture => {
    apiculture.registerSpecies('lexlav:lunar_bee', 'diapis', 'lunaris', true, Color.of('#C0C0C0'))
        .addProduct('lexlav:lunar_comb', 0.20)                  // сота
        .addSpecialty('ad_astra:raw_desh', 0.15)                // сырой деш
        .addSpecialty('ad_astra:desh_nugget', 1)                // самородок деша
        .setGenome(genome => {
            genome.set(BeeChromosomes.SPEED, ForestryAlleles.SPEED_NORMAL); // скорость работы нормальная
            genome.set(BeeChromosomes.LIFESPAN, ForestryAlleles.LIFESPAN_IMMORTAL); // бессмертная
            genome.set(BeeChromosomes.FERTILITY, ForestryAlleles.FERTILITY_0); // количество трутней 0
            genome.set(BeeChromosomes.TEMPERATURE_TOLERANCE, ForestryAlleles.TOLERANCE_BOTH_2);   // терпимость  к температуре ±5
            genome.set(BeeChromosomes.HUMIDITY_TOLERANCE, ForestryAlleles.TOLERANCE_BOTH_2); // терпимость к влажности ±5
            genome.set(BeeChromosomes.ACTIVITY, ForestryAlleles.ACTIVITY_METATURNAL);   // и днём, и ночью
            genome.set(BeeChromosomes.CAVE_DWELLING, ForestryAlleles.TRUE); // может работать без неба
            genome.set(BeeChromosomes.TOLERATES_RAIN, ForestryAlleles.TRUE); // может работать под дождем
            genome.set(BeeChromosomes.FLOWER_TYPE, ForestryAlleles.FLOWER_TYPE_END);   // эндер-цветы
            genome.set(BeeChromosomes.EFFECT, ForestryAlleles.EFFECT_MISANTHROPE);   //ненавидит всех
            genome.set(BeeChromosomes.POLLINATION, ForestryAlleles.POLLINATION_SLOWEST);//Скорость опыления   самый минимум
            genome.set(BeeChromosomes.TERRITORY, ForestryAlleles.TERRITORY_AVERAGE); //размер территории 9x6x9
        })
        .setBody(Color.of('#C0C0C0'))
        .setStripes(Color.of('#FFFFFF'))
        .setTemperature('NORMAL')
        .setHumidity('NORMAL')
        .setGlint(true)
        .setAuthority('LavaExcess');
});

// Марсианская пчела (даёт сырой острум и самородки)
ForestryEvents.apiculture(apiculture => {
    apiculture.registerSpecies('lexlav:martian_bee', 'diapis', 'martis', true, Color.of('#B22222'))
        .addProduct('lexlav:martian_comb', 0.20)
        .addSpecialty('ad_astra:raw_ostrum', 0.15)
        .addSpecialty('ad_astra:ostrum_nugget', 1)
        .setGenome(genome => {
            genome.set(BeeChromosomes.SPEED, ForestryAlleles.SPEED_NORMAL); // скорость работы нормальная
            genome.set(BeeChromosomes.LIFESPAN, ForestryAlleles.LIFESPAN_IMMORTAL); // бессмертная
            genome.set(BeeChromosomes.FERTILITY, ForestryAlleles.FERTILITY_0); // количество трутней 0
            genome.set(BeeChromosomes.TEMPERATURE_TOLERANCE, ForestryAlleles.TOLERANCE_BOTH_2);   // терпимость  к температуре ±5
            genome.set(BeeChromosomes.HUMIDITY_TOLERANCE, ForestryAlleles.TOLERANCE_BOTH_2); // терпимость к влажности ±5
            genome.set(BeeChromosomes.ACTIVITY, ForestryAlleles.ACTIVITY_METATURNAL);   // и днём, и ночью
            genome.set(BeeChromosomes.CAVE_DWELLING, ForestryAlleles.TRUE); // может работать без неба
            genome.set(BeeChromosomes.TOLERATES_RAIN, ForestryAlleles.TRUE); // может работать под дождем
            genome.set(BeeChromosomes.FLOWER_TYPE, ForestryAlleles.FLOWER_TYPE_END);   // эндер-цветы
            genome.set(BeeChromosomes.EFFECT, ForestryAlleles.EFFECT_MISANTHROPE);   //ненавидит всех
            genome.set(BeeChromosomes.POLLINATION, ForestryAlleles.POLLINATION_SLOWEST);//Скорость опыления
            genome.set(BeeChromosomes.TERRITORY, ForestryAlleles.TERRITORY_AVERAGE); //размер территории 9x6x9
        })
        .setBody(Color.of('#B22222'))
        .setStripes(Color.of('#FF8C00'))
        .setTemperature('NORMAL')
        .setHumidity('NORMAL')
        .setGlint(true)
        .setAuthority('LavaExcess');
});

// Венерианская пчела (даёт сырой калорит и самородки)
ForestryEvents.apiculture(apiculture => {
    apiculture.registerSpecies('lexlav:venusian_bee', 'diapis', 'veneris', true, Color.of('#FFD700'))
        .addProduct('lexlav:venusian_comb', 0.20)
        .addSpecialty('ad_astra:raw_calorite', 0.15)
        .addSpecialty('ad_astra:calorite_nugget', 1)
        .setGenome(genome => {
            genome.set(BeeChromosomes.SPEED, ForestryAlleles.SPEED_NORMAL); // скорость работы нормальная
            genome.set(BeeChromosomes.LIFESPAN, ForestryAlleles.LIFESPAN_IMMORTAL); // бессмертная
            genome.set(BeeChromosomes.FERTILITY, ForestryAlleles.FERTILITY_0); // количество трутней 0
            genome.set(BeeChromosomes.TEMPERATURE_TOLERANCE, ForestryAlleles.TOLERANCE_BOTH_2);   // терпимость  к температуре ±5
            genome.set(BeeChromosomes.HUMIDITY_TOLERANCE, ForestryAlleles.TOLERANCE_BOTH_2); // терпимость к влажности ±5
            genome.set(BeeChromosomes.ACTIVITY, ForestryAlleles.ACTIVITY_METATURNAL);   // и днём, и ночью
            genome.set(BeeChromosomes.CAVE_DWELLING, ForestryAlleles.TRUE); // может работать без неба
            genome.set(BeeChromosomes.TOLERATES_RAIN, ForestryAlleles.TRUE); // может работать под дождем
            genome.set(BeeChromosomes.FLOWER_TYPE, ForestryAlleles.FLOWER_TYPE_END);   // эндер-цветы
            genome.set(BeeChromosomes.EFFECT, ForestryAlleles.EFFECT_MISANTHROPE);   //ненавидит всех
            genome.set(BeeChromosomes.POLLINATION, ForestryAlleles.POLLINATION_SLOWEST);//Скорость опыления
            genome.set(BeeChromosomes.TERRITORY, ForestryAlleles.TERRITORY_AVERAGE); //размер территории 9x6x9
        })
        .setBody(Color.of('#FFD700'))
        .setStripes(Color.of('#FFA500'))
        .setTemperature('NORMAL')
        .setHumidity('NORMAL')
        .setGlint(true)
        .setAuthority('LavaExcess');
});


//Дракониевая пчела
ForestryEvents.apiculture(apiculture => {
    apiculture.registerSpecies('lexlav:dragonbee', 'diapis', 'stellaris', true, Color.of('#1d1ab8'))
        .addProduct('lexlav:dragon_comb', 0.04)                  //  на соту
        .addSpecialty('iceandfire:fire_dragon_blood', 0.12)      //  на огненную кровь
        .addSpecialty('iceandfire:ice_dragon_blood', 0.12)       //  на ледяную кровь
        .addSpecialty('iceandfire:lightning_dragon_blood', 0.12) //  на грозовую кровь
        .setGenome(genome => {
            genome.set(BeeChromosomes.SPEED, ForestryAlleles.SPEED_NORMAL); // скорость работы нормальная
            genome.set(BeeChromosomes.LIFESPAN, ForestryAlleles.LIFESPAN_IMMORTAL); // бессмертная
            genome.set(BeeChromosomes.FERTILITY, ForestryAlleles.FERTILITY_0); // количество трутней 0
            genome.set(BeeChromosomes.TEMPERATURE_TOLERANCE, ForestryAlleles.TOLERANCE_BOTH_2);   // терпимость  к температуре ±5
            genome.set(BeeChromosomes.HUMIDITY_TOLERANCE, ForestryAlleles.TOLERANCE_BOTH_2); // терпимость к влажности ±5
            genome.set(BeeChromosomes.ACTIVITY, ForestryAlleles.ACTIVITY_METATURNAL);   // и днём, и ночью
            genome.set(BeeChromosomes.CAVE_DWELLING, ForestryAlleles.TRUE); // может работать без неба
            genome.set(BeeChromosomes.TOLERATES_RAIN, ForestryAlleles.TRUE); // может работать под дождем
            genome.set(BeeChromosomes.FLOWER_TYPE, ForestryAlleles.FLOWER_TYPE_END);   // эндер-цветы
            genome.set(BeeChromosomes.EFFECT, ForestryAlleles.EFFECT_ASCENSION); //Левитация
            genome.set(BeeChromosomes.POLLINATION, ForestryAlleles.POLLINATION_SLOWEST);//Скорость опыления
            genome.set(BeeChromosomes.TERRITORY, ForestryAlleles.TERRITORY_AVERAGE); //размер территории 9x6x9
        })
        .setBody(Color.of('#3784a8'))
        .setStripes(Color.of('#8438ff'))
        .setTemperature('NORMAL')
        .setHumidity('NORMAL')
        .setGlint(true)
        .setAuthority('LavaExcess');
});


//Капризная пчела
ForestryEvents.apiculture(apiculture => {
    apiculture.registerSpecies('lexlav:moodybee', 'diapis', 'evil', true, Color.of('#9cbd66'))
        .addProduct('lexlav:desh_comb', 0.30)
        .addProduct(Items.HONEYCOMB, 0.50)
        .setGenome(genome => {
            genome.set(BeeChromosomes.SPEED, ForestryAlleles.SPEED_NORMAL); // скорость работы нормальная
            genome.set(BeeChromosomes.LIFESPAN, ForestryAlleles.LIFESPAN_IMMORTAL); // бессмертная
            genome.set(BeeChromosomes.FERTILITY, ForestryAlleles.FERTILITY_0); // количество трутней 0
            genome.set(BeeChromosomes.TEMPERATURE_TOLERANCE, ForestryAlleles.TOLERANCE_BOTH_2);   // терпимость  к температуре ±5
            genome.set(BeeChromosomes.HUMIDITY_TOLERANCE, ForestryAlleles.TOLERANCE_BOTH_2); // терпимость к влажности ±5
            genome.set(BeeChromosomes.ACTIVITY, ForestryAlleles.ACTIVITY_METATURNAL);   // и днём, и ночью
            genome.set(BeeChromosomes.CAVE_DWELLING, ForestryAlleles.TRUE); // может работать без неба
            genome.set(BeeChromosomes.TOLERATES_RAIN, ForestryAlleles.TRUE); // может работать под дождем
            genome.set(BeeChromosomes.FLOWER_TYPE, ForestryAlleles.FLOWER_TYPE_END);   // эндер-цветы
            genome.set(BeeChromosomes.EFFECT, ForestryAlleles.EFFECT_MISANTHROPE);   //ненавидит всех
            genome.set(BeeChromosomes.POLLINATION, ForestryAlleles.POLLINATION_SLOWEST);//Скорость опыления
            genome.set(BeeChromosomes.TERRITORY, ForestryAlleles.TERRITORY_AVERAGE); //размер территории 9x6x9
        })
        .setBody(Color.of('#ca70c3'))
        .setStripes(Color.of('#5a075a'))
        .setTemperature('NORMAL')         // предпочитает 'NORMAL'
        .setHumidity('NORMAL')            // предпочитает 'NORMAL'
        .setGlint(false)
        .setAuthority('LavaExcess');
});