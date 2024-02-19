module.exports = {
  apps: [{
    name: 'main',
    script: 'node ./dist/apps/pm2/main.js',
    watch: true,
  }, {
    name: 'service',
    script: 'node ./dist/apps/service/main.js',
    watch: true,
  }],
};
