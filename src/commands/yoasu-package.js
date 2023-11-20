const { PackageCommand } = require('../core/commands')

class YoasuPackageCommand extends PackageCommand {
  command() {
    return `package:yoasu`
  }

  description() {
    return 'React Typescript'
  }
}

module.exports = { YoasuPackageCommand }
