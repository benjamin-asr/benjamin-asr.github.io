#### 1. Decide on Your Wordlist: `0-20 mins`
First you need to decide if you want to train a full model(takes about a week to record all the required samples) or just a demo model(less than an hour). If you are a new user, it is recommended to start with a demo model to checkout the accuracy and get an idea of the whole process.

- **Demo Case:** Keep all the numbers from zero to nine, remove all other words in the vocabulary. `2 mins`
- **Default Case:** No changes need to be made. `0 min`
- **Customized Case:** Add or remove words as you please. However keep in mind that to achieve decent performance from the engine, you need to train `Count^2` samples, where `Count` represents the number of words in your word list. `20 mins`

**2. Record Audio Samples: `1hr / 1week`**

The number of samples depend on the user but generally the more the merrier.  Sample means an audio `.wav` file consisted of three spoken words.  

HINT: 
- Demo Model: **400 samples**.  
- Full Model: At least **5K samples**.

**3. Train a Model: `30 mins`**

Open *Gym* and train a model.

**4. Learn How to Use and Improve the Model**

Next step is to learn how to control mouse and keyboard and other special features.
Benjamin also records all the samples while you use the software so you can later train on these samples too.