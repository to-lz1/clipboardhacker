# clipboardhacker README

VisualStudioCode extension, that provides some functions related to clipboard.

## Extension Settings

This extension contributes the following settings:

* `cliphack.dictionary`: replacement of clipped string will be performed based on this array. `from` string will be recognized as RegExp.

example:
```
  "cliphack.dictionary": [
    { "from": "foo" "to": "bar" },
    { "from": "buz\\." "to": "bar" }
  ]
```

## packaging

`vsce` is required for packaging. This plugin is not published on Market Place so far.

```
vsce package
```
