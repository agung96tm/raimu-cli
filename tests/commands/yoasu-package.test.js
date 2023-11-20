const { YoasuPackageCommand } = require('../../src/commands/yoasu-package')

test('react-ts success created as instance without error', () => {
  const command = new YoasuPackageCommand()
  expect(command.command()).toBe('package:yoasu')
})
