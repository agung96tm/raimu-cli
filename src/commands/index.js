const { YoasuPackageCommand } = require('./yoasu-package')
const { YoasuProjectCommand } = require('./yoasu-project')
const { ReactTsPackageCommand } = require("./react-ts-package");
const { ReactJsPackageCommand } = require("./react-js-package");

const allCommands = [
    new YoasuPackageCommand(),
    new YoasuProjectCommand(),
    new ReactTsPackageCommand(),
    new ReactJsPackageCommand(),
]

module.exports = { allCommands }
