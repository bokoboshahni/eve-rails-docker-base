module.exports = {
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', {
      releaseRules: [
        { breaking: true, release: 'major' },
        { revert: true, release: 'patch' },
        { type: 'feat', release: 'minor' },
        { type: 'fix', release: 'patch' },
        { type: 'perf', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { type: 'test', release: 'patch' },
        { type: 'ci', release: 'patch' },
        { type: 'docs', release: false },
      ]
    }],
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', {
      changelogTitle: '# EVE Rails Docker Base Image Changelog'
    }],
    ['@semantic-release/npm', {
      npmPublish: false
    }],
    ['@semantic-release/git', {
      assets: ['CHANGELOG.md', 'package.json']
    }],
    '@semantic-release/github'
  ]
}
