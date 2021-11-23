$(document).ready(() => {
    $(window).scroll(() => {
        if(this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        } else {
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });

    $('.menu-toggler').click(() => {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(".goTop").click(() => {
        scroll(0, 0)
    });
});

reveal(.1, ".reveal", "0px");

/**
 * 
 * @param {string} date 
 */

function getAge(theDate) {
    let date = new Date(theDate);
    let month_diff = Date.now() - date.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);

    return age
}

let Age = document.querySelector(".age");
let Since = document.querySelector(".since");

Age.innerHTML = getAge("2006-10-02");
Since.innerHTML = getAge("2019-07-01");

document.querySelector(".date").innerHTML = new Date().getUTCFullYear();