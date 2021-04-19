class Kakao {
  login() {
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/kakao',
    });
    window.Kakao.API.request({
      url: '/v2/user/me',
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }
  logout() {
    window.Kakao.Auth.logout();
  }
}

export default Kakao;
