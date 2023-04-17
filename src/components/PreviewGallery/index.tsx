import cn from 'classnames';
import { IPhoto, ICommon } from '../types';
import style from './index.module.scss';

interface IPreviewGallery extends ICommon {
  photos: IPhoto[];
  activePhotoIndex: number;
  className: string;
}

const PreviewGallery: React.FC<IPreviewGallery> = ({ photos, activePhotoIndex, className }) => {
  return (
    <div className={cn(style.previewGallery, className)}>
      <ul className={style.previewGalleryTrack}>
        {photos.map(photo => (
          <li key={photo.id}>
            <button className={style.previewGalleryPreview} onClick={() => {}}>
              <img
                className={style.previewGalleryImage}
                src={photo.preview}
                alt={photo.description}
              />
            </button>
          </li>
        ))}
      </ul>
      <div className={style.previewGalleryCover}>
        {activePhotoIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default PreviewGallery;
