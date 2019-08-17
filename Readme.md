# simple-api-example-ng2-node

This is example for the following 2 libraries:
- [simple-api-express](https://github.com/J-Siu/simple-api-express) an Expressjs api handler
- [simple-api-client-ng2](https://github.com/J-Siu/simple-api-client-ng2), an Angular 2 api service

> To enable faster update, simple-api-client-ng2 switched to Angular CLI starting 8.2.0 and use new repository https://github.com/J-Siu/ng2-simple-api-lib/
>
> The new repository contains both library and server example.
>
> This example repository will no longer be maintained.

## Index

- [Usage](#usage)
- [Node.js Server Code](#nodejs-server-code)
- [Angular 2 Application Code](#angular-2-application-code)
- [Contributors](#contributors)
- [Changelog](#changelog)
- [License](#license)

## Usage

```
npm install
npm run build-app
npm start
```

## Node.js Server Code

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

## Angular 2 Application Code

```
public/
├── app
│   ├── api.service.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app.routing.ts
│   ├── data.component.ts
│   ├── demo.component.ts
│   ├── error.component.ts
│   ├── home.component.ts
│   ├── info.component.ts
│   ├── main.ts
│   └── systemjs.config.js
└── index.html

```

## Contributors

* [John Sing Dao Siu](https://github.com/J-Siu)

## Changelog

* 1.2.0 - Initial upload
* 1.2.1
	- Update package.json
	- Update Readme.md
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
