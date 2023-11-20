const { YoasuPackageCommand } = require('./yoasu-package')
const { YoasuProjectCommand } = require('./yoasu-project')

const allCommands = [new YoasuPackageCommand(), new YoasuProjectCommand()]

module.exports = { allCommands }
