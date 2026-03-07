// Эргономическая доменная печь 
ServerEvents.recipes(event => {
    event.remove({ output: 'ad_astra:etrionic_blast_furnace' });
    event.shaped(
        'ad_astra:etrionic_blast_furnace',
        [
            'CCC',
            'BAB',
            'CCC'
        ],
        {
            A: 'minecraft:blast_furnace',     //плавильная ванильная печка
            B: 'minecraft:redstone',          // красная пыль
            C: 'ad_astra:desh_plate',         // пластина деша
        }
    ).id('ad_astra:etrionic_blast_furnace');
    //Ракетный стабилизатор
    event.remove({ output: 'ad_astra:rocket_fin' });
    event.shaped(
        'ad_astra:rocket_fin',
        [
            ' D ',
            'DDD',
            'DED'
        ],
        {
            D: 'thermal:steel_plate',                                      // стальная пластина
            E: 'industrialupgrade:crafting_elements/crafting_743_element' // пусковой стабилизатор
        }
    ).id('ad_astra:rocket_fin');
    //Обтекатель
    event.remove({ id: 'ad_astra:rocket_nose_cone' });

    event.shaped(
        'ad_astra:rocket_nose_cone',
        [
            ' A ',
            ' B ',
            'BCB'
        ],
        {
            A: 'minecraft:lightning_rod',                                 // громоотвод
            B: 'thermal:steel_plate',                                     // стальная пластина
            C: 'industrialupgrade:crafting_elements/crafting_272_element' // электросхема
        }
    ).id('ad_astra:rocket_nose_cone');
    //Ракета Т1
    //Стальной двигатель
    event.remove({ output: 'ad_astra:steel_engine' });
    event.shaped(
        'ad_astra:steel_engine',
        [
            'DDD',
            'DAD',
            'CBC'
        ],
        {
            A: 'industrialupgrade:crafting_elements/crafting_276_element', // электромотор
            B: 'ad_astra:fan',                                             // вентилятор
            C: 'ad_astra:engine_frame',                                    // рама двигателя
            D: 'thermal:steel_plate'                                       // стальная пластина
        }
    ).id('ad_astra:steel_engine');
    //Ракета Т2
    //деш двигатель
    event.remove({ output: 'ad_astra:desh_engine' });
    event.shaped(
        'ad_astra:desh_engine',
        [
            'CCC',
            'BDB',
            'CAC'
        ],
        {
            A: 'industrialupgrade:crafting_elements/crafting_763_element', // Улучш двиг
            B: 'industrialupgrade:crafting_elements/crafting_761_element', // Улучш ион протектор
            C: 'ad_astra:desh_plate',                                 // обычная Плата
            D: 'industrialupgrade:crafting_elements/crafting_765_element', // Управляющий ПК
        }
    ).id('ad_astra:desh_engine');
    //Деш бак
    event.remove({ output: 'ad_astra:desh_tank' });
    event.shaped(
        'ad_astra:desh_tank',
        [
            'CCC',
            'CAC',
            'CBC'
        ],
        {
            A: 'industrialupgrade:crafting_elements/crafting_758_element', // Стаб палёта
            B: 'industrialupgrade:crafting_elements/crafting_764_element', // Улучш бак
            C: 'ad_astra:desh_plate',                                 // обычная Плата
        }
    ).id('ad_astra:desh_tank');
    //Ракета Т3
    //Острум двигатель
    event.remove({ output: 'ad_astra:ostrum_engine' });
    event.shaped(
        'ad_astra:ostrum_engine',
        [
            'CCC',
            'BDB',
            'CAC'
        ],
        {
            A: 'industrialupgrade:crafting_elements/crafting_751_element', // Прод двиг
            B: 'industrialupgrade:crafting_elements/crafting_748_element', // Прод ион протектор
            C: 'ad_astra:ostrum_plate',
            D: 'industrialupgrade:crafting_elements/crafting_765_element', // Управляющий ПК
        }
    ).id('ad_astra:ostrum_engine');
    //Острум  бак
    event.remove({ output: 'ad_astra:ostrum_tank' });
    event.shaped(
        'ad_astra:ostrum_tank',
        [
            'CCC',
            'CAC',
            'CBC'
        ],
        {
            A: 'industrialupgrade:crafting_elements/crafting_758_element', // Стаб палёта
            B: 'industrialupgrade:crafting_elements/crafting_750_element', // Улучш бак
            C: 'ad_astra:ostrum_plate',
        }
    ).id('ad_astra:ostrum_tank');
    //Ракета Т4
    //Острум двигатель
    event.remove({ output: 'ad_astra:calorite_engine' });
    event.shaped(
        'ad_astra:calorite_engine',
        [
            'CCC',
            'BDB',
            'CAC'
        ],
        {
            A: 'industrialupgrade:crafting_elements/crafting_757_element', // Соверш двиг
            B: 'industrialupgrade:crafting_elements/crafting_754_element', // Соверш ион протектор
            C: 'ad_astra:calorite_plate',
            D: 'industrialupgrade:crafting_elements/crafting_765_element', // Управляющий ПК
        }
    ).id('ad_astra:calorite_engine');
    //Острум  бак
    event.remove({ output: 'ad_astra:calorite_tank' });
    event.shaped(
        'ad_astra:calorite_tank',
        [
            'CCC',
            'CAC',
            'CBC'
        ],
        {
            A: 'industrialupgrade:crafting_elements/crafting_758_element', // Стаб палёта
            B: 'industrialupgrade:crafting_elements/crafting_756_element', // Сов бак
            C: 'ad_astra:calorite_plate',
        }
    ).id('ad_astra:calorite_tank');
});
