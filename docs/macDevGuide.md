# Developing on Mac OS

## Setup your dev environment

First install the tools to build and run tests

### Install go 1.13

[Instructions](https://golang.org/doc/install)

Add `go` to your PATH

### Install kubeval

[Instructions](https://github.com/instrumenta/kubeval)

```sh
go get github.com/instrumenta/kubeval
```

Add `kubeval` to your PATH

### Install gnu tools

[Instructions](https://www.topbug.net/blog/2013/04/14/install-and-use-gnu-command-line-tools-in-mac-os-x/)

```sh
brew install coreutils wget gnu-sed tree
```

Add the new tools to your PATH

## Make everything

Verify your install by running `make`:

```sh
make
```

Be default, this runs all tests needed to qualify a pull request.

## Changes Spanning Go Modules

Changes should ideally target a single Go module. If you intend to change multiple Modules you may flag your Pull Request by adding "IGNORE_MODULE_SPANS" on a line by itself your your Pull Requests description.

ex:

> The Pull requests description...
>
> IGNORE_MODULE_SPANS
