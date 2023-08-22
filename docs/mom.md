# Mom

Mom is like [PolyBar](https://github.com/polybar/polybar), it manages different workspace, shows system status and `BaTool` detection output. Mom is named after the fact that it will spawn all the child applications (BaTool, Chess, Rebound). Mom reads BaTool detection from `Benjamin/Mom/Labels` with [PolyBar Application format](https://github.com/polybar/polybar/wiki/Formatting). 

Mom has several widgets:

1. Workspaces: you can switch between 6 workspaces showed with different icons.
2. Word detection from `BaTool` and `ENN`.
3. Date and time
4. Music widget: Used to pause/play music. Also go to next/previous music.
5. CPU usage
6. Speaker: By clicking on this icon you can alter between speaker and headphone. By scrolling you can increase/decrease the volume.
7. Focused application
7. System status: Shows if system is running or sleeping or halted.

![Mom](img/mom.jpg)

Color of detected word is set by `ENN` application and sorted from best detection accuracy to worst:

* <span style="color:#00b8d7">Best</span>
* <span style="color:#10b100">Good</span>
* <span style="color:Orange">Lowest Confidence</span>
* <span style="color:#f00">Wrong</span>