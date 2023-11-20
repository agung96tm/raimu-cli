const { program } = require('commander')

class Command {
  constructor() {
    this.program = program
    this.totalCommands = 0
  }

  register(commands) {
    commands.forEach((command) => {
      this.totalCommands += 1
      this.program.command(command.command()).description(command.description()).action(command.action)
    })
  }

  execute() {
    this.program.parse()
  }
}

module.exports = { Command }
