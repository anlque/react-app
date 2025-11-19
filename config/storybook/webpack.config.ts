import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '../', '../', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules = config.module.rules.map((rule) => {
        if (
            typeof rule === 'object' &&
            rule?.test instanceof RegExp &&
            rule.test.test('.svg')
        ) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module.rules.push(buildCssLoader(true));
    config.module.rules.push(buildSvgLoader());

    return config;
};
