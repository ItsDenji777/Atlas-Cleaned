// Native document addresses describe the physical proxy URL. Upstream scripts
// need the logical address, just like the virtual window.location does.
export function installDocumentAddress(document, getURL, baseHref) {
  for (const name of ['URL', 'documentURI', 'baseURI']) {
    try {
      Object.defineProperty(document, name, {
        configurable: true,
        get: name === 'baseURI' && baseHref != null ? () => new URL(baseHref, getURL()).href : getURL
      });
    } catch { /* Retain native behavior if the browser forbids an override. */ }
  }
}
