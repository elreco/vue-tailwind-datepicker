const { execFileSync } = require('node:child_process')
exports.filterLegacyCommits = function (context) {
  return context.commits.filter(commit => {
    if (/^[a-z]+\(coderocket(?:[-/][^)]+)?\)!?:/i.test(commit.message)) return false
    if (!/^[a-f0-9]{7,40}$/i.test(commit.hash || '')) return true
    try {
      const files = execFileSync('git', ['diff-tree', '--root', '--no-commit-id', '--name-only', '-r', commit.hash], { cwd: context.cwd, encoding: 'utf8' }).trim().split('\n').filter(Boolean)
      return !files.length || !files.every(file => file.startsWith('coderocket/') || /^\.github\/workflows\/coderocket-/.test(file))
    } catch { return true }
  })
}
