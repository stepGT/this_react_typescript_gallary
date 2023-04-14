import cn from 'classnames';
import { ICommon, IPhoto } from '../types';
import style from './index.module.scss';

interface IMainPhoto extends ICommon {
  prevPhoto?: IPhoto;
  activePhoto: IPhoto;
  nextPhoto?: IPhoto;
}

const MainPhoto: React.FC<IMainPhoto> = ({ prevPhoto, activePhoto, nextPhoto, className }) => {
  return (
    <div className={cn(className, style.mainPhoto)}>
      {prevPhoto && (
        <img
          className={style.mainPhotoImagePrev}
          src={prevPhoto.src}
          alt={prevPhoto.description}
        />
      )}
      <img className={style.mainPhotoImage} src={activePhoto.src} alt={activePhoto.description} />
      {nextPhoto && (
        <img
          className={style.mainPhotoImageNext}
          src={nextPhoto.src}
          alt={nextPhoto.description}
        />
      )}
    </div>
  );
};

export default MainPhoto;
