import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppDispatch } from '../../types/thunk';
import { State } from './../../store/root-reducer';
import { setCurrentSortType } from '../../store/action';
import { getCurrentSortType } from '../../store/app-interface/selector';
import { SORTING_OPTIONS } from './../../const';


const mapStateToProps = (state: State) => ({
  currentSortType: getCurrentSortType(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onSortingChange(activeSortType: string): void {
    dispatch(setCurrentSortType(activeSortType));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>
type ConnectedSortingProps = PropsFromRedux

function Sorting({currentSortType, onSortingChange}: ConnectedSortingProps): JSX.Element {

  const [listStatus, setListStatus] = useState<boolean>(false);
  const [itemesStatus, setItemesStatus] = useState<boolean[]>([true, false, false, false]);

  const handleSortItemClick = (sortOption: string, itemIndex: number) => () => {
    const newItemesStatus = itemesStatus.map((_e, i) => itemIndex === i);
    setItemesStatus(newItemesStatus);
    onSortingChange(sortOption);
  };

  const handleListClick = () => setListStatus(!listStatus);

  return (
    <form onClick={handleListClick} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${listStatus ? 'places__options--opened' : ''}`}>
        {SORTING_OPTIONS.map((sortOption, i) => {
          const keyPropValue: string = sortOption + i.toString();
          return (
            <li onClick={handleSortItemClick(sortOption, i)} key={keyPropValue} className={`places__option ${itemesStatus[i] ? 'places__option--active' : ''}`} tabIndex={0}>
              {sortOption}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default connector(Sorting);
