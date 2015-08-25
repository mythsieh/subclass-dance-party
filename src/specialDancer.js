var SpecialDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="http://www.zangief.net/images/zangief4.gif">');
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  if (!window.audioPlaying) {
    window.audio.play();
    window.audioPlaying = true;
  }
};

SpecialDancer.prototype = Object.create(Dancer.prototype);
SpecialDancer.prototype.constructor = SpecialDancer;
SpecialDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};
