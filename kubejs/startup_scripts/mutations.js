//В настоящее время в Forestry нет официальной поддержки для модов, добавляющих мутации через API.
//Это означает, что вы не можете напрямую добавлять мутации для пчел из других модов через код. 
//Однако, если бы такая поддержка была, код для добавления мутации мог бы выглядеть примерно так:
/*
ForestryEvents.mutations(mutations => {
   
    mutations.create('lexlav:moodybee', 'forestry:bee_edenic')
        .setResult('lexlav:beeone')   
        .setChance(0.25);                   
});
*/

console.info('Hello, World! (Loaded startup scripts)')