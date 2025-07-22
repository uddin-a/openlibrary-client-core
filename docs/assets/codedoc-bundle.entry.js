import { getRenderer } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { reloadOnChange } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { CollapseControl } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { GithubSearch } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/samad/Desktop/__code__/__node__/__project__/__packages__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  'YRHpVJPmk/dwELEvEI2L3Q==': ToCPrevNext,
  '3C3+X3Nly0EM1TTFnhHJhw==': CollapseControl,
  'bcrTSgWrKq4yWmRq2bOanA==': GithubSearch,
  'Q4JKV8+6BuvJT9AyfpUMQA==': ToCToggle,
  'oT4qnYjKVOWKNWrgWeZukQ==': DarkModeSwitch,
  '4f7kZTUmxX370Q7ikSF9TA==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
