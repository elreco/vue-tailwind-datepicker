import { createRequire } from 'node:module'
import { describe, it, expect } from 'vitest'
const require = createRequire(import.meta.url)
const { filterLegacyCommits } = require('../../.github/release/legacy-commits.cjs')
describe('release isolation', () => {
  it('excludes all CodeRocket scoped changes, including breaking changes', () => {
    const commits = [
      { message: 'feat(coderocket): add date picker' },
      { message: 'fix(coderocket-pro): correct preview' },
      { message: 'feat(coderocket)!: new API' },
      { message: 'fix: repair legacy locale' },
    ]
    expect(filterLegacyCommits({ commits })).toEqual([commits[3]])
  })
})
