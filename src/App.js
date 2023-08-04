import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { signInWithGoogle } from './firebase.js';
import useUser from './hooks/useUser.js';
import Header from './components/Header.js';
import SectionType from './components/SectionType.js';
import Logo from './imgs/logo.png'
function App() {
	const user = useUser();

	return (
		<BrowserRouter>
			<Header />

			{user === null ?
				<div className="txt-center">
					<h1>Finance Management</h1>
					<p>Sign in with Google to use the app.</p>
					<br/>
					<button onClick={signInWithGoogle}>Sign In</button>

				</div>
				:
				<>
					<h1 className="txt-center">Finance Management</h1>
					<Routes>
						<Route path='/' element={<> <SectionType type='fun' /> <SectionType type='life' /> </>} />
						<Route path='/investments' element={<SectionType type='investments' />} />
						<Route path='/earnings' element={<SectionType type='earnings' />} />
						<Route path='/bank' element={<SectionType type='bank' />} />
					</Routes>
				</>
			}

			<div className="copyright">
				<small>&copy; developed by</small>
				<a href="https://rajeshdev.netlify.com/" target="_blank" rel="noopener noreferrer" className='developed' style={{textDecoration:"none",color:""}}>
					<p className='active' >RajeshDev</p>
				</a>
			</div>
		</BrowserRouter>
	);
}

export default App;