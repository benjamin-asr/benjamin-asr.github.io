Benjamin is configurable via `conf` file next to application. It has 4 main sections to configure:

## Model Section: 
This section defines the location of model files. The addresses are relative to where application exists.

    ; Model path
    [model]
    fst = "Model/HCLG.fst"
    mdl = "Model/final.oalimdl"
    word = "Model/words.txt"
    cmvn = "Model/global_cmvn.stats"

## Decoder Section:
Engine related decoder settings.

    max_active = 900
    min_active = 200
    train_max = 5
    ac_scale = 0.05
    min_sil = 20

- `train_max`: Maximum number of same samples for later training.
- `min_sil`: Minimum silence before detection. This value directly connected with accuracy and latency.