const { PackageCommand } = require('../core/commands')

class ReactTsPackageCommand extends PackageCommand {
    command() {
        return `package:react-ts`
    }

    description() {
        return 'React Typescript'
    }
}

module.exports = { ReactTsPackageCommand }
