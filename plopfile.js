module.exports = function (plop) {
    plop.setGenerator('package', {
        description: 'Generate a new package',
        prompts: [
            {
                type: 'input',
                name: 'packageName',
                message: 'Package name:',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Package description:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'packages/{{kebabCase packageName}}/package.json',
                templateFile: 'templates/package.json.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{kebabCase packageName}}/src/index.ts',
                templateFile: 'templates/index.ts.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{kebabCase packageName}}/README.md',
                templateFile: 'templates/README.md.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{kebabCase packageName}}/.npmignore',
                templateFile: 'templates/.npmignore.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{kebabCase packageName}}/rollup.config.js',
                templateFile: 'templates/rollup.config.js.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{kebabCase packageName}}/tsconfig.json',
                templateFile: 'templates/tsconfig.json.hbs',
            }
        ],
    });
};