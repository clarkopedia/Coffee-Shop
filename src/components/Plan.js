import React from 'react';
import Spacer from './Spacer';
import Hero from './Hero';
import HowItWorks from '../components/HowItWorks';
import OrderForm from './OrderForm';

function Plan() {
	return (
	
        <>
			<Hero
				variant="plan"
				title="Create a plan"
				description="Build a subscription plan that best fits your needs. We offer an assortment of the best 
				artisan coffees from around the globe delivered fresh to your door."
			/>
			<Spacer size={120} tabletAndUp={144} desktopAndUp={168} />
			<HowItWorks variant="plan" />
			<Spacer size={120} tabletAndUp={144} desktopAndUp={168} />
			<OrderForm />
			<Spacer size={120} tabletAndUp={144} desktopAndUp={168} />
</>
		// </motion.main>
	);
}

export default Plan;
