Benjamin is configurable via the `BaTool.conf` file next to the application. It has 4 main sections to configure:

## Decoder Section:
Engine related decoder settings.

    max_active = 900
    min_active = 200
    train_max = 5
    ac_scale = 0.05
    min_sil = 20

- `train_max`: Maximum number of same samples for later training.
- `min_sil`: Minimum silence before detection. This value directly connected with accuracy and latency.

### Captain Section:

    ; Threshold for detecting words
    [captain]
    hard_threshold = 0.35

### Miscellaneous Section:

    ; Miscellaneous parameters
    [misc]
    mic = "Sennheiser"
    channel = "com_binaee_rebound"

More info at [Developer](https://benjamin-int.github.io)