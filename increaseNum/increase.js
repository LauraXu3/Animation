/**
 * Created by Lenovo on 2017/1/12.
 */
function increaseNum(startVal,endVal) {

    var bar = document.getElementsByClassName('bar')[0],
        number = document.getElementsByClassName('number')[0],
        dec = endVal - startVal,
        val ;

    //num increase
    function startCount(timestamp) {
        var progress = timestamp - startVal;
        val = startVal + (endVal - startVal)*(progress / 2000);
        val = val > endVal ? endVal : val;
        number.innerHTML = val.toFixed(0) + '%';
        progress < 2000 && requestAnimationFrame(startCount);
    }
    requestAnimationFrame(startCount);

    //bar increase
    bar.style.width = endVal/100 * 70 +'%';
}

increaseNum(0,70);