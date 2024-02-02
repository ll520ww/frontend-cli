import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import { ForControl } from '@/components/control';
import { useEffect } from 'react';
import { getData } from '@/services';

const HomePage: React.FC = () => {
  useEffect(() => {
    const main = async () => {
      const res = await getData({});
    };
    // main();
  }, []);
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <ForControl list={[1, 2, 3]}>
          {
            (item: any) => {
              return <div>{item}</div>;
            }
          }
        </ForControl>
      </div>
    </PageContainer>
  );
};

export default HomePage;
