import React, { useState } from 'react'
import { logo } from '../../../../assets/images'
import { brifecase, dashboard, logouticon, message, signpost } from '../../../../assets/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../../../../features/auth/authSlice'

const SideBar = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user } = useSelector(state => state.auth)

	const handleLogout = () => {
		dispatch(logout())
		dispatch(reset)
		navigate('/login')
	}

	const [toggleMenu, setToggleMenu] = useState(false)

	const handleMenuClick = () => {
		setToggleMenu(!toggleMenu)
	}

	return (
		<>
			{user.user.userRole !== 'Talent' ? (
				// RESCRUITER

				<section className=' flex'>
					<div className='lg:w-[26%] w-[50%] max-sm:w-[70%] flex lg:border  flex-col h-full fixed gap-4 py-5 lg:px-5 sm:px-4 z-30  '>
						{/* MENU BAR */}
						<div
							className='lg:hidden mt-5 block space-y-1  cursor-pointer'
							onClick={handleMenuClick}
						>
							<div
								className={`w-[25px] h-[4px] bg-black transition-all  ${
									toggleMenu ? 'rotate-45 translate-y-2' : ''
								}`}
							></div>
							<div
								className={`w-[25px] h-[4px] bg-black transition-all ${toggleMenu ? 'hidden' : ''}`}
							></div>
							<div
								className={`w-[25px] h-[4px] bg-black transition-all  ${
									toggleMenu ? '-rotate-45' : ''
								}`}
							></div>
						</div>

						{toggleMenu && (
							// MOBILE RESPONSIVENESS

							<div className='lg:hidden  w-full absolute lg:top-36 top-24 left-0 bg-primary5'>
								<div className='flex mt-5 '>
									<img src={logo} alt='' className='w-28' />
								</div>

								<div className='nav mt-11 text-left flex-col flex'>
									<span>
										<p className='mt-10 bg-slate-100 w-full h-10 rounded-lg gap-3 items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer '>
											<img src={dashboard} alt='' />
											Dashboard
										</p>
									</span>
									<span>
										<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer '>
											<img src={brifecase} alt='' />
											Job Posting
										</p>
									</span>
									<span>
										<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
											<img src={signpost} alt='' />
											Application Management
										</p>
									</span>
									<span>
										<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
											<img src={message} alt='' />
											Data Managment
										</p>
									</span>
									<span>
										<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
											<img src={message} alt='' />
											Candidate Managment
										</p>
									</span>
									<span>
										<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
											<img src={message} alt='' />
											Inbox
										</p>
									</span>
									<span>
										<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
											<img src={message} alt='' />
											Reporting
										</p>
									</span>
								</div>

								<div className='mt-28 text-left flex-col flex'>
									<span>
										<p
											className='mt-10 bg-slate-100 gap-3 w-full h-10 rounded-lg items-center justify-items-end px-2 flex text-red-600 cursor-pointer hover:bg-red-600 hover:text-slate-200'
											onClick={handleLogout}
										>
											<img src={logouticon} alt='' />
											Log out
										</p>
									</span>
								</div>
							</div>
						)}
						{/* DESKTOP RESPONSIVENESS */}
						<div className='hidden lg:flex md:flex-col'>
							<div className='flex mt-4 '>
								<img src={logo} alt='' className='w-28' />
							</div>

							<div className='nav mt-5 text-left flex-col flex'>
								<span>
									<p className='mt-10 bg-slate-100 w-full h-10 rounded-lg gap-3 items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer '>
										<img src={dashboard} alt='' />
										Dashboard
									</p>
								</span>
								<span>
									<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer '>
										<img src={brifecase} alt='' />
										Job Posting
									</p>
								</span>
								<span>
									<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
										<img src={signpost} alt='' />
										Application Management
									</p>
								</span>
								<span>
									<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
										<img src={message} alt='' />
										Data Managment
									</p>
								</span>
								<span>
									<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
										<img src={message} alt='' />
										Candidate Managment
									</p>
								</span>
								<span>
									<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
										<img src={message} alt='' />
										Inbox
									</p>
								</span>
								<span>
									<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
										<img src={message} alt='' />
										Reporting
									</p>
								</span>
							</div>

							<div className='mt-10 text-left flex-col flex'>
								<span>
									<p
										className='mt-10 bg-slate-100 gap-3 w-full h-10 rounded-lg items-center justify-items-end px-2 flex text-red-600 cursor-pointer hover:bg-red-600 hover:text-slate-200'
										onClick={handleLogout}
									>
										<img src={logouticon} alt='' />
										Log out
									</p>
								</span>
							</div>
						</div>
					</div>
				</section>
			) : (
				// CANDIDATE
				<section className=' flex'>
					<div className='md:w-[26%] w-4/6 flex lg:border  flex-col h-full fixed gap-4 py-5 lg:px-5 sm:px-4 z-30  '>
						<div
							className='md:hidden mt-5 block space-y-1  cursor-pointer'
							onClick={handleMenuClick}
						>
							<div
								className={`w-[25px] h-[4px] bg-black transition-all  ${
									toggleMenu ? 'rotate-45 translate-y-2' : ''
								}`}
							></div>
							<div
								className={`w-[25px] h-[4px] bg-black transition-all ${toggleMenu ? 'hidden' : ''}`}
							></div>
							<div
								className={`w-[25px] h-[4px] bg-black transition-all  ${
									toggleMenu ? '-rotate-45' : ''
								}`}
							></div>
						</div>

						{toggleMenu && (
							// MOBILE RESPONSIVENESS
							<div className='md:hidden  w-full absolute top-36 left-0 bg-primary5'>
								<div className='flex mt-10 '>
									<img src={logo} alt='' className='w-28' />
								</div>

								<div className='nav mt-11 text-left flex-col flex'>
									<span>
										<p className='mt-10 bg-slate-100 w-full h-10 rounded-lg gap-3 items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer '>
											<img src={dashboard} alt='' />
											Dashboard
										</p>
									</span>
									<span>
										<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer '>
											<img src={brifecase} alt='' />
											Jobs
										</p>
									</span>
									<span>
										<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
											<img src={signpost} alt='' />
											Jobs Offer
										</p>
									</span>
									<span>
										<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
											<img src={message} alt='' />
											Take Test
										</p>
									</span>
								</div>

								<div className='mt-28 text-left flex-col flex'>
									<span>
										<p
											className='mt-10 bg-slate-100 gap-3 w-full h-10 rounded-lg items-center justify-items-end px-2 flex text-red-600 cursor-pointer hover:bg-red-600 hover:text-slate-200'
											onClick={handleLogout}
										>
											<img src={logouticon} alt='' />
											Log out
										</p>
									</span>
								</div>
							</div>
						)}
						{/* DESKTOP RESPONSIVENESS */}
						<div className='hidden md:flex md:flex-col'>
							<div className='flex mt-10 '>
								<img src={logo} alt='' className='w-28' />
							</div>

							<div className='nav mt-11 text-left flex-col flex'>
								<span>
									<p className='mt-10 bg-slate-100 w-full h-10 rounded-lg gap-3 items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer '>
										<img src={dashboard} alt='' />
										Dashboard
									</p>
								</span>
								<span>
									<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer '>
										<img src={brifecase} alt='' />
										Jobs
									</p>
								</span>
								<span>
									<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
										<img src={signpost} alt='' />
										Jobs Offer
									</p>
								</span>
								<span>
									<p className='mt-10 bg-slate-100 w-full gap-3  h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
										<img src={signpost} alt='' />
										<select
											name='profile'
											className='bg-transparent  w-[200px] outline-none hover:bg-primary3'
										>
											<option value=''>Profile </option>
											<option value=''>General Information</option>
											<option value=''>Work Experience</option>
											<option value=''>Add Education</option>
											<option value=''>Skills</option>
											<option value=''>Certificate</option>
										</select>
									</p>
								</span>
								<span>
									<p className='mt-10 bg-slate-100 w-full gap-3 h-10 rounded-lg items-center justify-items-end px-2 flex text-slate-500 hover:bg-primary3 hover:text-slate-200 cursor-pointer'>
										<img src={message} alt='' />
										Take Test
									</p>
								</span>
							</div>

							<div className='mt-28 text-left flex-col flex'>
								<span>
									<p
										className='mt-10 bg-slate-100 gap-3 w-full h-10 rounded-lg items-center justify-items-end px-2 flex text-red-600 cursor-pointer hover:bg-red-600 hover:text-slate-200'
										onClick={handleLogout}
									>
										<img src={logouticon} alt='' />
										Log out
									</p>
								</span>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	)
}

export default SideBar
