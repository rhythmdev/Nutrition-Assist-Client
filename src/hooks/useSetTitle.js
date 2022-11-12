import { useEffect } from "react";

const useSetTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Nutrition Assist`;
    }, [title]);
    }
    export default useSetTitle;
