const url = 'https://5lovinglanguages-kr.netlify.app/'; 

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;

    const shareTitle = "이이잉버그";
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
                title: '1234',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                    },
                },
            ]
    });

}
