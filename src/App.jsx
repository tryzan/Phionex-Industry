import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import ITInfrastructureDesign from './pages/services/ITInfrastructureDesign';
import CloudComputing from './pages/services/CloudComputing';
import CyberSecurity from './pages/services/CyberSecurity';
import DataManagementAnalysis from './pages/services/DataManagementAnalysis';
import ITSupport from './pages/services/ITSupport';
import ProjectManagement from './pages/services/ProjectManagement';

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Navbar />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/services/it-infrastructure-design"
						element={<ITInfrastructureDesign />}
					/>
					<Route
						path="/services/cloud-computing"
						element={<CloudComputing />}
					/>
					<Route path="/services/cyber-security" element={<CyberSecurity />} />
					<Route
						path="/services/data-management-analysis"
						element={<DataManagementAnalysis />}
					/>
					<Route path="/services/it-support" element={<ITSupport />} />
					<Route
						path="/services/project-management"
						element={<ProjectManagement />}
					/>
					<Route path="/news" element={<News />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/contact-us" element={<ContactUs />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
