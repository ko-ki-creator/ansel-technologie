
$(function () {
  // ハンバーガーボタンクリックで実行
        $("#js-hamburger").click(function () {
        $(this).toggleClass("active");
        $("#js-nav").toggleClass("active");
    });

    // メニュー項目のクリック時にメニューを閉じる
        $(".nav-item a").click(function () {
        $("#js-hamburger").removeClass("active");
        $("#js-nav").removeClass("active");
    });
});



$(function () {
    // 大項目クリックで実行
    $(".nav-item-sp .nav-item").click(function (e) {
        e.preventDefault();
    // すでに開いているものは閉じる
        $('.dropDown_list_sp').not($(this).next()).slideUp();
    // 対象のドロップダウンをスライドダウン
        $(this).next('.dropDown_list_sp').stop(true, true).slideToggle(300);
    });
});



$(document).on('ready', function() {
    $(".gallery-content").slick({
        // autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        // dotsClass: 'slide-dots',
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>'
    });
});