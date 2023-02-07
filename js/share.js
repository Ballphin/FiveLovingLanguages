const url = 'https://5lovinglanguages-kr.netlify.app/';
var name = Buffer.from('5가지 사랑의언어', 'utf-8').toString();
var shaa = Buffer.from('공유하기', 'utf-8').toString();

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;

    const shareTitle = name;
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'img/image-' + resultAlt + '.png';
    const shareURL = url + 'page/result-' + resultAlt + '.html';

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
            },
        },

        buttons: [
            {
                title: 'Share',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                    },
                },
            ]
    });

}
