const { PackageCommand } = require('../core/commands')

class YoasuPackageCommand extends PackageCommand {
  command() {
    return `package:yoasu`
  }

  projectUrl() {
    return 'https://api.github.com/repos/agung96tm/yoasu/releases/latest'
  }

  description() {
    return 'React Typescript'
  }
}

module.exports = { YoasuPackageCommand }
