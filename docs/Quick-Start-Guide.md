# Writing your docs

How to layout and write your Markdown source files.

---

## File layout

Your documentation source should be written as regular Markdown files (see
[Writing with Markdown](#writing-with-markdown) below), and placed in the
[documentation directory](configuration.md#docs_dir). By default, this directory
will be named `docs` and will exist at the top level of your project, alongside
the `mkdocs.yml` configuration file.

The simplest project you can create will look something like this:

```text
mkdocs.yml
docs/
    index.md
```

By convention your project homepage should be named `index.md` (see [Index
pages](#index-pages) below for details). Any of the following file
extensions may be used for your Markdown source files: `markdown`, `mdown`,
`mkdn`, `mkd`, `md`. All Markdown files included in your documentation
directory will be rendered in the built site regardless of any settings.

NOTE:
Files and directories with names which begin with a dot (for example: `.foo.md` or `.bar/baz.md`) are ignored by MkDocs. This can be overridden with the [`exclude_docs` config](configuration.md#exclude_docs).

