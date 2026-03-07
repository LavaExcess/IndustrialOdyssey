ServerEvents.recipes(event => {
    //Обшивка корпуса T1
    event.remove({ id: 'industrialupgrade:industrialupgrade_757' });
    event.shaped(
        'industrialupgrade:crafting_elements/crafting_137_element',
        [
            'SW ',
            'WS ',
            '   '
        ],
        {
            S: 'ad_astra:desh_plate',                                     // дешёвая пластина
            W: 'industrialupgrade:crafting_elements/crafting_501_element' // пластина обработанной титановой стали
        }
    ).id('industrialupgrade:industrialupgrade_757');
    //Улучшенная обшивка корпуса T2
    event.remove({ id: 'industrialupgrade:industrialupgrade_759' });
    event.shaped(
        'industrialupgrade:crafting_elements/crafting_138_element',
        [
            'CA ',
            'BD ',
            '   '
        ],
        {
            A: 'industrialupgrade:plastic_plate',                          // пластиковая пластина
            B: 'thermal:electrum_plate',                                   // электромовая пластина
            C: 'industrialupgrade:crafting_elements/crafting_137_element', // обычная обшивка
            D: 'ad_astra:ostrum_plate'                                     // острумова пластина
        }
    ).id('industrialupgrade:industrialupgrade_759');
    //Продвинутая обшивка корпуса T3
    event.remove({ id: 'industrialupgrade:industrialupgrade_760' });
    event.shaped(
        'industrialupgrade:crafting_elements/crafting_139_element',
        [
            'AB ',
            'CD ',
            '   '
        ],
        {
            A: 'industrialupgrade:crafting_elements/crafting_138_element', // улучшенная обшивка
            B: 'industrialupgrade:crafting_elements/crafting_479_element', // утверждённый пластик
            C: 'thermal:signalum_plate',                                   // Сигналовая пластина
            D: 'ad_astra:calorite_plate'                                   // калоритовая пластина
        }
    ).id('industrialupgrade:industrialupgrade_760');
    //Совершенная обшивка корпуса T4
    event.remove({ id: 'industrialupgrade:industrialupgrade_761' });
    event.shaped(
        'industrialupgrade:crafting_elements/crafting_140_element',
        [
            'AB ',
            'CD ',
            '   '
        ],
        {
            A: 'industrialupgrade:crafting_elements/crafting_139_element', // продвинутая обшивка корпуса T3
            B: 'industrialupgrade:alloyplate/woods',                       // пластина сплава Вуда
            C: 'industrialupgrade:itemplates/draconid',                    // драконидовая плата
            D: 'thermal:lumium_plate'                                      // люмиевая пластина
        }
    ).id('industrialupgrade:industrialupgrade_761');
    //Фотонная обшивка корпуса T5
    event.remove({ id: 'industrialupgrade:industrialupgrade_1032' });
    event.shaped(
        'industrialupgrade:crafting_elements/crafting_623_element',
        [
            'AE ',
            'CD ',
            'B  '
        ],
        {
            A: 'industrialupgrade:crafting_elements/crafting_140_element', // совершенная обшивка T4
            B: 'thermal:enderium_plate',                                   //эндериумовая пластина
            C: 'industrialupgrade:alloyplate/superalloy_rene',             // пластина суперсплава Рене
            D: 'industrialupgrade:alloyplate/nimonic',                     // пластина нимонового сплава
            E: Ingredient.of([                                             // любой из трёх слитков драконьей стали
                'iceandfire:dragonsteel_lightning_ingot',
                'iceandfire:dragonsteel_ice_ingot',
                'iceandfire:dragonsteel_fire_ingot'
            ])
        }
    ).id('industrialupgrade:industrialupgrade_1032');
});
