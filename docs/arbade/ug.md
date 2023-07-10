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

* `S`: set `Category`

## Train

## Verify

### Verify Status

### Verify Parameters

### Verify Shortcuts