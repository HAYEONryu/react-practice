import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
    //Hook의 useContext로 Context 객체의 value를 가져올 수 있다.
    const { addToOrder, remove, removeAll } = useContext( AppStateContext );
    return { addToOrder, remove, removeAll };
}
