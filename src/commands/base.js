const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
const { Extract } = require('unzipper')

class BaseCommand {
  constructor() {
    this.process = null
  }

  addProcess(process) {
    this.process = process
  }

  command() {
    return ''
  }

  description() {
    return ''
  }

  action(args, ..._) {
    this.safeToCreateFolder(args[0])

    fetch('https://api.github.com/repos/agung96tm/yoasu/releases/latest', {
      headers: { 'User-Agent': 'https://api.github.com/meta' },
      json: true,
    })
      .then((res) => {
        if (!res.ok) {
          console.log(`error: fail to fetch information`)
          process.exit()
        }
        return res.json()
      })
      .then((data) => {
        const { zipball_url: url, tag_name: version } = data

        console.log('Yoasu ' + version + ' is available!')
        console.log('Start to Download...')

        fetch(url, {
          headers: { 'User-Agent': 'https://api.github.com/meta' },
        }).then((response) => {
          if (!response.ok) {
            throw new Error('invalid')
          }

          const unzip_operation = Extract({ path: process.cwd() })
          unzip_operation.on('close', () => {
            const files = fs.readdirSync(this.process.cwd())
            files.every((file) => {
              if (file.startsWith('agung96tm-yoasu')) {
                fs.rename(path.join(this.process.cwd(), file), args[0], (err) => {
                  if (err) throw err
                  console.log('Yoasu project success cloned')
                })
                return false
              } else {
                return true
              }
            })
          })

          return response.body.pipe(unzip_operation)
        })
        // process.exit();
      })

    return null
  }

  arguments() {
    return [
      {
        argument: '<name>',
        description: 'Name Your Project',
      },
    ]
  }

  safeToCreateFolder(name) {
    const projectPath = path.join(process.cwd(), name)
    if (fs.existsSync(projectPath)) {
      console.log(`error: ${name} directory is already exist`)
      process.exit()
    }
  }
}

class ProjectCommand extends BaseCommand {}

class PackageCommand extends BaseCommand {}

module.exports = { BaseCommand, ProjectCommand, PackageCommand }
