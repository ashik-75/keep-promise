"use client";

import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";

const Sidebar = () => {
	const [input, setInput] = useState("");
	const [isPending, setIsPending] = useTransition();
	const router = useRouter();

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		if (input.length > 0) {
			setIsPending(() => router.push(`?host=${input}`));
		} else {
			router.push("/");
		}
	};
	return (
		<div className="p-5 top-0 space-y-10">
			<form onSubmit={handleSearch} className="relative">
				<input
					placeholder="your site ..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="search"
					className="border outline-none px-4 py-2 w-full"
				/>
				{isPending && (
					<Loader className="animate-spin absolute top-3 right-4" size={20} />
				)}
			</form>

			<ul className="space-y-2">
				{sites.map((site) => (
					<li
						className="text-zinc-500 cursor-pointer"
						onClick={() => router.push(`?host=${site.url}`)}
						key={site.url}
					>
						{site.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;

const sites = [
	{
		title: "Platformic",
		url: "blog.platformatic.dev",
	},
	{
		title: "Codeparrot",
		url: "10xdev.codeparrot.ai",
	},
	{
		title: "Mhammons",
		url: "mhammons.hashnode.dev",
	},
	{
		title: "K33g",
		url: "k33g.hashnode.dev",
	},
	{
		title: "serverlessfolks",
		url: "serverlessfolks.hashnode.dev",
	},
	{
		title: "networkershome",
		url: "vs.networkershome.com",
	},
	{
		title: "cynophilist",
		url: "cynophilist.hashnode.dev",
	},
	{
		title: "learnwithnehal",
		url: "learnwithnehal.hashnode.dev",
	},
	{
		title: "bhavanablog",
		url: "bhavanablog.hashnode.dev",
	},
	{
		title: "yeonnan",
		url: "yeonnan.hashnode.dev",
	},
	{
		title: "wuzpa",
		url: "wuzpa.hashnode.dev",
	},
	{
		title: "emmaelite",
		url: "emmaelite.hashnode.dev",
	},
];
