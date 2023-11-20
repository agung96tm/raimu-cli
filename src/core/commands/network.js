const { Extract } = require('unzipper')

class GithubNetwork {
  constructor() {
    this.fetch = require('node-fetch')
  }

  getHeaders() {
    return {
      'User-Agent': 'https://api.github.com/meta',
    }
  }

  fetchLatestInfoRelease(url) {
    return this.fetch(url, { headers: this.getHeaders() })
      .then((res) => {
        if (!res.ok) {
          throw new Error('fail to fetch latest release')
        }
        return res.json()
      })
      .then((res) => {
        return new Promise((resolve) => {
          const { zipball_url, tag_name } = res
          return resolve({
            url: zipball_url,
            version: tag_name,
            ...this.getOwnerAndRepoName(url),
          })
        })
      })
  }

  getOwnerAndRepoName(url) {
    const [, , owner, repoName] = new URL(url).pathname.split('/')
    return { owner, repoName }
  }

  downloadZip(url, unzipSuccess) {
    return this.fetch(url, { headers: this.getHeaders() }).then((res) => {
      if (!res.ok) {
        throw new Error('fail to fetch latest release')
      }

      const unzip = Extract({ path: process.cwd() })
      res.body.pipe(unzip)
      unzip.on('close', unzipSuccess)
    })
  }
}

module.exports = { GithubNetwork }
