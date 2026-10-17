# Persona 5 Unofficial Opera Mod-pack

An unofficial **Opera GX** mod themed after *Persona 5*: it replaces your mouse cursor with the one from the game on web pages.

> ⚠️ Fan-made project, not affiliated with or endorsed by Atlus, SEGA or Opera. All rights to *Persona 5* content belong to their respective owners.

## Requirements

- [Opera GX](https://www.opera.com/gx) (latest version)
- [Node.js](https://nodejs.org/) (only if you want to build from source)

## Installation

1. **Clone the repo**

   ```bash
   git clone <REPO-URL>
   cd <folder-name>
   ```

2. **Install dependencies and build**

   ```bash
   npm install
   node esbuild.js
   ```

   This generates `out/content.js`, which the mod uses.

3. **Load the mod in Opera GX**
   - Open `opera://extensions`
   - Turn on **Developer mode** (top right)
   - Click **Load unpacked** and select the project folder (the one containing `manifest.json`)

4. **Done!** Open any web page and you'll see the new cursor.

## Project structure

```
├── assets/          # Cursors (.ani, .cur) and images
├── src/
│   ├── content.ts   # Script injected into pages
│   └── cursor.css   # Cursor styling
├── esbuild.js       # Build script (output: out/content.js)
├── icon.png         # Mod icon
├── manifest.json    # Extension manifest
└── package.json
```

## Known limitations

The cursor is applied through styles injected into web pages, so it **only works inside websites** and does not show up under *Mods → Cursors* in Opera GX. It does not change the browser's own UI cursor (address bar, menus, etc.).

## Customization

Want a different cursor? Replace the files in `assets/`, update the paths in `src/cursor.css`, rebuild with `node esbuild.js`, then reload the mod from `opera://extensions`.

## Author

Created by **MarcyMiranda2004**.

Contributions, issues and pull requests are welcome!
