const Hero = require('./Hero');

class Warrior extends Hero {
    constructor(health) {
        super();
        this.health = health;
        this.rage = 0;       
    }
    takeDamage(num) {  
        super.takeDamage(num);      
        this.rage++;
    }

}

module.exports = Warrior;