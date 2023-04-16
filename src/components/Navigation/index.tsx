import cn from 'classnames';
import { ICommon } from '../types';
import style from './index.module.scss';

interface INavigation extends ICommon {
  disabledNext: boolean;
  disabledPrev: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const Navigation: React.FC<INavigation> = ({
  disabledNext,
  disabledPrev,
  onNextClick,
  onPrevClick,
  className,
}) => (
  <div className={cn(style.navigation, className)}>
    <button
      disabled={disabledPrev}
      className={cn(style.navigationBtn, style.navigationBtnLeft)}
      onClick={onPrevClick}>
      Previous
    </button>
    <button
      disabled={disabledNext}
      className={cn(style.navigationBtn, style.navigationBtnRight)}
      onClick={onNextClick}>
      Next
    </button>
  </div>
);

export default Navigation;
