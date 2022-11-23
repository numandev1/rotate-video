<p align="center">
<img src="https://github.com/numandev1/rotate-video/raw/master/media/logo.png" alt="alt text" width="150"/>
</p>
<h1 align="center">Rotate Single video / Entire directory of videos with FFMPEG</h1>

### Would you like to support me?

<div align="center">
<a href="https://github.com/numandev1?tab=followers">
    <img src="https://img.shields.io/github/followers/numandev1?label=Follow%20%40numandev1&style=social" height="36" />
</a>
<a href="https://www.youtube.com/@numandev?sub_confirmation=1"><img src="https://img.shields.io/youtube/channel/subscribers/UCYCUspfN7ZevgCj3W5GlFAw?style=social" height="36" /><a/>
</br>
<a href="https://www.buymeacoffee.com/numan.dev" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
</div>

## Prerequisite

install [ffmpeg](https://ffmpeg.org/) cli first

| Platform | Command                     |
| -------- | --------------------------- |
| Macbook  | brew install ffmpeg         |
| Ubuntu   | sudo apt-get install ffmpeg |

## Installation

### using npx

```sh
npx rotate-video --source=source_path --destination=destination_path --extension=MP4 --angel=270
```

### using npm

```sh
npm i -g rotate-video
```

```sh
rotate-video --source=source_path --destination=destination_dir_path --extension=MP4 --angel=270

# or you can write blow command

rv --source=source_path --destination=destination_path --extension=MP4 --angel=270
```

# Example

**For Multiple Videos** below command will Rotate an entire directory of videos

```js
rotate-video --source=/Users/apple/sourceVideoDir --destination=/Users/apple/destinationVideoDir --extension=MP4 --angel=270
```

**For Single Video** below command will Rotate an videos

```
rotate-video --source=/Users/apple/sourceVideo --destination=/Users/apple/destinationVideoDir --extension=MP4 --angel=270
```

### Contributing

If you'd like to contribute something, please check out our [contributing guide](https://github.com/numandev1/rotate-video/blob/master/contributing.md 'contributing guide')!

<!-- Footer -->

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/numandev1"><img src="https://avatars2.githubusercontent.com/u/36044436?v=4" width="100px;" alt=""/><br /><sub><b>Numan</b></sub></a><br /><a href="https://github.com/numandev1" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
