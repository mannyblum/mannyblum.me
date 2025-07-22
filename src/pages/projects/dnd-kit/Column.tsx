import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';

import styles from './column.module.css';

export default function Column({
  children,
  id,
  items,
}: {
  children: React.ReactNode;
  id: string | number;
  items: UniqueIdentifier[];
}) {
  const { setNodeRef } = useSortable({
    id,
    data: {
      type: 'container',
      children: items,
    },
  });

  // const isOverContainer = over
  //   ? (id === over.id && active?.data.current?.type !== 'container') ||
  //     items.includes(over.id)
  //   : false;

  return (
    <div className={`Column ${styles.Column}`} ref={setNodeRef}>
      {id ? (
        <div className={styles.Header}>
          {id}
          <div className={styles.Actions}>
            {/* {onRemove ? <Remove onClick={onRemove} /> : undefined}
          <Handle {...handleProps} /> */}
          </div>
        </div>
      ) : null}
      {children}
    </div>
  );
}
