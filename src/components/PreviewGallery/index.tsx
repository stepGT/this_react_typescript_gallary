import { IPhoto, ICommon } from '../types';

interface IPreviewGallery extends ICommon {
  photos: IPhoto[];
  activePhotoIndex: number;
  className: string;
}

const PreviewGallery: React.FC<IPreviewGallery> = ({ photos, activePhotoIndex, className }) => {
  return <div className="PreviewGallery">PreviewGallery</div>;
};

export default PreviewGallery;
