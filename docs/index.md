# Features

- Speech Recognition Engine without connection to cloud or external server.
- Low latency recognition reaching down to less than 100ms.
- Remove wake-up word for every command.
- Enable local training of the model and fine-tune it for individual voices.
- Up to 99% accuracy thanks to the small set of words and adapt to the user's accent.
- Offer full customization of the word list and control over the training setup.
- Provide easy integration with other softwares through `DBus` (Linux) and `Named-Pipe` (Windows) platform.
- Ready to use voice control interface for Windows or Linux running with custom setup of [Awesome-WM](https://awesomewm.org/) and [Polybar](https://github.com/polybar/polybar).

# Origin of Design
Benjamin began as a voice control interface to control a PC without any interaction through hands. numerous other products exist on the market, offering specific application solutions. What sets Benjamin apart from these projects is its tailored design for individuals with handicap to use this system to interact with a PC all day long. This requirement stress over highest level of accuracy and focus on decreasing latency as many command and control actions require quick response time.

One notable product for comparison is the Google Speech Recognition Engine integrated into YouTube's subtitle generator. This engine prioritizes accuracy across a diverse range of accents found in the general population. However, if user accent is a minority, the accuracy will compromise.

Another critical assumption in the YouTube ASR engine is the availability of future voice data ([non causal](https://en.wikipedia.org/wiki/Causality)), with no stringent requirement on output latency. This drastically alters the architecture of ASR engine design to maximize the accuracy.

Benjamin addresses these challenges by decreasing the number of words in the vocabulary and focus on single person's accent rather than general public to achieve same or better accuracy than major ASR engines, while maintaining low latency output.It aims to provide users in need of creating a voice control software a better starting point so hopefully in future we will see more progress in future of robust ASR engines and voice control softwares for this specific application.