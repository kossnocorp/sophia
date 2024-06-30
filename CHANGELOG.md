# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning].

This change log follows the format documented in [Keep a CHANGELOG].

[semantic versioning]: http://semver.org/
[keep a changelog]: http://keepachangelog.com/

## v0.5.0 - 2024-06-30

### Added

- Added bracket blocks highlight colors.

### Changed

- Improved Rust and JavaScript syntax highlighting.

## v0.4.0 - 2024-06-20

### Added

- Added support for Rust and GraphQL.

- Added a new property color to the types layer.

### Changed

- Enabled `semanticHighlighting` option allowing the theme to use semantic tokens for syntax highlighting. It makes the theme more consistent and accurate.

- Make the macro layer yellow rather than red that is easier to confuse with the memory layer.

- Add purple tint to the runtime layer to distinguish it from the other layers better.

- Improved colors consistency.

## v0.3.0 - 2024-05-27

### Added

- Introduced a new memory layer for system languages. It uses red tint to make sure memory managment is always prominent.

- Added basic support for Rust, Astro and Just.

### Changed

- Made the data layer more bluish to distinguish it from the types that has the green tint.

## v0.2.0 - 2024-05-15

### Added

- Introduced a new data layer for primitives, array/object literals, HTML/JSX, Markdown, and data file types such as YAML and JSON.

- Added explicit support for JSX, HTML, and YAML.

- Added basic support for F#.

### Changed

- Made the semantics more nuanced and consistent in the previously supported languages.

- Removed italic and bold font styles from the theme. I plan to rethink the approach and use them more carefully in the future.

- Switched from handcrafted JSON to a set of rules and palettes in YAML built with a script. It lays the foundation for different palettes (i.e., light) and makes supporting and extending the theme easier.

## v0.1.1 - 2024-05-10

Initial public release
