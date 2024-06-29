import React, { useState } from 'react'
import { logo } from '../../../../assets/images'
import { AiFillCaretDown, hello, notification, profile } from '../../../../assets/icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../../Dropdown/Dropdown'

const Header = () => {
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
			<div className=' w-[100%] flex justify-end items-center  '>
				{user ? (
					<div className=' w-full flex lg:w-[74%]  mt-[100px] items-center justify-between fixed  gap-4 bg-primary5 py-5 px-16 border '>
						<Link>
							<span className='flex gap-2'>
								<p className='text-2xl font-medium'>Hello {user.user.fullName}</p>

								<img src={hello} alt='' />
							</span>
							<p className='text-slate-600'>Welcome back</p>
						</Link>

						<div className=' items-center space-x-10 flex'>
							{/* <input
								type='text'
								className='w-full rounded-md border h-11 px-4 caret-primary2 outline-none'
								placeholder='search...'
							/> */}

							<img src={notification} alt='' className='cursor-pointer' />
							<span className='flex items-center justify-center relative '>
								<Link className='group'>
									<img src={profile} alt='' className='cursor-pointer' />
									<AiFillCaretDown className='absolute left-7 top-6 w-6' />
									<ul>
										<Dropdown/>
									</ul>
								</Link>
							</span>
						</div>
					</div>
				) : null}
			</div>
		</>
	)
}

export default Header
