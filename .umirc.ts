import { defineConfig } from 'dumi';

const isPreview = process.env.SITE_BUILD_ENV === 'PREVIEW';
const repoName = 'qing-ui';

export default defineConfig({
  title: 'Qing UI',
  mode: 'site',
  outputPath: 'dist',
  exportStatic: {},
  dynamicImport: {},
  base: isPreview ? '/' : `/${repoName}`,
  publicPath: isPreview ? '/' : `/${repoName}/`,
});
