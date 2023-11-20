#!/usr/bin/env node

const { Command } = require('./core/commands/core')
const { allCommands } = require('./commands')

const command = new Command()
command.register(allCommands)

command.execute()
