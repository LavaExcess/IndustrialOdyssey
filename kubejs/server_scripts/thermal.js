//Рамка механизма 
ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:machine_frame' });
    event.shaped(
        'thermal:machine_frame',
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'ad_astra:desh_ingot',             //деш слиток
            B: 'thermal:tin_gear',                // оловянная шестерня
            C: '#forge:glass'                     // любое стекло
        }
    ).id('thermal:machine_frame');
});
/*
ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'thermal:smelter' }, recipe => {
        console.log(recipe.json);
    });
});*/