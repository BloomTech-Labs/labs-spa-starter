const prompts = require('prompts');
const fs = require('fs');
const { exec } = require('child_process');
const kleur = require('kleur');
const YAML = require('yaml');

/***
 * In order to better serve build week teams we want to remove some items that
 * can cause distraction from the unit objectives.
 *
 * Packages removed
 * - ant design
 * - storybook
 * - plotly (if not a team with DS)
 *
 * Alter the index.js file
 * Remove code climate from ci.yml
 */
(async () => {
  console.log(kleur.bold().cyan('Preparing Labs Scaffold for BW projects'));

  const response = await prompts({
    type: 'confirm',
    name: 'hasDS',
    message: 'Does your team have data science members?',
    initial: false,
  });

  var packages = [
    '@storybook/react',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/addons',
    '@storybook/storybook-deployer',
    'antd',
    'prompts',
    'kleur',
    'yaml',
  ];
  if (!response.hasDS) {
    // remove dataviz example component
    fs.rmdirSync('./src/components/pages/ExampleDataViz', { recursive: true });
    // add plotly packages to be removed
    packages.push('plotly.js', 'react-plotly.js');
  }
  uninstall(packages);
  // remove lines from app index.js
  alterIndex(response.hasDS);
  // change ci.yml
  removeCC();
  removeThemeFromCraco();
  // remove storybook stories
  fs.rmdirSync('./src/stories', { recursive: true });
  fs.rmdirSync('./.storybook', { recursive: true });
  // remove ant files
  fs.rmdirSync('./src/styles', { recursive: true });
  // remove scaffold .git 😈
  fs.rmdirSync('./.git', { recursive: true });
  // copy the .env.sample file to .env
  fs.copyFile('./.env.sample', './.env', (err) => {
    if (err) throw err;
    console.log('.env.sample was copied to .env');
  });
  // remove this file 😱
  fs.unlinkSync('./bw-prep.js');
})();

function removeCC() {
  const ciFile = './.github/workflows/ci.yml';
  const file = fs.readFileSync(ciFile, 'utf8');
  const ci = YAML.parse(file);
  //remove the code climate step
  ci.jobs.coverage.steps.pop();
  //add a build step
  ci.jobs.coverage.steps.push({ run: 'npm run build' });
  fs.writeFileSync(ciFile, YAML.stringify(ci), 'utf8');
}

function uninstall(packages) {
  const packageNames = packages.join(' ');
  console.log(kleur.bold(`uninstalling packages: ${packageNames}`));
  exec(`npm uninstall ${packageNames}`, (error, stdout, stderr) => {
    console.log(stderr);
    if (error !== null) {
      console.log(
        kleur
          .bold()
          .yellow()
          .bgRed(`exec error: ${error}`)
      );
    }
    // why not run git init for them?
    console.log(
      kleur.bold().green('Uninstall complete'),
      `\n\nThe scaffold is now ready for your Build Week project. You may now run ${kleur
        .bold()
        .underline('git init')} \n\n🎉🎉🎉🎉 🚀`
    );
  });
}

function alterIndex(hasDS) {
  var indexFile = './src/index.js';
  try {
    var file = fs.readFileSync(indexFile, 'utf8');
    var lines = file.split('\n');
    replaceHomePage(lines);
    if (!hasDS) lines = removeLines(lines, 'ExampleDataViz');
    lines = removeLines(lines, 'antd');
    lines = removeLines(lines, 'ProfileListPage');
    lines = removeLines(lines, 'HomePage');
    lines = removeLines(lines, 'LoadingComponent');

    var result = lines.join('\n');
    fs.writeFileSync(indexFile, result, 'utf8');
  } catch (e) {
    console.error(e);
  }
}

function removeThemeFromCraco() {
  const fileName = './craco.config.js';
  const file = fs.readFileSync(fileName, 'utf8');
  var lines = file.split('\n');
  lines.splice(10, 1);
  lines.splice(0, 1);
  const result = lines.map(line => line).join('\n');
  fs.writeFileSync(fileName, result, 'utf8');
}

function replaceHomePage(lines) {
  // super brittle stuff here
  lines[49] = lines[49].replace(/SecureRoute/g, 'Route');
  lines[54] = lines[54].replace(/SecureRoute/g, 'Route');
  lines[52] = lines[52].replace(
    /HomePage LoadingComponent={LoadingComponent}/g,
    'LandingPage'
  );
}

function removeLines(fileLines, matchStr) {
  let indexes = [];
  for (let i = fileLines.length - 1; i > -1; i--)
    if (fileLines[i].match(matchStr)) indexes.push(i);
  for (let l = 0; l < indexes.length; l++) fileLines.splice(indexes[l], 1);
  return fileLines.map(s => s);
}
