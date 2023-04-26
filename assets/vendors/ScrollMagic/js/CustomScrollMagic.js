// init controller to hold all commands/animations
const controller = new ScrollMagic.Controller({ addIndicators: true });

var timeline = new TimelineMax();
var tween1 = TweenMax.staggerFromTo("#two .fadetext", 1,
{
  bottom: 0 },

{
  bottom: $('#two').height() },
0.1);

var tween2a = TweenMax.staggerTo("#two .fadetext", 0.5,
{ opacity: 1 },
0.1);

var tween2b = TweenMax.staggerTo("#two .fadetext", 0.35,
{ opacity: 0 },
0.1);

timeline.add(tween1, 0).
add(tween2a, 0).
add(tween2b, 0.5);

new ScrollMagic.Scene({
  triggerElement: "#two",
  triggerHook: 0 }).

setTween(timeline).
setPin("#two").
duration("200%").
addIndicators({ name: "FADES" }).
addTo(controller);