BaTool is a real-time speech recognition engine, that gets a triphone Kaldi model and do a low latency speech recognition on the data coming from the system default microphone.

## Topbar

Topbar is like [PolyBar](https://github.com/polybar/polybar), it manages different workspace, shows system status and `BaTool` detection output.

1. **Workspaces:** you can switch between 6 workspaces showed with different icons.
2. **Word detection output:** raw result of voice engine.
3. **Date and time**
4. **Music widget:** Pause/play music or go to the next/previous track.
5. **CPU usage**
6. **Speaker:** By clicking on this icon you can alter between speaker and headphone. By scrolling you can increase/decrease the volume.
7. **Focused application**
7. **System status:** Shows if system is running or sleeping or halted.

![Mom](img/mom.jpg)

The underline color of each word is set by neural network and it's sorted from top to bottom based on the confidence level of detection: 
(<span style="color:#00b8d7">High</span>
/ <span style="color:#10b100">Mid-High</span>
/ <span style="color:Orange">Mid-Low</span>
/ <span style="color:#f00">Low</span>)