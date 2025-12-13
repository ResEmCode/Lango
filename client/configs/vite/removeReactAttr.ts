import generate from '@babel/generator';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import type { Plugin } from 'vite';

interface OptionsProps {
  attrs: string[];
}

export default function removeReactAttr(options: OptionsProps): Plugin {
  const { attrs } = options;

  return {
    name: 'vite-plugin-remove-react-attrs',
    enforce: 'pre',
    async transform(code, id) {
      if (id.includes('.html')) {
        return null;
      }

      if (!id.endsWith('.jsx') && !id.endsWith('.tsx')) {
        return null;
      }

      const ast = parse(code, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      });

      traverse(ast, {
        JSXAttribute(path) {
          if (path.node.name.type === 'JSXIdentifier') {
            const forbidden = path.node.name.name;
            if (attrs.includes(forbidden)) {
              path.remove();
            }
          }
        },
      });

      const output = generate(ast, {}, code);
      return {
        code: output.code,
        map: output.map,
      };
    },
  };
}
