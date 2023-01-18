class Hero {
    constructor() {
        this.health = 50;   
    }
    takeDamage(num) {
        this.health -= num;
    }
}

module.exports = Hero;