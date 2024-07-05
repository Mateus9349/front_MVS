import NextLink from 'next/link';

import styles from './Link.module.scss';

const Link = ({text, href, ...props}) => {
    return(
        <NextLink className={styles.link} href={href} passHref>
            {text}
        </NextLink>
    )
}

export default Link;