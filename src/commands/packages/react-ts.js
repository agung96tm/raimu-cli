const { PackageCommand } = require("../base");

class ReactTsCommand extends PackageCommand {
    constructor() {
        super();
    }

    command() {
        return "package:react-ts"
    }

    description() {
        return "React Typescript"
    }

    action(...args) {
        // do something about clone and create new projects
    }
}

module.exports = { ReactTsCommand };