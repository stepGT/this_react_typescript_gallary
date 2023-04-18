import { IPhoto } from '../types';
import style from './index.module.scss';
import PreviewGallery from '../PreviewGallery';
import MainPhoto from '../MainPhoto';
import Navigation from '../Navigation';
import { useState } from 'react';

interface IGallery {
  photos: IPhoto[];
}

const Gallery: React.FC<IGallery> = ({ photos }) => {
  if (!photos.length) return null;
  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];
  //
  return (
    <div className={style.gallery}>
      <div className={style.galleryContainer}>
        <MainPhoto photos={photos} indexActivePhoto={indexActivePhoto} />
        <Navigation
          className={style.galleryNavigation}
          disabledNext={!nextPhoto}
          disabledPrev={!prevPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
          }}
        />
      </div>
      <PreviewGallery
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={style.galleryPreviewList}
      />
    </div>
  );
};

export default Gallery;
