#! /usr/bin/env node

const dangerPath = require.resolve("danger")
const cliRoot = require("path").join(dangerPath, "../../distribution/commands/danger-ci.js")
require(cliRoot)

