import { useReducer, useRef, useEffect, useCallback } from "react";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout";
import FilterButton from "@ui/filter-button";

function reducer(state:any, action:any) {
    switch (action.type) {
        case "FILTER_TOGGLE":
            return { ...state, filterToggle: !state.filterToggle };
        case "SET_INPUTS":
            return { ...state, inputs: { ...state.inputs, ...action.payload } };
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        default:
            return state;
    }
}

const ExploreProductArea = ({ className, space, data }: any) => {

    const [state, dispatch] = useReducer(reducer, {
        filterToggle: false,
        products: data.products || [],
        inputs: { price: [0, 100] },
    });

    const filterRef = useRef(null);
    const filterHandler = () => {
        dispatch({ type: "FILTER_TOGGLE" });
        if (!filterRef.current) return;
        // slideToggle(filterRef.current);
    };

    return (
        <div
            className={clsx(
                "rn-product-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row mb--50 align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        {data?.section_title && (
                            <SectionTitle
                                className="mb--0"
                                {...data.section_title}
                            />
                        )}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                        <FilterButton
                            open={state.filterToggle}
                            onClick={filterHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExploreProductArea;
