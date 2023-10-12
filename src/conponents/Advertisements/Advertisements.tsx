import React from 'react';
import styles from './style.module.css';
import clsx from 'clsx';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';

interface Advertiseprops {
    _id: string | number;
    price: number;
    createdAt: string;
    imageUrl?: string;
    status: string;
    rooms: string;
    adress: string;
    isFullPost: boolean;
    isLoading: boolean;
    isEditable?: boolean;
}
const Advertise = ({
    _id,
    price,
    imageUrl,
    status,
    rooms,
    adress,
    isFullPost,
    isLoading,
    isEditable,
}: Advertiseprops) => {
    // const onClickRemove = () => {};
    return (
        <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
            {imageUrl && (
                <img
                    className={clsx(styles.image, {
                        [styles.imageFull]: isFullPost,
                    })}
                    src={imageUrl}
                    alt="#"
                />
            )}
            <div className={styles.wrapper}>
                <Stack
                    direction="row"
                    spacing={0}
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    <div className={styles.indention}>
                        <div className={styles.status}>
                            <a href="">{status}</a>
                        </div>
                        <h2
                            className={clsx(styles.price, {
                                [styles.priceFull]: isFullPost,
                            })}
                        >
                            {isFullPost ? (
                                <a href={`/posts/${_id}`}>${price}</a>
                            ) : (
                                <a href={`/posts/${_id}`}></a>
                            )}
                        </h2>

                        <ul className={styles.rooms}>
                            <li>
                                <a href={`/tag/${rooms}`}>{rooms}</a>
                            </li>
                        </ul>
                        <ul className={styles.adress}>
                            <li>
                                <a href={`/tag/${adress}`}>{adress}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="button">
                        {isEditable && (
                            <div className={styles.buttons}>
                                <a href={`/posts/${_id}/edit`}>
                                    <Button variant="outlined">
                                        Email agent
                                    </Button>
                                </a>
                            </div>
                        )}
                    </div>
                </Stack>
            </div>
        </div>
    );
};

export default Advertise;
