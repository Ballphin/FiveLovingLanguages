
function kakaoShare() {

    Kakao.Share.sendDefault({
        objectType: 'text',
        content: {
            title: shareTitle, 
            description: shareDes,
            imageUrl: shareImage; 
            }
        text:
            '�⺻ ���ø����� �����Ǵ� �ؽ�Ʈ ���ø��� �ؽ�Ʈ�� �ִ� 200�ڱ��� ǥ���� �� �ֽ��ϴ�.',
        link: {
            mobileWebUrl: 'shareURL',
            webUrl: 'shareURL',
        },
    });

}