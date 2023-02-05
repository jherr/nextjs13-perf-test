const jsdom = require("jsdom");

(async () => {
  fetch(process.argv[2])
    .then((res) => res.text())
    .then((body) => {
      const dom = new jsdom.JSDOM(body);

      const scriptTags = dom.window.document.querySelectorAll("script");
      let scriptBlockSize = 0;
      for (const el of scriptTags.entries()) {
        scriptBlockSize += el[1].textContent.length;
      }

      const astroIslands = dom.window.document.querySelectorAll("astro-island");
      for (const el of astroIslands.entries()) {
        scriptBlockSize += el[1].getAttribute("props")?.length;
        scriptBlockSize += el[1].getAttribute("opts")?.length;
      }

      console.log([body.length, scriptBlockSize].join("\t"));
    });
})();
