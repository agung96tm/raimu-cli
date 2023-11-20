const { program } = require('commander')

class Command {
  constructor() {
    this.program = program
    this.totalCommands = 0
  }

  register(commands) {
    commands.forEach((command) => {
      const cmd = this.program
        .command(command.command())
        .description(command.description())
        .action((...args) => command.action(args))

      const args = command.arguments()
      if (args.length > 0) {
        args.forEach((arg) => {
          cmd.argument(arg.argument, arg.description)
        })
      }

      this.totalCommands += 1
    })
  }

  execute() {
    this.program.parse()
  }
}

module.exports = { Command }
