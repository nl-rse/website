# The Netherlands Research Software Engineers community - Website

Designed and developed by @ctwhome

[![Netlify Status](https://api.netlify.com/api/v1/badges/813df10a-94d6-4c73-ba59-651648d3a421/deploy-status)](https://app.netlify.com/sites/nl-rse/deploys)

## Editing Content, Events and Blogs

* Most of the content on the website can be changed from the markdown files located inside the `content` folder.
* The menu links in the header and the mobile side panel can be edited inside the `menu-items.md` file (https://github.com/nl-rse/website/blob/main/content/menu-items.md).
* Adding events is as easy as copying the template (https://github.com/nl-rse/website/blob/main/content/202x-mm-dd-meetup.template.md), changing its content and place it inside the `/content/events/<temaplte.md>` location.
* When creating new blog posts, any markdown file located inside `/content/posts/<lowercase-post.md>` will be picked up automatically.
* IMPORTANT: all file names need to be "lowercase" in order to make [them work in Netlify](https://answers.netlify.com/t/support-guide-netlify-app-builds-locally-but-fails-on-deploy-case-sensitivity/10754). Example: `2019-07-09-nl-rse-2019.md`
* Any modifications in the files will trigger a GitHub action to build and deploy automatically to the live website. The changes will be live after a few minutes.

## Build Setup Locally

IMPORTANT NOTE: this project was created in 2021, Node version 16 is required to run it. (you can use nvm to install it)

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate

# generate and local test
$ yarn generate && yarn start
```

For a detailed explanation of how things work, check out the [documentation](https://nuxtjs.org).
