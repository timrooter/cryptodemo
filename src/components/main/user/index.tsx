import { FC } from 'react';
import { Container } from '@/components/ui/container';
import IUser from '@/assets/icons/icon-user.svg?react';

import s from './main-user.module.scss';

export const UserCount: FC = () => {
    return (
        <section className={s.userCount}>
            <Container>
                <div className={s.userCountWrapper}>
                    <h2 className={s.userCountTitle}>
                        Current Users in the system
                    </h2>

                    <div className={s.userCountNumber}>
                        <IUser className={s.userCountIcon} />

                        0
                    </div>
                </div>
            </Container>
        </section>
    );
};
