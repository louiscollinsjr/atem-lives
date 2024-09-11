import React from "react";

import MaestroProductButtonList from "../../components/maestro-product-components/maestro-product-button-list.component";
import MaestroPricing from "../../components/maestro-product-components/maestro-product-pricing.component";
import MaestroFAQ from "../../components/maestro-product-components/maestro-product-faq.component";
import AtemPerfectFitForm from "../../components/atem-perfect-fit-form.component";
import MasonaryGridCTA from "../../components/maestro-product-components/maestro-product-masonary-grid.component";

const MaestroProduct: React.FC = () => {
    return(
        <section>
            <MaestroProductButtonList />
            <MasonaryGridCTA />
            <MaestroPricing />
            <MaestroFAQ />
            <AtemPerfectFitForm />
        </section>
    )
}

export default MaestroProduct;