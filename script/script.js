$(function() {

  const changeSlideOne = () => {
    $('.slide').css({ 'background-image' : "url(images/retreat1.jpg)" })
  };

  const changeSlideTwo = () => {
    $('.slide').css({ 'background-image' : "url(images/retreat2.jpg)" })
  };

  const changeSlideThree = () => {
    $('.slide').css({ 'background-image' : "url(images/retreat3.jpg)" })
  };

  $('#circleOne').click(() => {
    changeSlideOne();
  });

  $('#circleTwo').click(() => {
    changeSlideTwo();
  });

  $('#circleThree').click(() => {
    changeSlideThree();
  });

});
