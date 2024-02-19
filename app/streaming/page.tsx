import { sleep } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Suspense, cache } from "react";

const Streaming = () => {
	return (
		<div className="p-10">
			<Suspense
				fallback={
					<div className="flex gap-5 items-center">
						<Loader2 size={14} className="animate-spin" />{" "}
						<span>Loading ...</span>
					</div>
				}
			>
				<User />
			</Suspense>

			<Suspense
				fallback={
					<div className="flex gap-5 items-center">
						<Loader2 size={14} className="animate-spin" />{" "}
						<span>Loading ...</span>
					</div>
				}
			>
				<User />
			</Suspense>

			<Suspense
				fallback={
					<div className="flex gap-5 items-center">
						<Loader2 size={14} className="animate-spin" />{" "}
						<span>Loading ...</span>
					</div>
				}
			>
				<User />
			</Suspense>
		</div>
	);
};

export default Streaming;

const User = async () => {
	const user = await loadUser();

	return (
		<div className="max-w-md p-10 border rounded-3xl">
			{user.name} {user.age}
		</div>
	);
};

const loadUser = cache(async () => {
	await sleep(2000);

	console.log("Calling ...");

	return { name: "Alex", age: 33 };
});
