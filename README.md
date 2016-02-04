# UK geographic area codes

A dataset with over 700 dialling codes of the United Kingdom, which comes
with a simple function to look up areas by phone number.

## Installation

With [NPM](https://www.npmjs.com/package/area-codes-uk):

```
npm install area-codes-uk --save
```

## Usage

Supports multiple prefixes and ignores suffixes. Examples:

```javascript
var areaCodes = require('area-codes-uk');
areaCodes.lookupUK('01619999999'); // Manchester
areaCodes.lookupUK('+442099999999'); // London
areaCodes.lookupUK('00441890399999'); // Coldstream
areaCodes.lookupUK('01624999999@examplesipprovider.com'); // Isle of Man
```

If no matching area can be found, the function will return `null`.

## Data source

List of UK area codes: © [Ofcom](http://consumers.ofcom.org.uk/phone/numbering/telephone-area-codes-tool/) copyright 2006-11
