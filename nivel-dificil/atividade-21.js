const links = [
  { texto: "Google", url: "https://google.com" },
  { texto: "YouTube", url: "https://youtube.com" }
];

const html = links.map(link => `<a href="${link.url}">${link.texto}</a>`);

console.log(html);
