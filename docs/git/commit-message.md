---
id: commit-message
title: Commit Message
---

I follow the conventional commits pattern and use [Standard Version](https://github.com/conventional-changelog/standard-version) lib to generate the changelog when needed.


**Commit Message Structure**
```bash
  <ty­pe>[optional scope]: <de­scr­ipt­ion>
  
  [optional body]

  [optional footer]
```

**Example**
```bash
$ git commit -m 'feat: create date-picker component'
$ git commit -m 'fix: top menu breaks on mobile screen size'
```

**Specification**
1. Commits MUST be prefixed with a type, which consists of a verb, `feat`, `fix`, etc., followed by a colon and a space.
2. The type `feat` MUST be used when a commit adds a new feature to your applic­ation or library.
3. The type `fix` MUST be used when a commit represents a bug fix for your applic­ation.
4. An optional scope MAY be provided after a type. A scope is a phrase describing a section of the codebase enclosed in parent­hesis, e.g., `fix(pa­rser)`:
5. A descri­ption MUST immedi­ately follow the type/scope prefix. The descri­ption is a short descri­ption of the pull request, e.g., `fix: array parsing issue when multiple spaces were contained in string`.
6. A longer commit body MAY be provided after the short descri­ption. The body MUST begin one blank line after the descri­ption.
7. A footer MAY be provided one blank line after the body. The footer SHOULD contain additional meta-i­nfo­rmation about the pull-r­equest (such as the issues it fixes, e.g., `fixes #13, #5`).
8. Breaking changes MUST be indicated at the very beginning of the footer or body section of a commit. A breaking change MUST consist of the uppercase text `BREAKING CHANGE`, followed by a colon and a space.
9. A descri­ption MUST be provided after the `BREAKING CHANGE:` , describing what has changed about the API, e.g., `BREAKING CHANGE: enviro­nment variables now take precedence over config files`.
10. Types other than feat and fix MAY be used in your commit messages.

| Types | | Description |
| ----- | - | - |
| `feat` | Features | A new feature |
| `fix` | Bug Fixes | A bug fix |
| `docs` | Docume­ntation | Docume­ntation only changes (e.g. README) |
| `style` | Styles | Changes that do not affect the meaning of the code (white­-space, format­ting, missing semi-c­olons, etc)
| `refactor` | Code Refact­oring | A code change that neither fixes a bug nor adds a feature
| `perf` | Perfor­mance Improv­ements | A code change that improves perfor­mance
| `test` | Tests | Adding missing tests or correcting existing tests
| `build` | Builds | Changes that affect the build system or external depend­encies (example scopes: gulp, broccoli, npm)
| `ci` | Continuous Integr­ations | Changes to our CI config­uration files and scripts (example scopes: Travis, Circle, Browse­rStack, SauceLabs)
| `chore` | Chores | Other changes that don't modify src or test files (e.g. install new package)
| `revert` | Reverts | Reverts a previous commit

Read more about Conventional Commit on the documentation [here.](https://www.conventionalcommits.org/en/v1.0.0/)