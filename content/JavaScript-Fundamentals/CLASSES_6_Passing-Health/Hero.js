class Hero {
    constructor(health) {
        this.health = health;   
    }
    takeDamage(num) {        
        this.health -= num;
    }
}

module.exports = Hero;