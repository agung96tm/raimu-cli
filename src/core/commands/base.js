const fs = require('fs')
const path = require('path')
const { GithubNetwork } = require('./network')

class BaseCommand {
  constructor() {
    this.network = new GithubNetwork()
  }

  projectUrl() {
    return ''
  }

  command() {
    return ''
  }

  description() {
    return ''
  }

  action(args, ..._) {
    this.checkCommandValid()
    this.checkSafeToCreateDir(args[0])

    this.network.fetchLatestInfoRelease(this.projectUrl()).then(({ url, version, owner, repoName }) => {
      const findName = `${owner}-${repoName}`
      console.log('Yoasu ' + version + ' is available!')

      this.network.downloadZip(url, () => {
        this.renameDir(findName, args[0]).then(() => {
          console.log('Success to create new Project')
        })
      })
    })
  }

  arguments() {
    return [
      {
        argument: '<name>',
        description: 'Name Your Project',
      },
    ]
  }

  checkSafeToCreateDir(name) {
    const projectPath = path.join(process.cwd(), name)
    if (fs.existsSync(projectPath)) {
      console.log(`error: ${name} directory is already exist`)
      process.exit()
    }
  }

  checkCommandValid() {
    if (!this.projectUrl() || !this.command()) {
      throw new Error('invalid command, project url and command must be filled')
    }
  }

  renameDir(findOldName, newName) {
    const files = fs.readdirSync(process.cwd())
    return new Promise((resolve) => {
      files.every((file) => {
        if (file.startsWith(findOldName)) {
          fs.rename(path.join(process.cwd(), file), newName, (err) => {
            if (err) throw err
            resolve()
          })
          return false
        } else {
          return true
        }
      })
      resolve()
    })
  }
}

class ProjectCommand extends BaseCommand {}

class PackageCommand extends BaseCommand {}

module.exports = { BaseCommand, ProjectCommand, PackageCommand }
