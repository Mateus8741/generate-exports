# @codewaveds/generate-exports

Crie automaticamente arquivos `index.ts` para exportação de módulos em projetos TypeScript.

## ✨ Sobre

Este pacote gera arquivos de exportação (`index.ts`) baseados nos arquivos existentes em uma pasta. Ideal para manter a organização e facilitar os imports em projetos grandes.

## 🚀 Instalação

```bash
npm install -D @codewaveds/generate-exports
# ou
yarn add -D @codewaveds/generate-exports
```

## ⚙️ Uso

No terminal, execute o comando apontando para a pasta que deseja gerar os exports:

```bash
generate-exports ./src/components
```

Isso criará (ou atualizará) um arquivo `index.ts` na pasta especificada com os exports dos arquivos encontrados.

## 🛠️ Exemplo

Se você tiver essa estrutura:

```
src/components/
├── Button.tsx
├── Header.tsx
```

Rodando:

```bash
generate-exports ./src/components
```

Gerará:

```ts
// index.ts
export * from './Button';
export * from './Header';
```

## 📦 Script de build

Você pode adicionar isso no `package.json` para compilar o projeto:

```json
"scripts": {
  "build": "tsc"