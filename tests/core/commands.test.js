const { Command } = require('../../src/core/commands')
const { PackageCommand } = require('../../src/commands/base') // Adjust the path based on your project structure

class MockCommand extends PackageCommand {
  command() {
    return 'mocking:package'
  }
  description() {
    return ''
  }
}

test('command can register packages', () => {
  const command = new Command()
  command.register([new MockCommand()])

  expect(command.totalCommands).toBe(1)
})
