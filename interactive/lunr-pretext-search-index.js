var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Comparaison séries\/intégrales",
  "body": " Comparaison séries\/intégrales  On considère une fonction continue par morceaux, décroissante et positive  . Alors pour tout  La minoratiion est en fait valable pour tout alors que la majoration est valable pour tout . De ce fait on a le théorème suivant   de comparaison séries\/intégrales           la série converge si et seulement si l'intégrale converge et dans ce cas :             en particulier si alors             On peut replacer l'intervalle par un intervalle de la forme où est un entier lorsque la fonction n'est pas définie sur .   "
},
{
  "id": "thm-serint",
  "level": "2",
  "url": "sec-section-name.html#thm-serint",
  "type": "Theorem",
  "number": "1.1.1",
  "title": "de comparaison séries\/intégrales.",
  "body": " de comparaison séries\/intégrales           la série converge si et seulement si l'intégrale converge et dans ce cas :             en particulier si alors          "
},
{
  "id": "sec-section-name-3",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-3",
  "type": "Remark",
  "number": "1.1.2",
  "title": "",
  "body": " On peut replacer l'intervalle par un intervalle de la forme où est un entier lorsque la fonction n'est pas définie sur .  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
