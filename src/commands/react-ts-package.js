const { PackageCommand } = require('../core/commands')

class ReactTsPackageCommand extends PackageCommand {
  command() {
    return `package:react-ts`
  }

  projectUrl() {
    return 'https://api.github.com/repos/agung96tm/yoasu/releases/latest'
  }

  description() {
    return 'React Typescript'
  }
}

module.exports = { ReactTsPackageCommand }
