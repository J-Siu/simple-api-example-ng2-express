# simple-api-example-ng2-node

This is example for the following 2 libraries:
- [simple-api-node](https://github.com/J-Siu/simple-api-node) an expressjs api handler
- [simple-api-client-ng2](https://github.com/J-Siu/simple-api-client-ng2), an Angular 2 api service

## Index

* [Usage](#Usage)
* [Changelog](#Changelog)
* [License](#License)

## Usage

```
npm install
npm run build-app
npm start
```

## Server
```
server/
├── api-object
│   ├── data-obj.js
│   ├── demo-obj.js
│   ├── error-obj.js
│   ├── index.js
│   └── info-obj.js
└── server.js
```

## App

```
public/
├── app
│   ├── api.service.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── data.component.ts
│   ├── demo.component.ts
│   ├── error.component.ts
│   ├── info.component.ts
│   └── main.ts
├── index.html
└── systemjs.config.js
```


## Contributors

* John Sing Dao Siu <john.sd.siu@gmail.com>

## Changelog

* 1.2.0 - Initial upload

## License

The MIT License

Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.