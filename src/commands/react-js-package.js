const { PackageCommand } = require('../core/commands')

class ReactJsPackageCommand extends PackageCommand {
    command() {
        return `package:react`
    }

    description() {
        return 'React Javascript'
    }
}

module.exports = { ReactJsPackageCommand }
