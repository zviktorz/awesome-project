const { Octokit } = require('@octokit/rest');

const kit = new Octokit({
    auth: process.env.ACCESS_TOKEN,
})