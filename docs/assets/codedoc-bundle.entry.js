import { getRenderer } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { reloadOnChange } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { CollapseControl } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { GithubSearch } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/samad/Desktop/__code__/__node__/__projects__/openlibrary-client-core/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  'r3kLqRhzPKhL2GKuyFCcFw==': ToCPrevNext,
  '9A9wF9AOSZ0/wXtgtfeEWg==': CollapseControl,
  'a+PF6EA0TL8M73HYEfxNAw==': GithubSearch,
  '/UwUuPd0xVNanmJ8+01Oiw==': ToCToggle,
  '8N69oRFTSDXliJGS16wvWQ==': DarkModeSwitch,
  '0OF3GMoy9Tj+q770exHsmg==': ConfigTransport
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
