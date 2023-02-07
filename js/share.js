
function kakaoShare() {

    Kakao.Share.sendDefault({
        objectType: 'text',
        content: {
            title: shareTitle, 
            description: shareDes,
            imageUrl: shareImage; 
            }
        text:
            '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다.',
        link: {
            mobileWebUrl: 'shareURL',
            webUrl: 'shareURL',
        },
    });

}