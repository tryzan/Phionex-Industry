const MenuItems = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Our Services',
		children: [
			{
				name: 'IT Infrastructure Design',
				url: '/services/it-infrastructure-design',
			},
			{
				name: 'Cloud Computing',
				url: '/services/cloud-computing',
			},
			{
				name: 'Cyber Security',
				url: '/services/data-management-analysis',
			},
		],
	},
	{
		name: 'News',
		url: '/news',
	},
	{
		name: 'About Us',
		url: '/about-us',
	},
	{
		name: 'Contact Us',
		url: '/contact-us',
	},
];

export default MenuItems;
