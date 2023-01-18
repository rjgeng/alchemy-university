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