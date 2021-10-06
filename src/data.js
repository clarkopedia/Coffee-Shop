export const navLinks = [
	{
		text: 'Home',
		path: '/'
	},
	{
		text: 'About us',
		path: '/about'
	},
	{
		text: 'Create your plan',
		path: '/plan'
	},
]


export const questions = [
    {
    name: 'Preferences',
    question: 'How do you drink your coffee?',
    answers: [
        {
            title: 'Capsule',
            description:
                'Compatible with Nespresso systems and similar brewers',
        },
        {
            title: 'Filter',
            description:
                'For pour over or drip methods like Aeropress, Chemex, and V60',
        },
        {
            title: 'Espresso',
            description:
                'Dense and finely ground beans for an intense, flavorful experience',
        },
    ],
},
{
    name: 'Bean Type',
    question: 'What type of coffee?',
    answers: [
        {
            title: 'Single Origin',
            description:
                'Distinct, high quality coffee from a specific family-owned farm',
        },
        {
            title: 'Decaf',
            description:
                'Just like regular coffee, except the caffeine has been removed',
        },
        {
            title: 'Blended',
            description:
                'Combination of two or three dark roasted beans of organic coffees',
        },
    ],
},
{
    name: 'Quantity',
    question: 'How much would you like?',
    answers: [
        {
            title: '250g',
            description:
                'Perfect for the solo drinker. Yields about 12 delicious cups.',
        },
        {
            title: '500g',
            description:
                'Perfect option for a couple. Yields about 40 delectable cups.',
        },
        {
            title: '1000g',
            description:
                'Perfect for offices and events. Yields about 90 delightful cups.',
        },
    ],
},
{
    name: 'Grind Option',
    question: 'Want us to grind them?',
    answers: [
        {
            title: 'Wholebean',
            description:
                'Best choice if you cherish the full sensory experience',
        },
        {
            title: 'Filter',
            description:
                'For drip or pour-over coffee methods such as V60 or Aeropress',
        },
        {
            title: 'Cafetiére',
            description:
                'Course ground beans specially suited for french press coffee',
        },
    ],
},
{
    name: 'Deliveries',
    question: 'How often should we deliver?',
    answers: [
        {
            title: 'Every week',
            frequency: 'weekly',
            description:
                'per shipment. Includes free first-class shipping.',
        },
        {
            title: 'Every 2 weeks',
            frequency: 'biweekly',
            description: 'per shipment. Includes free priority shipping.',
        },
        {
            title: 'Every month',
            frequency: 'monthly',
            description: 'per shipment. Includes free priority shipping.',
        },
    ],
},
]