const { YoasuCommand } = require('../../src/commands/yoasu-project')

test('yoasu success created as instance without error', () => {
  const command = new YoasuCommand()
  expect(command.command()).toBe('project:yoasu')
})
