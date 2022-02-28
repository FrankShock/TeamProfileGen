const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager( 'Frank', 62, 001 );
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
test('creates an Manager object', () => {
    const manager = new Manager( 'Frank', 62, 001 );
    expect(manager.getRole()).toEqual("Manager");
}); 