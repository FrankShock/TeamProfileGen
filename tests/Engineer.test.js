const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates a Engineer object', () => {
    const engineer = new Engineer ('Frank', 62, 'FrankShock','schockeyf@gmail.com')
    expect(engineer.github) .toEqual(expect.any(String));
});
test('gets engineer github value', () => {
    const engineer = new Engineer ('Frank', 62, 'FrankShock','schockeyf@gmail.com')
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
test('gets role of employee', () => {
    const engineer = new Engineer ('Frank', 62, 'FrankShock','schockeyf@gmail.com')
    expect(engineer.getRole()).toEqual("Engineer");
});
