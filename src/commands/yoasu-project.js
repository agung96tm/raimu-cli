const { ProjectCommand } = require('../core/commands')

class YoasuProjectCommand extends ProjectCommand {
  command() {
    return 'project:yoasu'
  }

  projectUrl() {
    return 'https://api.github.com/repos/agung96tm/yoasu/releases/latest'
  }

  description() {
    return 'Yoasu its template to generated personal website'
  }
}

module.exports = { YoasuProjectCommand }
