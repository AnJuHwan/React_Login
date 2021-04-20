class Kakao {
  login() {
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/kakao',
    });
  }

  logout() {
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log('Not logged in.');
      return;
    }
    window.Kakao.Auth.logout(function () {
      console.log(window.Kakao.Auth.getAccessToken());
    });
  }
}

export default Kakao;
