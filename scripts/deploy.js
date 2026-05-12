const { execSync } = require('child_process');
const path = require('path');

const repo = 'https://github.com/KevinAH09/siteweb-quesospimpos.git';
const buildPath = path.join(process.cwd(), 'build');

function run(cmd) {
  console.log('>', cmd);
  return execSync(cmd, { cwd: buildPath, stdio: 'inherit' });
}

try {
  console.log('Deploying', buildPath, 'to', repo);
  // Ensure safe.directory for Git on some Windows setups
  try {
    execSync(
      `git config --global --add safe.directory "${buildPath.replace(/\\/g, '/') }"`,
    );
  } catch (e) {
    // ignore
  }

  // Init repo and force push
  run('git init');
  run('git checkout -B gh-pages');
  run('git add -A');
  try {
    run('git commit -m "Publish build: ' + new Date().toISOString() + '"');
  } catch (e) {
    console.log('No changes to commit');
  }
  try {
    run('git remote remove origin');
  } catch (e) {
    // ignore
  }
  run('git remote add origin ' + repo);
  run('git push -f origin gh-pages');

  console.log('Deploy successful');
} catch (err) {
  console.error('Deploy failed:', err && err.message ? err.message : err);
  process.exit(1);
}
