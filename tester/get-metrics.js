const jsdom = require("jsdom");

(async () => {
  fetch(process.argv[2])
    .then((res) => res.text())
    .then((body) => {
      const dom = new jsdom.JSDOM(body);
      const scriptTags = dom.window.document.querySelectorAll("script");
      let scriptBlockSize = 0;
      for (const el of scriptTags.entries()) {
        console.log(el[1].textContent);
        scriptBlockSize += el[1].textContent.length;
      }
      console.log([body.length, scriptBlockSize].join("\t"));
    });
})();
