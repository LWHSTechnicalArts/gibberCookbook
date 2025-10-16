Clock.bpm = 100

let incr = Clock.bpm
let interval = null
const raise = function( target ) {
  incr += 10
  if( incr >= target ) clearInterval( interval )
  Clock.bpm = incr
  console.log(Clock.bpm)
}
interval = setInterval( ()=> raise( 200 ), 2000 )

drums = Drums()
drums.tidal('kd sd kd sd')