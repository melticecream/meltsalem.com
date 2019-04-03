# Deploying

[![Netlify Status](https://api.netlify.com/api/v1/badges/1426b1be-1255-410c-9af3-683973bf9eea/deploy-status)](https://app.netlify.com/sites/meltsalem/deploys)

Contenful sends a webhook to Netlify to automatically deploy published content.

# Updating Tachyons

I wanted a simple way to use custom colors while being able to install updated versions of Tachyons very easy too. The process I came up with is easy, but not ideal.

1. Update dependency with `yarn upgrade`.
1. Check the main tachyons.css file for changes - https://raw.githubusercontent.com/tachyons-css/tachyons/master/src/tachyons.css and update the version I copied into the repo at `_assets/css/tachyons.css`.
1. Check the colors.css file for changes - https://raw.githubusercontent.com/tachyons-css/tachyons/master/src/_colors.css and update the version I copied into the repo at `_assets/css/_colors.css`. Note that this `_colors.css` file has our custom colors.
1. Check the media-queries.css file for changes - https://raw.githubusercontent.com/tachyons-css/tachyons/master/src/_media-queries.css and update the version I copied into the repo at `_assets/css/_media-queries.css`. Note that this `_media-queries.css` file has our custom breakpoints.
1. For example, use https://github.com/tachyons-css/tachyons/compare/v4.7.3...4.8.1 to see changes in versions.
1. Run `yarn build` to rebuild the `tachyons.scss` file.
