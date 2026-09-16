const { filterLegacyCommits } = require('./legacy-commits.cjs')
exports.generateNotes = async function (config, context) {
  const { generateNotes } = await import('@semantic-release/release-notes-generator')
  return generateNotes(config, { ...context, commits: filterLegacyCommits(context) })
}
