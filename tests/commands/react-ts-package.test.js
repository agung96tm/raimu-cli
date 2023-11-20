const { ReactTsPackageCommand } = require('../../src/commands/react-ts-package')

test('react-ts success created as instance without error', () => {
    const command = new ReactTsPackageCommand()
    expect(command.command()).toBe('package:react-ts');
})
