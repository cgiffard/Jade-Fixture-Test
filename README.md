# Jade Fixture Test

Statically test Jade templates.

(**Warning: rough. No tests yet.**)

Renders a Jade template using a supplied JSON fixture, and tests it using a
BAS sheet.

## Installation

```sh
npm install -g jade-fixture-test
```

## Usage

	Usage: jadetest [options]
	
	Options:
	
	  -h, --help           output usage information
	  -V, --version        output the version number
	  -j --jade <path>     Specify a jade template to render
	  -s --sheet <path>    Specify a BAS sheet to check against
	  -f --fixture <path>  Specify a JSON fixture to pass to jade

## Example

```sh
jadetest -j ./example/template.jade -f ./example/fixture.json -s ./example/sheet.bas
```

![Jade fixture test result screenshot](https://files.app.net/j4wxfP54H.png)
	  
## LICENCE

Copyright (c) 2015, Christopher Giffard.

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, 
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR 
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
