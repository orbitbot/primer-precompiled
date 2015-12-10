# primer-precompiled
> Github's primer.css subsets pre-compiled to CSS

[Primer.css](https://github.com/primer/primer) is the base styling for Github's websites, and is distributed as [SASS](http://sass-lang.com/). 
The documentation for Primer.css can be found at http://primercss.io/ .

This project distributes pre-built css based on useful subsets of Primer.css, such as any components defined as individual 
source code files, groupings according to the documentation sections etc.

If you need more control of the generated css, you may prefer to compile Primer.css yourself.

<br>
## Installation

    $ bower install primer-precompiled --save
    $ npm install primer-precompiled --save

<br>
## Css

| file                     | Primer documentation                       |
|:------------------------ |:------------------------------------------ |
| `primer-alerts.css`      | http://primercss.io/alerts/                |
| `primer-avatars.css`     | http://primercss.io/avatars/               |
| `primer-blankslate.css`  | http://primercss.io/blankslate/            |
| `primer-buttons.css`     | http://primercss.io/buttons/               |
| `primer-counter.css`     | http://primercss.io/utilities/#counter     |
| `primer-filter-list.css` | http://primercss.io/nav/#filter-list       |
| `primer-flex-table.css`  | http://primercss.io/utilities/#flex-table  |
| `primer-forms.css`       | http://primercss.io/forms/                 |
| `primer-layout.css`      | http://primercss.io/layout/                |
| `primer-menu.css`        | http://primercss.io/nav/#menu              |
| `primer-navigation.css`  | http://primercss.io/nav/                   |
| `primer-scaffolding.css` | http://primercss.io/scaffolding/           |
| `primer-states.css`      | http://primercss.io/states/                |
| `primer-tabnav.css`      | http://primercss.io/nav/#tabnav            |
| `primer-tooltips.css`    | http://primercss.io/tooltips/              |
| `primer-truncate.css`    | http://primercss.io/utilities/#truncation  |
| `primer-type.css`        | http://primercss.io/type/                  |
| `primer-utilities.css`   | http://primercss.io/utilities/             |
| `primer-utility.css`     | various in http://primercss.io/utilities/  |

<br>
## Caveat Emptor

All css files produced have not been verified to individually work as in the Primer documentation, and may implicitly
depend on [Normalize.css](https://necolas.github.io/normalize.css/) or other css such as resets defined elsewhere in
the Primer.css source. You may therefore need to supply these resets yourself or selectively include other Primer components.

If you discover any problems with components, please file an issue and/or submit a pull request.

<br>
## Version tracking

| Versions | primer-precompiled | Primer.css | 
| -------- |------------------- | ---------- | 
|          | 1.0.0              | 2.5.0      | 

<br>
## License

This project is ISC licenced.

[Primer.css](https://github.com/primer/primer) is created by and copyright GitHub, Inc. and released under the MIT license.
