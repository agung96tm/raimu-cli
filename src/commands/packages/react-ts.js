const { PackageCommand } = require('../base')

class ReactTsCommand extends PackageCommand {
  constructor() {
    super()
  }

  command() {
    return 'package:react-ts'
  }

  description() {
    return 'React Typescript'
  }
}

module.exports = { ReactTsCommand }
