m = Monosynth({ 
  detune2:-.5, detune3:1, antialias:true, octave:-2, gain:1
}).note.seq( 0, 1/4 ).disconnect()
l = Monosynth({ 
  detune2:-.1, detune3:1, antialias:true, octave:-1, gain: 0.5
}).note.seq( [0, 6, 7], [1/4, 1/8, 1/4, 1/8] ).disconnect()
n = Monosynth({ 
  detune2:-.5, detune3:1, antialias:true, octave:2, gain: 0.25
}).note.seq( [0, 4, 5, 2], [3/8, 1/16, 1/16, 1/8, 1/8, 1/8, 1/4] ).disconnect()


verb = Reverb({roomSize: .95, dry:1}).bus()
m.connect(verb)
l.connect(verb)
n.connect(verb)
verb.gain.fade(0, 0.5, 4)