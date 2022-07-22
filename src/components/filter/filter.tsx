import { connect } from 'react-redux';
import { ConnectedProps } from 'react-redux';
import { MouseEvent } from 'react';
import { AppDispatch } from '../../types/thunk';
import { State } from '../../store/root-reducer';
import { setActiveFilter } from './../../store/action';
import { getActiveFilter } from '../../store/app-interface/selector';
import { CITIES } from './../../const';


function Filter({ activeFilter, onFilterChange }: PropsFromRedux) {

  const handleFilterChange =
    (city: string) => (evt: MouseEvent<HTMLAnchorElement>) => {
      evt.preventDefault();
      onFilterChange(city);
    };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city, i) => {
            const keyPropValue = city + i.toString();
            return (
              <li className="locations__item" key={keyPropValue}>
                <a
                  onClick={handleFilterChange(city)}
                  className={`locations__item-link tabs__item ${city === activeFilter ? 'tabs__item--active' : ''}`}
                  href="/#"
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  activeFilter: getActiveFilter(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onFilterChange(choosenCity: string) {
    dispatch(setActiveFilter(choosenCity));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Filter);
