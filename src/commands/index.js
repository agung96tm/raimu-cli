const { packages } = require('./packages')
const { projects } = require('./projects')

const allCommands = [...packages, ...projects]

module.exports = { allCommands }
