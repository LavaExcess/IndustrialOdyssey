EntityEvents.hurt(event => {
    const { entity, source } = event;
    if (entity.getType() === 'minecraft:player') return;
    if (source.getType() === 'oxygen' || 
        source.getType() === 'hotFloor' || 
        source.getType() === 'drown' ||
        source.getType() === 'acid' || 
        source.getType() === 'heat' || 
        source.getType() === 'cold') {
        event.cancel();
    }
});