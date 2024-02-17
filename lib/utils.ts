import { serialize } from "v8";

export const sleep = (ms: number = 2000) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Successfully completed");
		}, ms);
	});
};

export async function Await<T>({
	promise,
	children,
}: {
	promise: Promise<T>;
	children: (value: T) => JSX.Element;
}) {
	let data = await promise;

	return children(data);
}
