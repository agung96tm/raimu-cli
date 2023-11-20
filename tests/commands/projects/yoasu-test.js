const { YoasuCommand } = require('../../../src/commands/projects/yoasu')

test('yoasu success created as instance without error', () => {
  const command = new YoasuCommand()
  expect(command.command()).toBe('project:yoasu')
})
