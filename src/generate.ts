#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

export function generateExports(targetDir: string, baseDir = path.join(process.cwd(), 'src')) {
  const componentsDir = path.join(baseDir, targetDir);
  const indexPath = path.join(componentsDir, 'index.ts');

  const getExports = (dir: string): string => {
    const files = fs.readdirSync(dir);
    let exports = '';

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        exports += getExports(filePath);
      } else if (file !== 'index.ts' && (file.endsWith('.ts') || file.endsWith('.tsx'))) {
        const relativePath = path.relative(componentsDir, filePath).replace(/\.(ts|tsx)$/, '');
        exports += `export * from './${relativePath}';\n`;
      }
    });

    return exports;
  };

  const exports = getExports(componentsDir);
  fs.writeFileSync(indexPath, exports.trim());
}