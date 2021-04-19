const { naver } = window;
class NaverLogin {
  login() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://nid.naver.com/oauth2.0/authorize?client_id=8ovA870sFn1boYQAd6f8&response_type=code&redirect_uri=http://localhost:3000/Naver&state=http://localhost:3000/Naver',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
}

export default NaverLogin;
