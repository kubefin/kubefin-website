# KubeFin Docs

This repo contains the source code of [KubeFin website](http://kubefin.dev/) and all of the docs for KubeFin.
It's built by [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Welcome to join us and you are more than appreciated to contribute!

## Contributing to KubeFin Docs

First, we have the source documentation of [KubeFin website](http://kubefin.dev/) and it's written in English. Any changes on these files(`docs/*`, `blog/*`, `sidebars.js`) will be submitted to the corresponding locations of the repo 
[kubefin.dev](https://github.com/kubefin/kubefin-website). The Github-Action there will parse the document and publish it to the KubeFin Website automatically.

Please follow our guides below to learn how to write the docs in the right way.

## Add or Update Docs

When you add or modify the docs, these three files(`docs/*`, `blog/*` and `sidebars.js`) should be taken into consideration.

1. `docs/`, the main English documentation files are mainly located in this folder. All markdown files need to follow the format,
   that the title at the beginning should be in the following format:

    ```markdown
    ---
    title: Title Name
    ---
   
    ```

   When you want to add a link refer to any `.md` files inside the docs(`docs`), you need to use relative path and remove the `.md` suffix.
   For example, the `installation/README.md` has a link refer to `installation/kubectl.md`. Then the format should like:

    ```markdown
   [install with kubectl](./kubectl)
    ```

2. `docs/resource/`, image files are located in this folder. When you want to use link any image in documentation, 
   you should put the image resources here and use a relative path like below:

   ```markdown
    ![alt](./resources/concepts.png)
   ```

3. `sidebars.js`, this file contain the navigation information of the KubeFin website.
   Please read [the official docs of docusaurus](https://docusaurus.io/docs/sidebar) to learn how to write `sidebar.js`.

   ```js
      {
         type: 'category',
         label: 'Installation',
         items: [
           // Note!: here must be add the path under "docs/en" 
           'installation/helm/README',
           ...
         ],
       },
   ```

After you finished modify the docs, please try to [have a preview of the changes](#Website-Preview).


# Website Preview

Please make sure you have [yarn installed](https://www.geeksforgeeks.org/how-to-install-yarn-in-macos-ubuntu-windows/) in your OS environment.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Versions for new release

All docs of new features should be updated in the latest docs, we will create a new version of docs along with the code release.

### Build New Version

```
yarn docusaurus docs:version v1.x
```

### Update Docs for version

```
make update-version version=v1.x
```

## Send your pull request

After all changes checked well, please [creating a pull request](https://help.github.com/en/articles/creating-a-pull-request) with [DCO](https://github.com/apps/dco).
