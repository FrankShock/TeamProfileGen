const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const Intern = new Intern ('Frank', 62, 'schockeyf@gmail.com','UAFS');
    expect(intern.school) .toEqual(expect.any(String));
});
test('creates an Intern school', () => {
    const Intern = new Intern ('Frank', 62, 'schockeyf@gmail.com','UAFS');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test('creates an Intern role', () => {
    const Intern = new Intern ('Frank', 62, 'schockeyf@gmail.com','UAFS');
    expect(intern.getRole()).toEqual("Intern");
}); 

