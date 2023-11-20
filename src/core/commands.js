const { program } = require('commander')

class Command {
  constructor(process) {
    this.program = program
    this.process = process
    this.totalCommands = 0
  }

  register(commands) {
    commands.forEach((command) => {
      command.addProcess(this.process)
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
