import { FC } from 'react';

import s from './footer.module.scss';

export const Footer: FC = () => {
    return (
        <footer id={'footer'} className={s.footer}>
            <p className={s.copyright}>
                © 2024 Wise. All Rights Reserved.
            </p>
        </footer>
    );
};
