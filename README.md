# open-file-text-editor

Will open files in text editor as following:

- linux: Use xdg-open to open default editor [tested on ubuntu]
- darwin: Use open to use default editor
- win32: Use notepad. Later I hope have some time to look at using default text-editor

# Installation

npm install open-file-text-editor

# Usage

'use strict';

const openText = require('open-file-text-editor');
openText(`${filename}`); # => returns Promise
