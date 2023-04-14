import { ICommon } from '../types';

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
}) => {
  return <div className="Navigation">Navigation</div>;
};

export default Navigation;
