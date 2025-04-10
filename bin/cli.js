#!/usr/bin/env node

import { generateExports } from './generate';

const targetDir = process.argv[2];

if (!targetDir) {
    console.error('Por favor, forneça o nome da pasta como argumento.');
    process.exit(1);
}
generateExports(targetDir);