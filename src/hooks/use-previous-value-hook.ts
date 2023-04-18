import { useRef, useEffect, Dispatch, SetStateAction } from 'react';

function usePrevState<S>(state: [S, Dispatch<SetStateAction<S>>]): [S, Dispatch<SetStateAction<S>>,  S | undefined] {
    const ref = useRef<S>();
    const [stateValue, stateDispatch] = state;

    useEffect(() => {
        ref.current = stateValue;
    },[stateValue]);

    return [stateValue, stateDispatch, ref.current];
}

export default usePrevState;
