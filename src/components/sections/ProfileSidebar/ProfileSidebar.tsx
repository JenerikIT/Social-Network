import backFoneProfile from '../../../assets/img/backProfile.svg'
import logoProfile from '../../../assets/img/logoProfile.svg'
import './ProfileSidebar.scss'

const ProfileSidebar = () => {
	return (
		<div className='profile'>
			<img src={backFoneProfile} alt='' className='backProfile' />
			<div className='profile__logo'>
				<img src={logoProfile} alt='profileLogo' />
			</div>
			<div className='profile__title'>
				<span>Jenerik</span>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M21.594 8.49565C21.3387 8.12259 21.1617 7.70165 21.0735 7.25824C20.6355 4.84305 18.7453 2.95283 16.3301 2.51486C15.8893 2.42836 15.4712 2.25112 15.1025 1.99434C13.106 0.668552 10.5094 0.668552 8.51284 1.99434C8.13978 2.24965 7.71884 2.4267 7.27544 2.51486C4.86024 2.95283 2.97002 4.84305 2.53205 7.25824C2.44555 7.69911 2.26832 8.11715 2.01154 8.48584C0.662821 10.4754 0.662821 13.086 2.01154 15.0755C2.26684 15.4486 2.44389 15.8695 2.53205 16.3129C2.97002 18.7281 4.86024 20.6184 7.27544 21.0563C7.71631 21.1428 8.13435 21.3201 8.50304 21.5768C10.4926 22.9256 13.1032 22.9256 15.0927 21.5768C15.4658 21.3215 15.8867 21.1445 16.3301 21.0563C18.7453 20.6184 20.6355 18.7281 21.0735 16.3129C21.16 15.8721 21.3373 15.454 21.594 15.0853C22.9427 13.0958 22.9427 10.4852 21.594 8.49565ZM16.4254 9.53373L11.9217 14.0375C10.7706 15.1864 8.90671 15.1864 7.75562 14.0375L7.18024 13.462C6.7901 13.0852 6.77928 12.4635 7.15607 12.0734C7.53286 11.6833 8.1546 11.6724 8.5447 12.0492C8.55289 12.0571 8.56095 12.0652 8.56887 12.0734L9.14434 12.6488C9.52813 13.0315 10.1492 13.0315 10.533 12.6488L15.0367 8.1451C15.4269 7.7683 16.0486 7.77908 16.4254 8.16922C16.793 8.54974 16.793 9.15311 16.4254 9.53373Z'
						fill='#0055FF'
						stroke='white'
					/>
				</svg>
			</div>
			<div className='profile__full-name'>
				<p>Мистер Капибара</p>
			</div>
			<div className='profile__desc-more'>
				«Что вершит судьбу человечества в этом мире? Некое незримое существо?»
			</div>
			<ul className='profile-info'>
				<li className='profile-info__item'>
					<div className='title'>379</div>
					<div className='descriprion'>Публикации</div>
				</li>
				<li className='profile-info__item'>
					<div className='title'>379</div>
					<div className='descriprion'>Публикации</div>
				</li>
				<li className='profile-info__item'>
					<div className='title'>379</div>
					<div className='descriprion'>Публикации</div>
				</li>
			</ul>
			<button className='profile__button'>Мой Профиль</button>
		</div>
	)
}

export default ProfileSidebar
