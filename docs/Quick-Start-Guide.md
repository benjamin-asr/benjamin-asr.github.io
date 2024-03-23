## Overview

Here are the steps you need to take to make Benjamin-ASR operational.
Typically, it takes about a week to record all the required samples to make a fully functional model. However in less than an hour, you should be able to create a small demo model to checkout the accuracy and get an idea of the whole process.

**1. Decide on Your Wordlist: `less than 20 mins`**

First you need to decide if you want to train a full model or just a demo model. Training a full model requires significantly more time, therefore if you are a new user, it is recommended to start with a demo model.

- **Demo Case:** Keep all the numbers from zero to nine, remove all other words in the vocabulary.
- **Default Case:** No changes need to be made.
- **Customized Case:** Add or remove words as you please. However keep in mind that to achieve decent performance from the engine, you need to train `Count^2` samples, where `Count` represents the number of words in your word list.

**2. Record Audio Samples: `1hr / 1week`**

HINT:
The number of samples depend on the user but generally the more the merrier. For the small demo model **400 samples** should be enough. However for full functional model usually at least **5K samples** is needed. Sample means an audio `.wav` file consisted of three spoken words.

**3. Train a Model: `30 mins`**

Open *Trainer* and train a model.

**4. Learn How to Use and Improve the Model**

Next step is to learn how to control mouse and keyboard and special features Benjamin provides to ease use of common application like Firefox, Slack and ... .
Benjamin also records all the samples while you use the software so you can later train on these samples too.