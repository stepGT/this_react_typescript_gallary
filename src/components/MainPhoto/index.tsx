import { ICommon, IPhoto } from '../types';

interface IMainPhoto extends ICommon {
  prevPhoto: IPhoto;
  activePhoto: IPhoto;
  nextPhoto: IPhoto;
}

const MainPhoto: React.FC<IMainPhoto> = ({ prevPhoto, activePhoto, nextPhoto }) => {
  return <div className="MainPhoto">MainPhoto</div>;
};

export default MainPhoto;
