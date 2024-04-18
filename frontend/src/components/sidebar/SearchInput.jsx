import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { searchUser } from "../../slices/userSlice";
import { setSearchInput } from "../../slices/utilSlice";

const SearchInput = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
		setIsSearchIconRotated(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setIsSearchIconRotated(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		dispatch(setSearchInput(search));
		if (search.trim() !== '') {
			dispatch(searchUser(search));
		}
	}, [search, dispatch]);

	return (
		<form onSubmit={handleSubmit} className="flex items-center p-2">
			<label className="flex items-center rounded-sm bg-primary px-2 w-full">
				<IoSearchSharp className="w-4 outline-none mr-1" />
				<input
					type="text"
					placeholder={`${isFocused ? `` : "Search or start new chat"}`}
					className="outline-none w-full bg-primary text-xs h-10 rounded-md"
					value={search}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</label>
		</form >
	);
};

export default SearchInput;
