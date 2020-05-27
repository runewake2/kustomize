# Developing from a Container

## Setup your dev environment

The development environment is stored inside a container which you may connect to using a supported editor.

### Registering the Dev Container

The `.devcontainer` directory contains the `Dockerfile` and `devcontainer.json` describing the development environment setup. This directory will need to exist in the root directory of the kustomize project, get started by moving the container there.

```sh
mv docs/.devcontainer .devcontainer
```

### Using VS Code

Visual Studio Code requires the [`Remote Development: Containers`](https://code.visualstudio.com/docs/remote/containers) extension. Once that extension is installed you can open the `kustomize` directory using the `Remote-Containers: Open Folder in Container` action.

## Using the Container

You can verify the container is working by opening a terminal and running `make`.

```sh
make
```

Be default, this runs all tests needed to qualify a pull request.

Kustomize source will be mounted at `/workspaces/kustomize` inside of the container.