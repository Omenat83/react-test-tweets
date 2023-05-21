import { ThreeDots } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderDiv>
      {' '}
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#471CA9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderDiv>
  );
};
