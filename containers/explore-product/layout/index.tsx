import { useReducer, useRef, useEffect, useCallback } from "react";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout";
import ProductFilter from "@components/product-filter/layout";
import FilterButton from "@ui/filter-button";
import { slideToggle } from "@utils/methods";

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
        slideToggle(filterRef.current);
    };

    const slectHandler = ({ value }: any, name: string) => {
        dispatch({ type: "SET_INPUTS", payload: { [name]: value } });
    };

    const priceHandler = (value: string) => {
        dispatch({ type: "SET_INPUTS", payload: { price: value } });
    };

    const sortHandler = ({ value }: any) => {
        const sortedProducts = state.products.sort((a:any, b:any) => {
            if (value === "most-liked") {
                return a.likeCount < b.likeCount ? 1 : -1;
            }
            return a.likeCount > b.likeCount ? 1 : -1;
        });
        dispatch({ type: "SET_PRODUCTS", payload: sortedProducts });
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
                <ProductFilter
                    ref={filterRef}
                    slectHandler={slectHandler}
                    sortHandler={sortHandler}
                    priceHandler={priceHandler}
                    inputs={state.inputs}
                />
            </div>
        </div>
    );
};
export default ExploreProductArea;
