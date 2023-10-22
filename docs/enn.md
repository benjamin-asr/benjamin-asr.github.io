# ENN

ENN generates neural network model from ENN samples. ENN samples are cepstrums that were normalized and aligned to a single word saved as a simple 40x40 binary array.

we feed this to a convolutional neural network followed by a fully connected layer to detect out of vocabulary words.

ENN is an optional feature that brings more accuracy and let you leave the system on always, so you dont need to say wake up words.

## ENN Command Line Options

* `-u`: Set UI mode, to see the samples' image created from binary array.
* `-t`: Set Test mode
* `-f`: Testing reading file to create a dataset
* `-l`: Followed by a number to set learning rate for training neural network. e.g:

        enn.exe -l 0.001

* `-w`: Followed by a string to set the word you want to train. By using this option, training will be done only on the specified word.

        enn.exe -w sierra

![sampleLink](../img/enn_sample_link.png)


![train](../img/enn_train.png)
