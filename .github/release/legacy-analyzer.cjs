const { filterLegacyCommits } = require('./legacy-commits.cjs')
exports.analyzeCommits = async function (config, context) {
  const { analyzeCommits } = await import('@semantic-release/commit-analyzer')
  return analyzeCommits(config, { ...context, commits: filterLegacyCommits(context) })
}
