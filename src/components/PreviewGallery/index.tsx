import { useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import { IPhoto, ICommon } from '../types';
import style from './index.module.scss';

interface IPreviewGallery extends ICommon {
  photos: IPhoto[];
  activePhotoIndex: number;
  className: string;
}

const PreviewGallery: React.FC<IPreviewGallery> = ({ photos, activePhotoIndex, className }) => {
  const previewContainer = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (!previewContainer.current) return;
    previewContainer.current.style.transform = `translate3d(-${activePhotoIndex * 164}px, 0, 0)`;
  }, [activePhotoIndex]);
  return (
    <div className={cn(style.previewGallery, className)}>
      {useMemo(
        () => (
          <ul className={style.previewGalleryTrack} ref={previewContainer}>
            {photos.map((photo) => (
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
        ),
        [],
      )}
      <div className={style.previewGalleryCover}>
        {activePhotoIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default PreviewGallery;
