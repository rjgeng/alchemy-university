const removeSecret = require('./removeSecret.js');

describe('removeSecret', () => {
    it('[1] should remove the secret', () => {
        const person = {
            name: "Alice",
            secret: "afraid of the dark"
        }

        removeSecret(person);

        expect(person.name).toBe("Alice");
        expect(person.secret).toBe(undefined);
    });
});

