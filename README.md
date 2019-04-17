# faker-server

## Usage

Install dependence
```
npm install
```

Start server
```
node server.js
```

Get faker data
```
$ curl http://localhost:3000/?property=name.findName&locale=en_US
```
More detail please see https://github.com/Marak/faker.js.

All support locale and property
```
{
  "locale": {
    "type": "string",
    "format": "select",
    "default": "en",
    "enum": [
      "de",
      "de_AT",
      "de_CH",
      "en",
      "en_AU",
      "en_BORK",
      "en_CA",
      "en_GB",
      "en_IE",
      "en_IND",
      "en_US",
      "en_au_ocker",
      "es",
      "fa",
      "fr",
      "fr_CA",
      "ge",
      "it",
      "ja",
      "ko",
      "nb_NO",
      "nep",
      "nl",
      "pl",
      "pt_BR",
      "ru",
      "sk",
      "sv",
      "tr",
      "uk",
      "vi",
      "zh_CN",
      "zh_TW"
    ]
  },
  "property": {
    "type": "string",
    "format": "select",
    "default": "name.findName",
    "enum": [
      "name.firstName",
      "name.lastName",
      "name.findName",
      "name.prefix",
      "name.suffix",
      "address.zipCode",
      "address.city",
      "address.cityPrefix",
      "address.citySuffix",
      "address.streetName",
      "address.streetAddress",
      "address.streetSuffix",
      "address.secondaryAddress",
      "address.county",
      "address.country",
      "address.state",
      "address.stateAbbr",
      "address.latitude",
      "address.longitude",
      "phone.phoneNumber",
      "phone.phoneNumberFormat",
      "phone.phoneFormats",
      "internet.avatar",
      "internet.email",
      "internet.userName",
      "internet.domainName",
      "internet.domainSuffix",
      "internet.domainWord",
      "internet.ip",
      "internet.userAgent",
      "internet.color",
      "internet.password",
      "company.suffixes",
      "company.companyName",
      "company.companySuffix",
      "company.catchPhrase",
      "company.bs",
      "company.catchPhraseAdjective",
      "company.catchPhraseDescriptor",
      "company.catchPhraseNoun",
      "company.bsAdjective",
      "company.bsBuzz",
      "company.bsNoun",
      "image.image",
      "image.avatar",
      "image.imageUrl",
      "image.abstract",
      "image.animals",
      "image.business",
      "image.cats",
      "image.city",
      "image.food",
      "image.nightlife",
      "image.fashion",
      "image.people",
      "image.nature",
      "image.sports",
      "image.technics",
      "image.transport",
      "lorem.words",
      "lorem.sentence",
      "lorem.sentences",
      "lorem.paragraph",
      "lorem.paragraphs",
      "helpers.randomNumber",
      "helpers.randomize",
      "helpers.slugify",
      "helpers.replaceSymbolWithNumber",
      "helpers.shuffle",
      "helpers.mustache",
      "helpers.createCard",
      "helpers.contextualCard",
      "helpers.userCard",
      "helpers.createTransaction",
      "date.past",
      "date.future",
      "date.between",
      "date.recent",
      "random.number",
      "random.array_element",
      "random.object_element",
      "random.uuid",
      "finance.account",
      "finance.accountName",
      "finance.mask",
      "finance.amount",
      "finance.transactionType",
      "finance.currencyCode",
      "finance.currencyName",
      "finance.currencySymbol",
      "hacker.abbreviation",
      "hacker.adjective",
      "hacker.noun",
      "hacker.verb",
      "hacker.ingverb",
      "hacker.phrase"
    ]
  }
}
```
