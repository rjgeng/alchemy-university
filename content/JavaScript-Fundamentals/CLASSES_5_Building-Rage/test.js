const Warrior = require('./Warrior');
const Hero = require('./Hero');

describe('new Warrior', () => {
    const warrior = new Warrior();
    
    it('[1] should have 50 health', () => {
        expect(warrior.health).toBe(50);
    });

    it('[2] should be a hero', () => {
        expect(warrior instanceof Hero);
    });

    it('[3] should have 0 rage', () => {
        expect(warrior.rage).toBe(0);
    });

    /*
    describe('after taking 5 damage', () => {
        before(() => {
            warrior.takeDamage(5);
        });

        it('should have 45 health', () => {
            assert.equal(warrior.health, 45);
        });

        it('should have 1 rage', () => {
            assert.equal(warrior.rage, 1);
        });

        describe('after taking 15 more damage', () => {
            before(() => {
                warrior.takeDamage(15);
            });

            it('should have 30 health', () => {
                assert.equal(warrior.health, 30);
            });

            it('should have 2 rage', () => {
                assert.equal(warrior.rage, 2);
            });
        });
    });
    */
});

describe('new Hero', () => {
    const hero = new Hero();

    it('[4] should have 50 health', () => {
        expect(hero.health).toBe(50);
    });

    it('[5] should not have rage', () => {
        expect(hero.rage).toBe(undefined);
    });
});