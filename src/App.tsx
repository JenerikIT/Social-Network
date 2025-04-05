import './App.scss'

import Header from './components/Header/Header'
import ContactList from './components/sections/ContactList/ContactList'
import CreatePost from './components/sections/CreatePost/CreatePost'
import News from './components/sections/News/News'
import PostList from './components/sections/PostList/PostList'
import ProfileSidebar from './components/sections/ProfileSidebar/ProfileSidebar'
import SortDropdown from './components/sections/SortDropdown/SortDropdown'

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<div className='main-container'>
					<ProfileSidebar />
					<div className='container-posts'>
						<CreatePost />
						<SortDropdown />
						<PostList />
					</div>

					<div className='contianer-Contact'>
						<ContactList />
						<News />
					</div>
				</div>
			</main>
		</>
	)
}

export default App
