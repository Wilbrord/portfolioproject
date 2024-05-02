'use client';
import React,{useEffect, useState} from 'react'


export default function header() {
		const [selectedIndex1, setSelectedIdex1] = useState(0)
		const [isOpen, setIsOpen] = useState(false)

		const [isScrolled, setIsScrolled] = useState(false)

		useEffect(()=>{
			const handleScroll = ()=>{
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				setIsScrolled(scrollTop > 0)
			}
			window.addEventListener("scroll", handleScroll)

			return()=>{
				window.removeEventListener("scroll", handleScroll)
			}
		},[])

		console.log(isScrolled)

	return (
	<div>header</div>
  )
}
