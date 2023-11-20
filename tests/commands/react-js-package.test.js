const { ReactJsPackageCommand } = require('../../src/commands/react-js-package')

test('react-js success created as instance without error', () => {
    const command = new ReactJsPackageCommand()
    expect(command.command()).toBe('package:react-js');
})
