const logb = (n, base) => Math.ceil(Math.log(n) / Math.log(base))

const c = {}
c.CANVAS_WIDTH = 1024//window.innerWidth
c.CANVAS_HEIGHT = 1024//window.innerHeight

c.UNIVERSE_WIDTH = c.CANVAS_WIDTH
c.UNIVERSE_HEIGHT = c.CANVAS_HEIGHT

c.UNIVERSE_SIZE = c.UNIVERSE_WIDTH * c.UNIVERSE_HEIGHT

c.NUM_STATES = 4
c.CELL_BITS = logb(c.NUM_STATES, 2)
c.NUM_NEIGHBORS = 8

c.UNIVERSE_BIT_SIZE = c.UNIVERSE_SIZE * c.CELL_BITS
c.UNIVERSE_BYTE_SIZE = Math.ceil(c.UNIVERSE_BIT_SIZE / 8)
c.UNIVERSE_INT_SIZE = Math.ceil(c.UNIVERSE_BYTE_SIZE / 4)

c.cDefines = Object.entries(c).map(([x,y]) => `#define ${x} (${JSON.stringify(y)})`).join("\n")

export default c