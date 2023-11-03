import Guide from '@/components/Guide';
import {trim} from '@/utils/format';
import {PageContainer} from '@ant-design/pro-components';
import {useModel} from '@umijs/max';
import styles from './index.less';
import {ForControl} from "@/components/control";

const HomePage: React.FC = () => {
    const {name} = useModel('global');
    return (
        <PageContainer ghost>
            <div className={styles.container}>
                <ForControl list={[1, 2, 3]}>
                    {
                        (item: any) => {
                            return <div>{item}</div>
                        }
                    }
                </ForControl>
            </div>
        </PageContainer>
    );
};

export default HomePage;
