const Hero = require('./Hero');

describe('new Hero', () => {
    const hero = new Hero();

    it.todo('[1] should have 50 health');

    it('[1] should have 50 health', () => {
        //assert(hero.health, "Did you a health property to the hero instance? (Hint: use `this`)")
        expect(hero.health).toBe(50);
    });
});