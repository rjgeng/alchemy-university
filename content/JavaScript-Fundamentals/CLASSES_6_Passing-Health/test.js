const Warrior = require('./Warrior');
const Hero = require('./Hero');

describe('new Warrior', () => {
    const health = 25;
    const warrior = new Warrior(health);

    it(`[1] should have ${health} health`, () => {
        expect(warrior.health).toBe(health);
    });

    it('[2] should be a hero', () => {
        expect(warrior instanceof Hero);
    });
});

describe('new Hero', () => {
    const health = 10;
    const hero = new Hero(health);

    it(`[3] should have ${health} health`, () => {
        expect(hero.health).toBe(health);
    });
});