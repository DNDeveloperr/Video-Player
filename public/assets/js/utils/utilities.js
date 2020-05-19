

function sortVideoList(videoArr) {
    function fnStr(str1) {
        const arr = [];
        for(let i = 0; i < str1.length; i++) {
            if(!isNaN(str1[i]) && str1[i] !== ' ') {
                arr.push(+str1[i]);
            } else {
                break;
            }
        }
        
        return +arr.join('');
    }
    
    return videoArr.sort((a,b)=>fnStr(a.name)-fnStr(b.name));
}

function timeStampConv(timeStamp) {
    let minutes = parseInt(timeStamp / 60);
    let seconds = parseInt(timeStamp % 60);

    if(minutes.toString().length === 1) {
        minutes = `0${minutes.toString()}`
    }

    if(seconds.toString().length === 1) {
        seconds = `0${seconds.toString()}`
    }

    return `${minutes}:${seconds}`;
}

module.exports = {
    sortVideoList,
    timeStampConv
}