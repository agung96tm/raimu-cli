const { PackageCommand } = require('./base')

class YoasuPackageCommand extends PackageCommand {
  constructor() {
    super()
  }

  command() {
    return 'package:yoasu'
  }

  description() {
    return 'React Typescript'
  }
}

module.exports = { YoasuPackageCommand }
