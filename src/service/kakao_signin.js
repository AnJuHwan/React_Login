class Kakao {
  login() {
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/kakao',
    });
  }
  logout() {
    window.Kakao.Auth.logout();
  }
}

export default Kakao;
