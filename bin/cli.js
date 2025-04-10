#!/usr/bin/env node

import { generateExports } from './index';

const targetDir = process.argv[2];

if (!targetDir) {
    console.error('Por favor, forneça o nome da pasta como argumento.');
    process.exit(1);
}

try {
    generateExports(targetDir);
    console.log(`index.ts gerado com sucesso para ${targetDir}`);
} catch (err) {
    console.error('Erro ao gerar exports:', err);
    process.exit(1);
}