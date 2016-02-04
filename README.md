# UK geographic area codes

A dataset with over 700 dialling codes of the United Kingdom, which comes
with a simple function to look up areas by phone number.

## Usage

Supports multiple prefixes and ignores suffixes. Examples:

```javascript
var areaCodesUtils = require('area-codes-uk');
areaCodesUtils.lookupUK('01619999999'); // Manchester
areaCodesUtils.lookupUK('+442099999999'); // London
areaCodesUtils.lookupUK('00441890399999'); // Coldstream
areaCodesUtils.lookupUK('01624999999@examplesipprovider.com'); // Isle of Man
```

If no matching area can be found, the function will return `null`.

## Data source

Data source: © [Ofcom](http://consumers.ofcom.org.uk/phone/numbering/telephone-area-codes-tool/) copyright 2006-11
