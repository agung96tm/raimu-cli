const { ReactTsCommand } = require('../../../src/commands/packages/react-ts')

test('react-ts success created as instance without error', () => {
  const command = new ReactTsCommand()
  expect(command.command()).toBe('package:react-ts')
})
