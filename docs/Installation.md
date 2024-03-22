

WARNING:
At the moment Benjamin-ASR prioritizes enabling user and increase the productivity. Unfortunately due to lack of resources, security receiving less attention. Therefore, it is not advisable to install this software on end-user machines where security is a concern.

# Requirements

- **Operating system:** Windows 10 22H2, Windows 11 21H2
- **Access level:** Need administrator user account with disabled UAC
- **CPU:** Intel I5 10500
- **RAM:** 2 GB
- **GPU:** Not required

# Windows

1. Install Firefox Developer Edition: [Firefox-Dev_120.0b1.exe](https://download-origin.cdn.mozilla.net/pub/devedition/releases/120.0b1/win64/en-US/Firefox%20Setup%20120.0b1.exe)

    INFO:
    Firefox only allows extensions that are signed by Mozilla to be installed in firefox since version 92. Unfortunately we don't like their ideas of monopoly on web extensions and the hassle of sending code each time to Mozilla and waiting for them to sign. To bypass this feature, the only way is to install firefox developer edition.

    HINT:
    Our extension is open sourced and not obfuscated, so you are always welcome to review it by yourself raise any comments in GitHub issues.

2. Install extension
    - Download [Benjfox.xpi](https://github.com/benjamin-asr/Release/releases/download/v0.1/BenjFox.xpi) extension
    - Open Firefox, press `Ctrl+Shift+A` to open Add-on page. 
    - Click on the settings icon and select `Install Add-on From File`.
    - Select xpi file and install.

    INFO: Firefox extension only needed to facilitate scrolling up and down through voice command. You can totally skip step 1 and 2, if you don't need this functionality.

3. Install Benjamin-ASR: [Benjamin-ASR.exe](https://github.com/benjamin-asr/Release/releases/)
