var p = document.getElementById("star-canvas")
  , r = p.getContext("2d")
  , h = p.width = window.innerWidth
  , s = p.height = window.innerHeight
  , g = 217
  , u = []
  , c = 0
  , b = 400
  , d = document.createElement("canvas")
  , l = d.getContext("2d");
d.width = 100;
d.height = 100;
var e = d.width / 2
  , n = l.createRadialGradient(e, e, 0, e, e, e);
n.addColorStop(.025, "#fff");
n.addColorStop(.1, "hsl(" + g + ", 61%, 33%)");
n.addColorStop(.25, "hsl(" + g + ", 64%, 6%)");
n.addColorStop(1, "transparent");
l.fillStyle = n;
l.beginPath();
l.arc(e, e, e, 0, Math.PI * 2);
l.fill();
function o(t, a) {
    if (arguments.length < 2 && (a = t,
    t = 0),
    t > a) {
        var i = a;
        a = t,
        t = i
    }
    return Math.floor(Math.random() * (a - t + 1)) + t
}
function m(t, a) {
    var i = Math.max(t, a)
      , C = Math.round(Math.sqrt(i * i + i * i));
    return C / 2
}
var v = function() {
    this.orbitRadius = o(m(h, s)),
    this.radius = o(60, this.orbitRadius) / 12,
    this.orbitX = h / 2,
    this.orbitY = s / 2,
    this.timePassed = o(0, b),
    this.speed = o(this.orbitRadius) / 2e5,
    this.alpha = o(2, 10) / 10,
    c++,
    u[c] = this
};
v.prototype.draw = function() {
    var t = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
      , a = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
      , i = o(10);
    i === 1 && this.alpha > 0 ? this.alpha -= .05 : i === 2 && this.alpha < 1 && (this.alpha += .05),
    r.globalAlpha = this.alpha,
    r.drawImage(d, t - this.radius / 2, a - this.radius / 2, this.radius, this.radius),
    this.timePassed -= this.speed
}
;
for (var f = 0; f < b; f++)
    new v;
function w() {
    r.globalCompositeOperation = "source-over",
    r.globalAlpha = .8;
    var t = r.createRadialGradient(h / 2, s / 2, 0, h / 2, s / 2, s / 2);
    t.addColorStop(.025, "#0783C0"),
    t.addColorStop(.5, "#113C88"),
    t.addColorStop(1, "#1A1868"),
    r.fillStyle = t,
    r.fillRect(0, 0, h, s),
    r.globalCompositeOperation = "lighter";
    for (var a = 1, i = u.length; a < i; a++)
        u[a].draw();
    window.requestAnimationFrame(w)
}
w();
