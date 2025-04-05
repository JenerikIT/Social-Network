import imgPost from '../../../assets/img/imgPost.svg'
import logoProfile from '../../../assets/img/logoProfile.svg'
import HashTag from '../../../UI/HashTag'
import './PostList.scss'
const PostList = () => {
	return (
		<div className='group-posts'>
			{Array.from({ length: 2 }).map((_, index) => (
				<div className='post' key={index}>
					<div className='top'>
						<div className='post__logo'>
							<img src={logoProfile} alt='' width={50} height={50} />
							<div className='post__info'>
								<div className='name'>Jenerik</div>
								<p>28 марта, 18:03</p>
							</div>
						</div>
						<svg
							width='5'
							height='17'
							viewBox='0 0 5 17'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.4999 4.3001C1.3401 4.3001 0.399902 3.3599 0.399902 2.2001C0.399902 1.0403 1.3401 0.100098 2.4999 0.100098C3.6597 0.100098 4.5999 1.0403 4.5999 2.2001C4.5999 3.3599 3.6597 4.3001 2.4999 4.3001Z'
								fill='white'
							/>
							<path
								d='M2.4999 10.6001C1.3401 10.6001 0.399902 9.6599 0.399902 8.5001C0.399902 7.3403 1.3401 6.4001 2.4999 6.4001C3.6597 6.4001 4.5999 7.3403 4.5999 8.5001C4.5999 9.6599 3.6597 10.6001 2.4999 10.6001Z'
								fill='white'
							/>
							<path
								d='M2.4999 16.9001C1.3401 16.9001 0.399902 15.9599 0.399902 14.8001C0.399902 13.6403 1.3401 12.7001 2.4999 12.7001C3.6597 12.7001 4.5999 13.6403 4.5999 14.8001C4.5999 15.9599 3.6597 16.9001 2.4999 16.9001Z'
								fill='white'
							/>
							<path
								d='M2.4999 4.3001C1.3401 4.3001 0.399902 3.3599 0.399902 2.2001C0.399902 1.0403 1.3401 0.100098 2.4999 0.100098C3.6597 0.100098 4.5999 1.0403 4.5999 2.2001C4.5999 3.3599 3.6597 4.3001 2.4999 4.3001Z'
								stroke='white'
							/>
							<path
								d='M2.4999 10.6001C1.3401 10.6001 0.399902 9.6599 0.399902 8.5001C0.399902 7.3403 1.3401 6.4001 2.4999 6.4001C3.6597 6.4001 4.5999 7.3403 4.5999 8.5001C4.5999 9.6599 3.6597 10.6001 2.4999 10.6001Z'
								stroke='white'
							/>
							<path
								d='M2.4999 16.9001C1.3401 16.9001 0.399902 15.9599 0.399902 14.8001C0.399902 13.6403 1.3401 12.7001 2.4999 12.7001C3.6597 12.7001 4.5999 13.6403 4.5999 14.8001C4.5999 15.9599 3.6597 16.9001 2.4999 16.9001Z'
								stroke='white'
							/>
						</svg>
					</div>
					<div className='image'>
						<img src={imgPost} alt='' />
					</div>
					<div className='description'>
						Каждый пиксель, анимация или интерактивный элемент влияют на то, как
						пользователь чувствует себя на сайте. Хороший фронтенд — это когда
						после клика хочется сказать: "Вау, как плавно!"
					</div>
					<div className='tags'>
						<HashTag title={'trends'} />
						<HashTag title={'ahmalox'} />
					</div>
				</div>
			))}
		</div>
	)
}

export default PostList
