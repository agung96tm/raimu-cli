class BaseCommand {
    command() {
        return ""
    }

    description() {
        return ""
    }

    action(...args) {
        return null
    }
}

class ProjectCommand extends BaseCommand {

}

class PackageCommand extends BaseCommand {

}


module.exports = { BaseCommand, ProjectCommand, PackageCommand };