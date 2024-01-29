module.exports = {
  apps: [
    {
      name: 'webapp_server_nestjs',
      script: './dist/main.js',
      cwd: '.',
      max_memory_restart: '1G',
      exec_mode: 'cluster',
      instances: 2,
      watch: ['./dist/*.js'],
      ignore_watch: ['node_modules'],
      env_production: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
