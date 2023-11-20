const { Command } = require('./core/commands')
const { allCommands } = require('./commands')

const command = new Command(process)
command.register(allCommands)

command.execute()
