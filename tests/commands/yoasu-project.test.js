const { YoasuProjectCommand } = require('../../src/commands/yoasu-project')

test('yoasu success created as instance without error', () => {
  const command = new YoasuProjectCommand()
  expect(command.command()).toBe('project:yoasu')
})
