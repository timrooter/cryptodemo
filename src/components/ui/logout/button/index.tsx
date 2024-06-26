import { FC } from 'react';
import { Button } from '@/components/ui/button';

import s from './ui-logout-btn.module.scss';

export const BtnLogout: FC = () => {
    return (
        <Button
            type={'button'}
            theme={'bordered'}
            classes={s.btnLogout}
        >
            Logout
        </Button>
    );
};
