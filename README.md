# Nordpage
A aesthetic start page with keyboard support based on the nord color palette.

[live demo](https://markmiso.github.io/nordpage/)

## Usage
You can set this page as a startpage and new tab page in your browser.

- On firefox
  - Startpage:
    1. open preferences
    2. go in Home section
    3. under "Homepage and new windows" set custom url and paste the [live demo url](https://markmiso.github.io/nordpage/)
    
  - New tab page:
    1. install [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) extension
    2. open the extension settings page
    3. under "option" set custom url and paste the [live demo url](https://markmiso.github.io/nordpage/)
    4. also check the "Set focus to the web page instead of the address bar" box

### Themes
You can swithc between a dark and light theme both based on the nord color palette.
The theme switch is in the footer witch by defaut is hidden. You can show the footer by scrolling down, than simply click on themify.

You are also free to fork or clone this repo and set your own color palette, i've organized the css to make this as easy as possible.

### Keyboard
I've implemented basic support for keyboard navigation with vim keys. By default the page loads in insert mode.

- insert mode
  - you can enter this mode by pressing i
  - in insert mode you have focus on the search bar
  - pressing enter in insert mode will search the typed string
  
- vim mode
  - you can enter this mode by pressing Esc
  - in this mode you can moove in the matrix of links using h,j,k,l
  - pressing enter in vim mode will click the selected link
  
## Credits
I've just started web developement so don't expect impeccable code quality.
If you find any bugs and/or have suggestion on how to improove the page don't hasitate to contact me.

This page was more than inspired by [wlfys-minimal-startpage](https://gitlab.com/wolfiy/wlfys-minimal-startpage).
The icon font used is [font awesome](https://fontawesome.com).
The image used is from Stephan Seeber and you can find it [here](https://www.pexels.com/photo/snow-covered-mountain-peak-1130847/).
