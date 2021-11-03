import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
    //Hook의 useContext로 Context 객체의 value를 가져올 수 있다.
    const { prototypes } = useContext( AppStateContext );
    return prototypes;
}
