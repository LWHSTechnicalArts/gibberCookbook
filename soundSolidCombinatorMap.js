// 1. Define sounds
kick = Kick().seq([2, 2, 4], 1/4)
snare = Snare().seq([0, 0, 2], 1/8)

// 2. Define geometry
box = Box().material('green').translate(0, 0, 1)
box.size = .3
torus = Torus(Vec2(1,.1) ).material('green').translate(0, -1, 0)
twist = Twist( box, Vec2(4,4) )

// 3. Combine goemetry and render
Union2(
  twist, torus
).render()

// 4. Map geometry to sound
torus.rotation.x.map(snare, 100, 0)
box.size.map(kick, .5, .1)
twist.amount.map(kick, 5, 0)
