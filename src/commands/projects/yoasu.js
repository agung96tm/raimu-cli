const { ProjectCommand } = require('../base')

class YoasuCommand extends ProjectCommand {
  constructor() {
    super()
  }

  command() {
    return 'project:yoasu'
  }

  description() {
    return 'Yoasu its template to generated personal website'
  }
}

module.exports = { YoasuCommand }
