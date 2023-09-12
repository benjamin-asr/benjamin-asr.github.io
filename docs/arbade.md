# ArBade

Features:

* Building dataset for voice recognition engine by recording voice samples
* Handy tool to train and test voice samples
* Environment to verify online samples generated while using BaTool

## [User Guide](arbade/ug.md)

# Quick Start

![FirstView](../img/first_view.png)

ArBade is a shortcut based application. Shortcuts are listed in the application topbar.

![TopBar](../img/top_bar.png)

To see all shortcuts, press `/`.

![HelpWin](../img/help_win.png)

First step is to train a model from your voice.

## Record Samples

1. specify a category name by pressing `S`. category name is used to distinguish between speaker or microphone.

2. Start to record by pressing `space`. Say the words specified between `<>` while status is `Rec`.

![Record](../img/record.png)

You can pause the Record procedure any time by using `space` and get out of record panel by pressing `Escape`. Then Statistics will be updated.

![Stat](../img/stat.png)

1. Arbitrary name of category.
2. Record list showing the samples recorded.
3. Word list showing how many samples include the specific word.
4. sample count in specific category.

Detailed description about record parameters and procedure can be found in the [User Guide](ug.md)

## Train Model

After recording around `10 x Wordlist` samples, you are ready to train your model by Pressing `T`.

![Train](../img/train.png)

At any time outside of terminal, by pressing `P` you can access the results of running train scripts in terminal. All the train procedure is automatic and you should only wait for the dialog indicating train is finished and now it's ENN samples generation turn.

![GenENN](../img/gen_enn.png)

Detailed description about train steps and procedure can be found in [User Guide](ug.md)

## Verification

When you are using Benjamin regularly, samples will be generated when issueing commands. To use these samples, you need to assure that they are matched with the detected words. For verifying these samples you can press `V` to change the verification mode and press `space` to start verification process.

![Verify](../img/verify.png)

If the sample is wrong press `Z` to delete sample while playing, or at `Decide Pause` status after voice stopped. By default after playing each sample in `unverified` category, if there wasn't any key press, the sample will be verified. you can change this behaviour by pressing `R`.

Detailed description about verification parameters and procedure can be found in [User Guide](ug.md)

Congrats! Now you know the very initial steps to train your model!
