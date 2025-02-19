### Requirements

- **Operating system:** Windows 10 22H2, Windows 11 21H2, Linux(Advanced)
- **Access level:** Need administrator user account with disabled UAC
- **CPU:** Intel I5 10500
- **RAM:** 2 GB
- **GPU:** Not required

WARNING:
This product is not currently mature enough in terms of security bugs, Please, proceed with cautious.

INFO:
Linux is not officially supported, but if you are an enthusiastic, you should be able to get it up and running.

### Virtual Machines

You can run Benjamin-ASR under virtual machines but there are few limitation which you need to be aware:

1. Many component of Benjamin-ASR relies on AVX, although AVX is supported by almost all modern processors this may not be true when you run the software under a virtual machine.
2. Virtual Box generally have problem supporting AVX under Windows while Hyper-V is enabled. VMware don't have this issue and it became free since Nov 2024
3. For both cases under Windows, you cannot train a model inside them if Hyper-V is enabled. WSL requires Hyper-V inside guest machine and that required VT-x enabled which is only available if Hyper-V is disabled on Host machine. So at the same time only one of Host or Guest can be used for training [ref](https://superuser.com/questions/1578372/run-wsl2-inside-vmware-workstation-15)