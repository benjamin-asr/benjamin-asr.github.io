### Windows
Currently we support `Windows 10 22H2` and `Windows 11`. For Windows we offer a 1-Click setup.

<a class="download_btn" href="https://forms.gle/8HddUSr4AidNaKBr8">Download Ben-ASR for Windows</a>

TIP:
**Access level:** User needs administrator-level account with disabled UAC

### Linux

<a class="download_btn" href="https://forms.gle/62EzbtzDVN9upVCAA">Download Ben-ASR for Linux</a>

Linux is for more advanced users and you need to following these steps further to the setup file.

1. Install [Awesome-WM](https://awesomewm.org/) and [Polybar](https://github.com/polybar/polybar) and [Firefox Developer Edition](https://download-origin.cdn.mozilla.net/pub/devedition/releases/120.0b1/linux-x86_64/en-US/firefox-120.0b1.tar.bz2)

2. Install config files from [Bijoux repository](https://github.com/bijanbina/Bijoux/tree/master/Awesome) for PolyBar and Awesome-WM.

### Hardware Requirements

- **CPU:** Intel I5 10500
- **RAM:** 2 GB
- **GPU:** Not required

### Virtual Machines

You can run Benjamin-ASR under virtual machines but there are few caveats:

1. Many component of Benjamin-ASR relies on AVX, although AVX is supported by almost all modern processors this may not be true when you run the software under a virtual machine.
2. VirtualBox generally have problem supporting AVX under Windows while Hyper-V is enabled. VMware doesn't have this limitation and it became free since Nov 2024
3. For both cases under Windows, you cannot train a model inside them if Hyper-V is enabled. For training we rely on WSL and WSL requires Hyper-V inside guest machine and that required VT-x enabled which is only available if Hyper-V is disabled on Host machine. So at the same time only one of Host or Guest can be used for training. \[[Reference](https://superuser.com/questions/1578372/run-wsl2-inside-vmware-workstation-15)\]