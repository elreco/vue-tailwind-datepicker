# Release Guide

This project uses automated releases via GitHub Actions and semantic-release.

## How it works

### Automatic releases on `main` branch
Every push to the `main` branch triggers the release workflow:
1. **Build verification**: The project is built and tested
2. **Commit analysis**: semantic-release analyzes commit messages
3. **Version determination**: Based on conventional commit types
4. **Release creation**: Automatic version bump, changelog, and NPM publication

### Commit message format
Use conventional commits to control releases:

```bash
feat: add new calendar navigation
# → Creates a minor version (1.7.4 → 1.8.0)

fix: resolve date parsing issue
# → Creates a patch version (1.7.4 → 1.7.5)

feat!: change API structure
# → Creates a major version (1.7.4 → 2.0.0)

docs: update installation guide
# → Creates a patch version (configured in package.json)

chore: update dependencies
# → No release (use "no-release" type to skip)
```

### Release types mapping
- `feat:` → **minor** version
- `fix:` → **patch** version
- `BREAKING CHANGE:` or `!` → **major** version
- `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `ci:`, `build:`, `chore:` → **patch** version

## Workflow process

1. **Make your changes** on a feature branch
2. **Create a PR** with conventional commit messages
3. **Merge to main** - The release workflow automatically:
   - Builds the project
   - Determines the next version number
   - Updates `package.json` and `CHANGELOG.md`
   - Creates a Git tag and GitHub release
   - Publishes to NPM using the configured `NPM_TOKEN`

## Manual override (if needed)

If you need to skip a release for a particular commit:
```bash
git commit -m "chore: update docs

[skip release]"
```

## Troubleshooting

### NPM publication fails
- Verify `NPM_TOKEN` is set in repository secrets
- Check NPM registry permissions
- Ensure package name is available

### Build fails
- Check build logs in GitHub Actions
- Verify all dependencies are properly declared
- Run `npm run build` locally to test

### No release created
- Verify commit messages follow conventional format
- Check if commits since last release warrant a new version
- Review semantic-release logs in GitHub Actions
