/*
 * @jqueryplugin
 * @author saorbah
 * A jquery plugin which enables stars based on ratings values
 * @uses
 * $(dom).stars();
 * html
 * <span class="stars" data-numStars="{{rating}}" data-rating="{{rating}}" data-num-stars="5" ></span>
 */
$.fn.stars = function () {
  return $(this).each(function () {

    var rating = $(this).data("rating")
        ,numStars = $(this).data("numStars")
        ,fullStar = new Array(Math.floor(rating + 1)).join('<i class="fa fa-star"></i>')
        ,halfStar = ((rating % 1) !== 0) ? '<i class="fa fa-star-half-empty"></i>' : ''
        ,noStar = new Array(Math.floor(numStars + 1 - rating)).join('<i class="fa fa-star-o"></i>')

    $(this).html(fullStar + halfStar + noStar);
  });
};
