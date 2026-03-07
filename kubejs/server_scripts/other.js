ServerEvents.recipes(event => {
      //Драконья еда
    event.remove({ id: 'iceandfire:dragon_meal' });
    event.shaped(
        'iceandfire:dragon_meal',
        [
            'BAB',
            'ACA',
            'BAB'
        ],
        {
            A: '#iceandfire:dragon_food_meat',       
            B: '#forge:bones',           
            C: 'aquamirae:poseidons_breakfast'
        }
    ).id('iceandfire:dragon_meal');
});