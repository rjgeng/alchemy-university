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
});