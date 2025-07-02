
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
    $(".nav-item-sp button").click(function () {
        $(this).toggleClass("show");
        $(".dropDown_item_sp").toggleClass("show");
    });


});