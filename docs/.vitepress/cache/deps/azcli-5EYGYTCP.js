import "./chunk-QUWOTVNT.js";

// node_modules/.pnpm/monaco-editor@0.52.0/node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.js
var conf = {
  comments: {
    lineComment: "#"
  }
};
var language = {
  defaultToken: "keyword",
  ignoreCase: true,
  tokenPostfix: ".azcli",
  str: /[^#\s]/,
  tokenizer: {
    root: [
      { include: "@comment" },
      [
        /\s-+@str*\s*/,
        {
          cases: {
            "@eos": { token: "key.identifier", next: "@popall" },
            "@default": { token: "key.identifier", next: "@type" }
          }
        }
      ],
      [
        /^-+@str*\s*/,
        {
          cases: {
            "@eos": { token: "key.identifier", next: "@popall" },
            "@default": { token: "key.identifier", next: "@type" }
          }
        }
      ]
    ],
    type: [
      { include: "@comment" },
      [
        /-+@str*\s*/,
        {
          cases: {
            "@eos": { token: "key.identifier", next: "@popall" },
            "@default": "key.identifier"
          }
        }
      ],
      [
        /@str+\s*/,
        {
          cases: {
            "@eos": { token: "string", next: "@popall" },
            "@default": "string"
          }
        }
      ]
    ],
    comment: [
      [
        /#.*$/,
        {
          cases: {
            "@eos": { token: "comment", next: "@popall" }
          }
        }
      ]
    ]
  }
};
export {
  conf,
  language
};
/*! Bundled license information:

monaco-editor/esm/vs/basic-languages/azcli/azcli.js:
  (*!-----------------------------------------------------------------------------
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
   * Released under the MIT license
   * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
   *-----------------------------------------------------------------------------*)
*/
//# sourceMappingURL=azcli-5EYGYTCP.js.map