const Hero = require('./Hero');

describe('new Hero', () => {
    const hero = new Hero();

    describe('after taking 5 damage', () => {
        beforeEach(() => {
            hero.takeDamage(5);
        });

        it('[1] should have 45 health', () => {
            expect(hero.health).toBe(45);
        });

        it.todo('[2] should have 25 health');

        /*
        describe('after taking 20 more damage', () => {
            before(() => {
                hero.takeDamage(20);
            });

            it('should have 25 health', () => {
                assert.equal(hero.health, 25);
            });
        });
        */
    });
});