
import Wrapper from "@layout/wrapper";
import Header from "@layout/header";
import ExploreProductArea from "@containers/explore-product/layout";
// Demo data
import productData from "../data/products.json";

const Explore = () => (
    <Wrapper>
        <Header />
        <main id="main-content">
            <ExploreProductArea
                data={{
                    section_title: {
                        title: "Explore Product",
                    },
                    products: productData,
                }}
            />
        </main>
    </Wrapper>
);

export default Explore;
