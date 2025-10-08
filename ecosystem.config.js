// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'spencer-app',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
