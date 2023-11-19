const { program} = require("commander");

class Command {
    constructor() {
        this.program = program;
    }

    register(commands) {
        commands.forEach(command => {
            this.program
                .command(command.command())
                .description(command.description())
                .action(command.action);
        })
    }

    execute() {
        this.program.parse();
    }
}

// export { Command };
module.exports = { Command };