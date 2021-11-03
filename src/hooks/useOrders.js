import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useOrders() {
    //Hook의 useContext로 Context 객체의 value를 가져올 수 있다.
    const { orders } = useContext( AppStateContext );
    return orders;
}
