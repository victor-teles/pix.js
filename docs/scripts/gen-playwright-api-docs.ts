import { generateFiles } from 'fumadocs-typescript';
import * as path from 'node:path';
 
void generateFiles({
  input: ['./content/docs/api/**/*.model.mdx'],
  output: (file) =>
    path.resolve(
      path.dirname(file),
      `${path.basename(file).split('.')[0]}.mdx`,
    ),
});
