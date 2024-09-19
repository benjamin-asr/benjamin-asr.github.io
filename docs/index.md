# Features

/// html | div[style='float: left; width: 45%;']
- No connection to cloud or external server.
- Low latency recognition (less than 50ms).
- No wake-up word
- Up to 99% accuracy.
///

/// html | div[style='float: right;width: 55%;']
- local training and fine-tuning for individual accent.
- Integration with external softwares through `DBus` (Linux) and &nbsp; `Named-Pipe` (Windows).
- Hands-free full mouse/keyboard control
///

/// html | div[style='clear: both;']
///

# Origin of Design
Benjamin began to control a PC through voice without any hands interaction. numerous other products exist on the market, but what sets Benjamin apart is its designed be used to all day long without causing fatigue or annoyance. This requirement stress over highest level of accuracy with focus on productivity and latency.

One example for comparison is the Google Speech Recognition Engine that generate YouTube's subtitle . This engine prioritizes accuracy across a diverse range of accents found in the general population. However, if user accent is a minority, the accuracy will compromise. Another assumption is the availability of future voice data ([non causal](https://en.wikipedia.org/wiki/Causality)), with no requirement on output latency. This drastically alters the architecture of ASR engine design to maximize the accuracy.

Benjamin addresses these challenges by decreasing the number of words in the vocabulary and focus on single person's accent rather than general public to achieve same or better accuracy than major available ASR engines, while maintaining low latency output.