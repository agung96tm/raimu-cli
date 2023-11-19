const { ProjectCommand } = require("../base");

class YoasuCommand extends ProjectCommand {
    constructor() {
        super();
    }

    command() {
        return "projects:yoasu"
    }

    description() {
        return "Yoasu its template to generated personal website"
    }

    action(...args) {
        // do something about clone and create new projects
    }
}

module.exports = { YoasuCommand };