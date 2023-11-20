class BaseCommand {
  command() {
    return ''
  }

  description() {
    return ''
  }

  // eslint-disable-next-line no-unused-vars
  action(...args) {
    return null
  }
}

class ProjectCommand extends BaseCommand {}

class PackageCommand extends BaseCommand {}

module.exports = { BaseCommand, ProjectCommand, PackageCommand }
