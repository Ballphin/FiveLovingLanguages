
function kakaoShare() {

    Kakao.Share.sendDefault({
        objectType: 'text',
        text:
            '�⺻ ���ø����� �����Ǵ� �ؽ�Ʈ ���ø��� �ؽ�Ʈ�� �ִ� 200�ڱ��� ǥ���� �� �ֽ��ϴ�.',
        link: {
            mobileWebUrl: 'https://5lovinglanguages-kr.netlify.app',
            webUrl: 'https://5lovinglanguages-kr.netlify.app',
        },
    });

}