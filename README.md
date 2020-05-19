## Repro

1. Clone repo
1. `npm install`
1. `emacs -q -l lsp-start-plain.el Component.tsx`
1. `M-x typescript-mode`
1. `i` to import current project
1. `M-x auto-rename-tag-mode`
1. Insert a `d` in the `header` tag so it reads `<dheader>`
1. An error should appear
1. `C-/`

### Expected

The error disappears and there are no errors

### Actual

The original error disappears, but a new error appears on the `div` after the header
