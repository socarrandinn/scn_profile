import { memo } from 'react';
import { Container } from 'components/styled';
import DemoContainer from '../container/ListFieldsDemoContainer';

const ListFieldsFormPage = () => {
  return (
    <Container className={'mx-auto my-8'}>
      <DemoContainer />
    </Container>
  );
};

export default memo(ListFieldsFormPage);
