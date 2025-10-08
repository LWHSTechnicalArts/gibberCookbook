// 1. SETUP
Clock.bpm = 200
filter = Filter()
drums = Drums()
drums.fx.add(filter)
drums.fx.add(Distortion('crunch'))
filter.mode = 1
filter.cutoff = 0.2

//2. PERFORM

// First! Block execute both the filter sweep, and the start of whatever it is you're sweeping.
filter.cutoff.fade(0.1, 0.7, 8)
drums.tidal("sd*8")

// During your sweep, double up the drums (execute one line at a time).
drums.tidal("sd*16")
drums.tidal("sd*32")

// Next! Drop your beat after your sweep.
drums.tidal("[kd ~ ~ sd kd ~ sd ~]")