import { useInput } from './../../hooks/useInput';
import ValidatorMessage from '../../components/validator-message/validator-message';
import { SignInInvalidText, signInvalidatorMessageStyle} from './../../const';

function SignIn(): JSX.Element {
  const emailControl = useInput('', { regExp: /[a-z]+@[a-z]+\.ru$/ });
  const passwordControl = useInput('', {
    regExp: /(\d+[a-zA-z]+)|([a-zA-z]+\d+)/,
  });

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div
                className="login__input-wrapper form__input-wrapper"
                style={{ position: 'relative' }}
              >
                <label className="visually-hidden">E-mail</label>
                <input
                  onChange={emailControl.handleInputChange}
                  onBlur={emailControl.handleBlurredStatus}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={emailControl.inputValue}
                />
                {!emailControl.isControlValid && emailControl.isBlurred && (
                  <ValidatorMessage
                    messageText={SignInInvalidText.Login}
                    extraStyle={signInvalidatorMessageStyle}
                  />
                )}
              </div>
              <div
                className="login__input-wrapper form__input-wrapper"
                style={{ position: 'relative' }}
              >
                <label className="visually-hidden">Password</label>
                <input
                  onChange={passwordControl.handleInputChange}
                  onBlur={passwordControl.handleBlurredStatus}
                  value={passwordControl.inputValue}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                {!passwordControl.isControlValid &&
                  passwordControl.isBlurred && (
                  <ValidatorMessage
                    messageText={SignInInvalidText.Password}
                    extraStyle={signInvalidatorMessageStyle}
                  />
                )}
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={
                  !(
                    emailControl.isControlValid &&
                    passwordControl.isControlValid
                  )
                }
              >
                Sign in
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SignIn;
