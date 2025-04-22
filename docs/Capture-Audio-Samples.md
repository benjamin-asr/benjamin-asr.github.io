**1. Select Your Word List: `0-20 mins`**

First decide if you want to train a full model(takes about a week to record all the required samples) or a demo model(less than an hour). If you are a new user, we recommended to start with a demo model to checkout the accuracy and get an idea of the process.

- **Demo:** Keep all the numbers from zero to nine, remove all other words in the vocabulary. `2 mins`
- **Default:** No changes need to be made. `0 min`
- **Custom:** Add or remove words as you please. However keep in mind that to achieve decent performance from the engine, you need to train `Count^2` samples, where `Count` represents the number of words in your word list. `20 mins`

**2. Record Audio Samples: `1hr / 1week`**

The number of samples depend on the user but generally the more the merrier.  Sample means an audio `.wav` file consisted of three spoken words.  

HINT: 
- Demo Model: **400 samples**.  
- Full Model: At least **5K samples**.

**STEP A: **specify a category name by pressing `S`.

HINT:
Category name is used to distinguish a single set of voice samples. A good name could be your microphone name such as `Sennheiser PC7` or the place which the samples are recorded like `Bijan-house`

**STEP B: **Start recording by pressing `space`.

INFO:
When the recording starts couple of words will be shown up on the screen. The default setting is 3 words and you have 3 seconds to say them. The time will be shown up on the screen. For best performance try to say the words not close to the edges, so give a small pause after start and try to finish up 200ms before time up.

![Record](img/record.jpg)

3. You will be prompted to record `count` samples. At any given time you can pause the Record by pressing `space` or completely get out of the record panel by pressing `Escape`.

4. Repeat till you have enough samples.

### More Info
A detailed description of **Gym** functionalities is discussed in the [Gym User Guide](Capture-Audio-Samples/ug.md).