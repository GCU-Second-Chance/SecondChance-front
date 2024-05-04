
const KakaoShare = () => {
    if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_KAKAO_JS_KEY);
    }

    kakao.Share.sendCustom({
        templateId: 107597,
    });
    }
};


export default  KakaoShare ;

