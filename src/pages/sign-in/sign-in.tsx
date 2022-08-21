import { MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import { AppDispatch } from '../../types/thunk';
import { authorise } from '../../store/assync-action';
import Logo from '../../components/logo/logo';
import ValidatorMessage from '../../components/validator-message/validator-message';
import { AppRoute, AuthorisationStatus, SignInInvalidText, signInvalidatorMessageStyle } from '../../const';
import { getAuthoriseStatus } from '../../store/app-user/selector';


function SignIn(): JSX.Element {

  const navigate = useNavigate();
  const authorisationStatus = useSelector(getAuthoriseStatus);


  useEffect(() => {
    if (authorisationStatus === AuthorisationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authorisationStatus, navigate]);

  const dispatch = useDispatch() as AppDispatch;

  const emailControl = useInput('', { regExp: /[a-z]+@[a-z]+\.ru$/ });
  const passwordControl = useInput('', {
    regExp: /(\d+[a-zA-z]+)|([a-zA-z]+\d+)/,
  });

  const handleFormSubmit = (evt: MouseEvent) => {
    evt.preventDefault();
    const authorisationData = {
      email: emailControl.inputValue,
      password: passwordControl.inputValue,
    };
    dispatch(authorise(authorisationData));
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
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
                onClick={handleFormSubmit}
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
