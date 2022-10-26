import { itemType } from "../ProductList";

export interface ProductItemProps {
    product: itemType,
    className: string,
    onAdd: (e : itemType) => void,
};
