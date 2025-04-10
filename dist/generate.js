#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExports = generateExports;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function generateExports(targetDir, baseDir = path_1.default.join(process.cwd(), 'src')) {
    const componentsDir = path_1.default.join(baseDir, targetDir);
    const indexPath = path_1.default.join(componentsDir, 'index.ts');
    const getExports = (dir) => {
        const files = fs_1.default.readdirSync(dir);
        let exports = '';
        files.forEach((file) => {
            const filePath = path_1.default.join(dir, file);
            const stat = fs_1.default.statSync(filePath);
            if (stat.isDirectory()) {
                exports += getExports(filePath);
            }
            else if (file !== 'index.ts' && (file.endsWith('.ts') || file.endsWith('.tsx'))) {
                const relativePath = path_1.default.relative(componentsDir, filePath).replace(/\.(ts|tsx)$/, '');
                exports += `export * from './${relativePath}';\n`;
            }
        });
        return exports;
    };
    const exports = getExports(componentsDir);
    fs_1.default.writeFileSync(indexPath, exports.trim());
}
