import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
      },
    ],
    plugins: [
      // Compile TypeScript files
      typescript({ tsconfig: './tsconfig.json', sourceMap: false }),
      nodeResolve(),

      // Copy plugin.json to dist
      copy({
        targets: [
          {
            src: 'plugin.json',
            dest: 'dist',
          },
          {
            src: 'logo.png',
            dest: 'dist',
          },
        ],
      }),
    ],
  },
];
