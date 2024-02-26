import './loading.css';

function Loading(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">Loading</b>
                <p className="cities__status-description">
                  please wait
                </p>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Loading;
