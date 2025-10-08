// create three monosynths and turn on panVoices
m = Monosynth({detune2:-.5, detune3:1, antialias:true, octave:-2, gain:1.0, panVoices: true
}).note.seq(0, 1/4)

l = Monosynth({
  detune2:-0.5, detune3:-0.8, antialias:true, octave:-1, gain: 0.5, panVoices: true
}).note.seq([0, 6, 7], [1/4, 1/8, 1/4, 1/8] )

n = Monosynth({ 
  detune2:-.5, detune3:1, antialias:true, octave:2, gain: 0.25, panVoices: true
}).note.seq( [0, 4, 5, 2], [3/8, 1/16, 1/16, 1/8, 1/8, 1/8, 1/4] )


// control panning with LFOs
m.pan = lfo('sine', 1/16, 0.499, 0.5) // Hz, amplitude, offset
n.pan = lfo('sine', 1/8, 0.499, 0.5)
l.pan = lfo('sine', 1/4, 0.499, 0.5)