const { PackageCommand } = require('../core/commands')

class ReactJsPackageCommand extends PackageCommand {
  command() {
    return `package:react-js`
  }

  projectUrl() {
    return 'https://api.github.com/repos/agung96tm/yoasu/releases/latest'
  }

  description() {
    return 'React Javascript'
  }
}

module.exports = { ReactJsPackageCommand }
