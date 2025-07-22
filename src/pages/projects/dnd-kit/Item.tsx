import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import styles from './item.module.css';

// import { useMountStatus } from './useMountStatus';

export default function Item({
  id,
}: {
  id: string | number;
  index: number;
  column: string;
  disabled?: boolean;
}) {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  // const mounted = useMountStatus();
  // const mountedWhileDragging = isDragging && !mounted;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <button
      ref={setNodeRef}
      // className="Item"
      className={`Item ${styles.Item}`}
      data-dragging={isDragging}
      style={style}
      {...attributes}
      {...listeners}
    >
      {id}
    </button>
  );
}
