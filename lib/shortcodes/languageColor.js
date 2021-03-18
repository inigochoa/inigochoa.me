const GitHubColors = require('github-colors')

module.exports = language => `--lang-color: ${GitHubColors.get(language).color}`
