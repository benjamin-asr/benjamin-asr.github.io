# User Guide

Detailed description of **ArBade** functionalities is discussed in this document.

1. [Record](## Record)
    * [Record Status](### Record Status)
    * [Record Parameters](### Record Parameters)
    * [Record Shortcuts](### Record Shortcuts)
2. [Train Procedure](## Train)
3. [Verify](## Verify)
    * [Verify Status](### Verify Status)
    * [Verify Parameters](### Verify Parameters)
    * [Verify Shortcuts](### Verify Shortcuts)

## Record

While recording the samples for training voice recognition engine, you should know status, parameters and shortcuts related to recording.

### Record Status

* <span style="color:#f00">Rec</span>: Records your voice
* <span style="color:#b17400">Pause</span>: Pause the Recording Procedure
* <span style="color:#10b100">Stop</span>: Stop the record and navigate to statistics panel.
* <span style="color:#008eca">Req Pause</span>: Requested pause will be commited after recording finished
* <span style="color:#00b8d7">Break</span>: Time to let you read the words before recording started

### Record Parameters

* Category: these are directories to classify samples you record with different devices. exceptions are `unverified`, `online` and `efalse` that they are used by Benjamin.
* Pause Time: Break time that let you read the words before record started.
* Num of Words: Specify the number of words to display while recording.
* Rec Time: Defines the period of recording time. Tune this parameter with `Num of Words`.
* Count: Set this to total number of samples you want to record.
* Focus Word: Displayed set of words will contain the `Focus Word`.
* Power: After recording sample power of the voice will be displayed. Care about this parameter as this will be very low if recording device has any problem.
* Time: Shows how much time passed from `Rec Time`
* Word: Shows the words you should say while recording
* Status: Shows recording status

### Record Shortcuts

* `S`: Set `Category`, `unverified` and `efalse` are prohibited. Dialog will be shown and ask for desired `Category`. You can create a new `Category` or change between categories produced in past.
* `Space`: Start or Pause recording.
* `Up/Down`: Increase/Decrease `Pause Time`.
* `Right/Left`: Increase/Decrease `Rec Time`.
* `C`: Change count, dialog will be opened and ask for how many samples would you record.
* `F`: Set `Focus Word`, then displayed words collection will contain `Focus Word`. Dialog will be opened and ask for id of `Focus Word`.
* `J/K`: Decrease/Increase `Num of Words`.
* `O`: Opens selected `Category` directory.

## Train

## Verify

By using Benjamin regularly, many samples will be created as online samples. But these samples are not labeled correctly. There is maybe some mistakes among words from a sample. These samples are accumulated in `unverified` directory and by verifying them, they will be moved to `online` directory.

Verification is done by playing the samples in `unverified` directory. you can refer to this section to know all status, parameters and shortcuts related to verification.

### Verify Status

* <span style="color:#f00">Play</span>: Play `unverified` samples
* <span style="color:#b17400">Pause</span>: Pause the playing sample
* <span style="color:#10b100">Stop</span>: Stop the record and navigate to statistics panel.
* <span style="color:#b17400">Decide Pause</span>: After each sample stopped from playing, there is a short time you can decide on what should happen to the sample
* <span style="color:#00b8d7">Break</span>: Time to let you read the words before playing started

### Verify Parameters

* Pause Time: Break time that let you read the words before record started.
* Status: Shows playing status
* Focus Word: By setting this, Player will only play the samples that contain the `Focus Word`.
* Count: Shows how many samples are in the `unverified` directory. By setting `Focus Word`, counts only samples that contain the word.
* Word: Shows the words you will check in the sample
* Time: Shows how much time passed from voice sample
* Power: Before playing sample, power of the voice will be displayed. Care about this parameter as this will be very low if recording device has any problem.
* Category is set to `unverified` and cannot be changed. `Count` is calculated from samples statistics and you cannot change it.

### Verify Shortcuts

* `Space`: Start or Pause playing.
* `Up/Down`: Increase/Decrease `Pause Time`.
* `F`: Set `Focus Word`, then displayed words collection will contain `Focus Word`. Dialog will be opened and ask for id of `Focus Word`.
* `O`: Opens `unverified` directory.
* `Z`: Press to move sample from `unverified` directory to `wrong` directory. By pressing `Z`, a dialog will be displayed and as