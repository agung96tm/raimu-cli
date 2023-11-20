const { Command } = require('./core/commands')
const { allCommands } = require('./commands')

const command = new Command()
command.register(allCommands)

command.execute()
