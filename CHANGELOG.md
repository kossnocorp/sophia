# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning].

This change log follows the format documented in [Keep a CHANGELOG].

[semantic versioning]: http://semver.org/
[keep a changelog]: http://keepachangelog.com/

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
