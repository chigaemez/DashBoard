import React from 'react'
import {  profile } from '../../../../assets/icons'
import SideBar from '../Sidebar/SideBar'
import Header from '../Header/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../../features/auth/authSlice'

const Candidate = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user } = useSelector(state => state.auth)

	const handleLogout = () => {
		dispatch(logout())
		dispatch(reset)
		navigate('/login')
	}

	return (
		<>
			<div className='  bg-primary5 flex flex-col '>
				<SideBar />
				<Header />

				{user.user.userRole !== 'Talent' ? (
					<div className='flex justify-center items-center py-4'>
						<div className='bg-white md:w-[70%]   lg:ml-[400px]  mt-[150px]'>
							<h2 className='text-3xl font-medium text-center md:text-left my-[50px] mx-[60px]'>
								Update Company Information
							</h2>
							<div className=' flex flex-col lg:flex-row gap-10 items-center justify-between  '>
								<div className=' lg:w-[90%] w-[100%]  '>
									<p className='font-medium lg:mx-[55px] mx-[3px] my-[30px] '>
										{' '}
										Company information
									</p>
									<div className='flex flex-wrap   gap-10   justify-center items-start'>
										<div className=' block'>
											<label htmlFor=''>Legal Comapany's Name</label>
											<input
												type='text'
												className='lg:w-[100%]  w-[100%] rounded-md border h-11 px-4 outline-none font-medium'
												placeholder='Your Company  name'
												required
											/>
										</div>

										<div className=' block'>
											<label htmlFor=''>Company's Email Address</label>
											<input
												type='email'
												className='lg:w-[100%] w-[100%] rounded-md border h-11 px-4 outline-none font-medium'
												placeholder='First name'
												required
											/>
										</div>
										<div className=' block 	'>
											<label htmlFor=''>Company's Phone number</label>
											<input
												type='number'
												className='lg:w-[100%] w-[100%] rounded-md border h-11 px-4 outline-none font-medium'
												placeholder='First name'
												required
											/>
										</div>
										<div className=' block -ml-4'>
											<label htmlFor=''>TAX Identification Number</label>
											<input
												type='text'
												className='lg:w-[100%] w-[100%] rounded-md border h-11 px-4 outline-none font-medium'
												placeholder='First name'
												required
											/>
										</div>
									</div>

									<div className='block mx-[55px] my-12'>
										<label htmlFor=''>Registered Office Address</label>
										<input
											type='test'
											className='lg:w-[100%] w-[100%] rounded-md border h-11 px-4 outline-none font-medium'
										/>
									</div>

									<div>
										<h2 className='text-3xl font-medium text-center md:text-left my-[50px] mx-[60px]'>
											Ownership And Management Information
										</h2>
										<div className=' flex flex-col lg:flex-row gap-10 items-center justify-evenly  '>
											<div className='flex flex-row gap-10 justify-around mx-[55px] items-center'>
												<div className=' block'>
													<label htmlFor=''>Name(s) of Company Owner</label>
													<input
														type='text'
														className='lg:w-[100%]  w-[100%] rounded-md border h-11 px-4 outline-none font-medium'
														placeholder='Kindly provide the name of company owner'
														required
													/>
												</div>

												<div className=' block'>
													<label htmlFor=''>Phone Number of Company Owner</label>
													<input
														type='number'
														className='lg:w-[100%] w-[100%] rounded-md border h-11 px-4 outline-none font-medium'
														placeholder='First name'
														required
													/>
												</div>
											</div>
										</div>
									</div>

									<div className=' md:w-[90%] w-[100%] mt-24   '>
										<Link to='/information'>
											<div className='flex flex-wrap    justify-end items-center'>
												<input
													type='submit'
													value='Save & Continue '
													className='bg-primary3 mx-5 px-10 py-3 text-primary5 cursor-pointer rounded-md'
												/>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					// CANDIDATE PAGE
					<div className='flex  justify-center items-center py-4'>
						<div className='bg-white md:w-[70%]   lg:ml-[400px]  mt-[150px] '>
							<h2 className='text-3xl font-medium text-center md:text-left my-[50px] mx-[50px]'>
								Update profile
							</h2>

							<div className=' flex flex-col lg:flex-row gap-10 items-center justify-evenly px-10 '>
								<div className='flex'>
									<img src={profile} alt='' className='w-64' />
								</div>
								<div className=' lg:w-[90%] w-[100%]  '>
									<p className='font-medium lg:mx-[125px] mx-[3px] my-[30px] '> Bio Data</p>
									<div className='flex flex-wrap  gap-5   justify-center items-start'>
										<input
											type='text'
											className='lg:w-[47%] w-[100%] rounded-md border h-11 px-4 outline-none font-medium'
											placeholder='First name'
											required
										/>
										<input
											type='text'
											className='lg:w-[47%] w-[100%] rounded-md border  h-11 px-4 outline-none font-medium'
											placeholder='Last name'
											required
										/>
										<input
											type='text'
											className='lg:w-[47%] w-[100%] rounded-md border h-11 px-4 outline-none font-medium'
											placeholder='Email address'
											required
										/>
										<input
											type='text'
											className='lg:w-[47%] w-[100%] rounded-md border h-11 px-4 outline-none font-medium'
											placeholder='Phone number'
											required
										/>
									</div>
								</div>
							</div>
							<div className=' lg:w-[90%] w-[100%]  '>
								<p className='font-medium lg:mx-[43px] mx-[45px] my-[30px] '>About</p>
								<div className='flex flex-wrap  gap-5   justify-center items-start'>
									<textarea
										name=''
										id=''
										cols='110'
										rows='6'
										className='resize-none border mb-16 ml w-[92%] rounded-lg outline-none p-2'
										placeholder='Write a short summery of yourself'
										required
									></textarea>
								</div>
							</div>
							<div className=' lg:w-[100%] w-[100%] flex flex-col lg:flex-row '>
								<div className='flex flex-col  lg:w-[40%] w-[60%] '>
									<h2 className='font-medium mx-[43px] lg:my-[30px]   '> Social Media Links</h2>
									<input
										type='text'
										className='lg:w-[77%] ml-[43px] w-[100%] mb-10  rounded-md border h-11 px-4 outline-none font-medium'
										placeholder='Platform'
										required
									/>
								</div>

								<div className='flex flex-col  w-[50%]   '>
									<h2 className='font-medium mx-[43px] lg:my-[30px]  cursor-pointer text-primary2 lg:text-right  '>
										{' '}
										<span className='mr-2 text-xl'>+</span> Add Link
									</h2>
									<input
										type='url'
										className='lg:w-[90%] lg:mx-4 mx-10 w-[100%] rounded-md border  h-11 px-4 outline-none font-medium'
										placeholder='Link'
										required
									/>
								</div>
							</div>

							<div className=' md:w-[90%] w-[100%]  '>
								<div className='flex items-center justify-between'>
									<h2 className='font-medium mx-[43px] my-[30px]  '> Upload CV</h2>
								</div>

								<div className='flex flex-row    justify-start items-center'>
									<input
										type='file'
										className='lg:w-7/12 w-[100%] rounded-md border ml-[40px]  h-11 px-4 outline-none font-medium'
										placeholder='Select file'
										required
									/>
									<input
										type='button'
										value='Upload '
										className='bg-primary3 px-10  py-3 text-primary5 cursor-pointer rounded-md'
									/>
								</div>
							</div>

							<div className=' md:w-[90%] w-[100%] mt-32   '>
								<Link to='/information'>
									<div className='flex flex-wrap    justify-end items-center'>
										<input
											type='submit'
											value='Save & Continue '
											className='bg-primary3 mx-5 px-10 py-3 text-primary5 cursor-pointer rounded-md'
										/>
									</div>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default Candidate
