import React from 'react';

import { Main } from './Main';
import { BackgroundAnimation } from '../Components/Background';

import Profile from '../Assets/Me.jpg';

export const Homepage: React.FC = () => {
	const textBits: Array<string> = [
		'JavaScript',
		'TypeScript',
		'Python',
		'C++',
		'Node',
		'React',
		'Testing',
		'SW Engineering',
		'Automation',
		'CD/CI',
		'Web Development',
		'Material-UI',
		'TailwindCSS',
		'Selenium',
		'Videogames',
	];

	const [height, setHeight] = React.useState<number>(0);
	const [width, setWidth] = React.useState<number>(0);
	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (ref.current) {
			setHeight(ref.current.offsetHeight);
			setWidth(ref.current.offsetWidth);
		}
	}, [ref]);

	return (
		<Main>
			<div
				className='bg-fixed bg-cover w-full h-screen text-yellow-500 absolute bottom-0 left-0'
				ref={ref}
			>
				<BackgroundAnimation
					height={height}
					width={width}
					textBits={textBits}
					backgroundColor='rgba(31, 41, 55, 1)'
					fontColor='rgba(245, 158, 11, 1)'
				/>
			</div>
			<div className='flex flex-wrap justify-center content-end w-screen mb-0 sm:mb-10'>
				<div className='container h-auto laptop:h-3/5 sm:w-full relative bg-gray-200 text-gray-800 rounded-xl p-8 mt-32 sm:max-w-three-quarters shadow-xl'>
					<div className='container flex flex-col'>
						<div className='w-full'>
							<img
								src={Profile}
								className='w-64 h-64 rounded-full -mt-32 mx-auto clear-both shadow-xl'
								alt='Patrik Dvořáček as seen in real life'
							/>
						</div>
						<h1 className='text-5xl leading-loose'>Hello there!</h1>
						<div className='text-xl leading-8 text-justify'>
							<p>
								My name is{' '}
								<a
									href='mailto:patrik@dvoracek.dev'
									target='_blank'
									rel='noreferrer'
									className='font-extrabold'
									id='emailLink'
								>
									Patrik Dvořáček
								</a>{' '}
								and this is my page. It is very cool.{' '}
								<a
									href='https://github.com/tehSIRius/website'
									target='_blank'
									rel='noreferrer'
									className='font-extrabold'
									id='siteSourceLink'
								>
									I made it myself.
								</a>
								<br />I also do a lot of other cool stuff all over the internet.
								<br />
								It usually has something to do with{' '}
								<span className='font-semibold'>
									(Java/Type)Script, Python or automated testing.
								</span>
								<br />
								You can find more of my stuff hidden behind these nice links:
							</p>
						</div>
						<div className='flex flex-row flex-wrap justify-around mt-10'>
							<a
								href='https://github.com/tehSIRius'
								target='_blank'
								rel='noreferrer'
								id='githubLink'
							>
								<svg
									width='1em'
									height='1em'
									viewBox='0 0 32 32'
									xmlns='http://www.w3.org/2000/svg'
									className='h-20 w-20'
									fill='rgb(31, 41, 55)'
								>
									<path
										fillRule='evenodd'
										d='M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z'
									/>
								</svg>
							</a>
							<a
								href='https://twitter.com/DvoracekPatrik'
								target='_blank'
								rel='noreferrer'
								id='twitterLink'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='1em'
									height='1em'
									viewBox='0 0 33.88 33.88'
									className='h-20 w-20'
									fill='rgb(31, 41, 55)'
								>
									<path d='M30.414 10.031c.014.297.021.595.021.897 0 9.187-6.992 19.779-19.779 19.779A19.66 19.66 0 01-.001 27.584c.546.063 1.099.095 1.658.095 3.26 0 6.254-1.107 8.632-2.974a6.958 6.958 0 01-6.491-4.828c.424.082.858.125 1.308.125a6.89 6.89 0 001.83-.244 6.958 6.958 0 01-5.576-6.815v-.087c.939.521 2.01.833 3.15.869a6.95 6.95 0 01-3.091-5.787c0-1.274.343-2.467.94-3.495a19.733 19.733 0 0014.327 7.263 7.056 7.056 0 01-.18-1.584 6.95 6.95 0 016.953-6.949 6.94 6.94 0 015.07 2.192 13.944 13.944 0 004.416-1.686 6.964 6.964 0 01-3.057 3.844 13.834 13.834 0 003.991-1.092 14.104 14.104 0 01-3.465 3.6z' />
								</svg>
							</a>
							<a
								href='https://gitlab.com/theSIRius'
								target='_blank'
								rel='noreferrer'
								id='gitlabLink'
							>
								<svg
									width='1em'
									height='1em'
									viewBox='0 0 32 32'
									xmlns='http://www.w3.org/2000/svg'
									className='h-20 w-20'
									fill='rgb(31, 41, 55)'
								>
									<path d='M8.383 1.973l-4.305 11.48-.242.652-2.04 5.438L16 29.875l14.203-10.332-2.039-5.438-4.55-12.132-3.731 11.48h-7.766zM8.25 8.027l1.766 5.426H6.215zm15.5 0l2.035 5.426h-3.8zM5.465 15.453h5.2l3.429 10.563-9.89-7.196zm7.3 0h6.47L16 25.403zm8.57 0h5.196l1.266 3.367-9.895 7.196z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Main>
	);
};
