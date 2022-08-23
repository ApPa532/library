$(function () {




    $('.open').text("접수중"); //.next()메서드를 이용해 텍스트 내용을 입력
    $('.close').text("마감"); //.next()메서드를 이용해 텍스트 내용을 입력


    /* 배너 */
    var visual = $('#main_banner ul li'); //슬라이드 이미지
    var button = $('.banner_btn li'); //동그라미 버튼
    var current = 0; //초기에 보여질 이미지
    var setIntervalID; //clearInterval을 사용하기 위해 변수가 필요

    timer(); //사용자 지정함수

    function timer() {
        setIntervalID = setInterval(function () {
            var prev = visual.eq(current);
            var pn = button.eq(current);
            move(prev, 0, '-100%');
            pn.removeClass('Bon');

            current++;

            if (current == visual.size()) {
                current = 0
            }

            var next = visual.eq(current);
            var pnn = button.eq(current);

            move(next, '100%', 0);
            pnn.addClass('Bon');

        }, 4000);
    };

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        }, 1500);
    }

    //버튼을 클릭했을 때
    button.on({
        click: function () {

            var tg = $(this); //클릭되어진 버튼을 타겟 tg에 담고
            var i = tg.index(); //index: 순번(선택한 버튼의 인덱스 번호)

            button.removeClass('Bon'); //활성화된 on 해제
            tg.addClass('Bon'); //선택되어진 버튼의 on 활성화

            move1(i);
        }
    });

    function move1(i) {
        if (current == i) return //현재 보이는 이미지가 i와 같다면 리턴을 이용해서 종료

        var currentEl = visual.eq(current);
        var nextEL = visual.eq(i);

        currentEl.css({
            left: 0
        }).stop().animate({
            left: '-100%'
        }, 500);
        nextEL.css({
            left: '100%'
        }).stop().animate({
            left: 0
        }, 500);

        current = i; //i는 현재 보여지는 이미지

    }

    //호버시 멈추게 하는 기능
    $('#main_banner').on({
        mouseover: function () {
            clearInterval(setIntervalID);


        },
        mouseout: function () {
            timer();
        }
    });

    function move(tg, start, end) { //파라미터(매개변수)
        tg.css('left', start).stop().animate({
            left: end
        }, {
            duration: 500,
        });
    }




    var tab = $('#news_nav > ul >li');
    var content = $('.on > ul');

    content.hide().eq(0).show();
    tab.click(function(e){

        e.preventDefault();
        var tg = $(this)
        var i = tg.index()
        tab.removeClass('on')
        tg.addClass('on');
        content.css('display', 'none');
        content.eq(i).css('display', 'block')
    });





    $('nav>div').mouseover(function () {
        $('#sub_wrap').stop().slideDown(0)
    });

    $('header').mouseleave(function () {
        $('#sub_wrap').stop().slideUp(0)
    });


    

    $('#rankbtn li').click(function () {
        $('#rankbtn li.rankon').removeClass('rankon')
        $(this).addClass('rankon')
    });

});






$(document).ready(function () { //html문서가 화면에 뿌려진 후 이벤트 동작 준비
    /* 여러줄 주석 */ //한줄주석
    $(".titles>a").click(function () {
        $(this).css("color", "purple");
    })

    $('#page_num a').click(function () {
        $(this).css("color", "purple");
    })
});



$(function () {



    /* var menu = document.getElementsByClassname('on')
    var nexSibling = menu.nextSibling; */
    /* var tabList = $('#news_menu ul li');

    for (var i = 0; i < tabList.length; i++) {
        tabList[i].$('.next').addEventListener('click', function (e) {
            e.preventDefault();
            for (var j = 0; j < tabList.length; j++) {
                tabList[j].classList.remove('on');
            }
            this.parentNode.classList.add('on');
        });
    }
 */
   

    $('#form_btn').click(function () {
        $('#if_search_wrap').css("display", "block")
        $('footer').stop().animate({
            bottom: -1500
        }, 0);





    });

    $('#search_menu a').click(function () {
        $('#search_menu a.search_on').removeClass('search_on')
        $(this).addClass('search_on')


    })


    $('.openS').click(function () {
        $('#search_tab').stop().fadeIn(300)
        $('nav').stop().fadeOut(300)
        $('.openS').hide()
        $('.closeS').show()



    })
    $('.closeS').click(function () {
        $('#search_tab').stop().fadeOut(300)
        $('nav').stop().fadeIn(300)
        $('.openS').stop().fadeIn(0)
        $('.closeS').stop().fadeOut(0)



    })


    /* 인쇄버튼 */
    $('#print a:first-child').on('click', function () {
        window.print();
        return false;
    });

});